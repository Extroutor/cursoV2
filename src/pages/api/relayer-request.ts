import {ethers} from 'ethers';
import type {NextApiRequest, NextApiResponse} from 'next';
import {Defender} from '@openzeppelin/defender-sdk';
import {ERC2771ForwarderABI, ERC2771ForwarderAddress} from "@/blockchain/constraints";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {request, signature} = req.body;
    if (!request.from || !request.to || !request.value) {
      res.status(400).json({error: 'Missing required fields'});
    }

    const credentials = {
      relayerApiKey: process.env.RELAYER_API_KEY_AMOY as string, // AMOY
      relayerApiSecret: process.env.RELAYER_SECRET_KEY_AMOY as string, // AMOY
    };

    // only with ethers (from official docs)
    const client = new Defender(credentials);
    const provider = client.relaySigner.getProvider();
    const signer = await client.relaySigner.getSigner(provider, {
      speed: 'fast',
    });

    const forwarderContract = new ethers.Contract(
      ERC2771ForwarderAddress,
      ERC2771ForwarderABI,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      signer as any
    );

    const newRequest = {
      from: request.from,
      to: request.to,
      value: request.value,
      gas: request.gas,
      deadline: request.deadline,
      data: request.data,
      signature,
    };

    const valid = await forwarderContract.verify(newRequest);
    if (!valid) {
      throw new Error('Invalid meta-transaction request');
    }

    try {
      await forwarderContract.callStatic.execute(newRequest);
      console.log('Simulation successful');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Simulation failed:', error);
        throw new Error(`Simulation failed: ${error.message}`);
      } else {
        console.error('Simulation failed:', error);
        throw new Error('Simulation failed');
      }
    }

    // Execute the meta-transaction via the Forwarder
    const tx = await forwarderContract.execute(newRequest);

    // Wait for the transaction to be mined
    await tx.wait();

    res.status(200).json({success: true, txHash: tx.hash});
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error starting stream:', error.message);
      res.status(500).json({success: false, error: error.message});
    } else {
      // unexpected error format
      console.error('Error starting stream:', error);
      res
        .status(500)
        .json({success: false, error: 'An unknown error occurred'});
    }
  }
}
