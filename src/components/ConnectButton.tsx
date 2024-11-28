import {ConnectButton} from '@rainbow-me/rainbowkit';
import {useDispatch} from "react-redux";
import {connectHandler} from "../utils/connectHandler.ts";
import {useTranslation} from "react-i18next";

export const WalletConnectButton = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated')
                if (account) connectHandler(account.address, dispatch)

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button onClick={openConnectModal} type="button" style={{
                                        borderRadius: '100px',
                                        backgroundColor: '#56AAC8',
                                        width: '100%',
                                        padding: '10px 0',
                                        fontWeight: '500',
                                        fontFamily: 'HarmonyOS Sans, serif',
                                        fontSize: '16px',
                                        textAlign: 'center',
                                        marginTop: '20px',
                                        border: 'none',
                                        outline: 'none',
                                        color: '#fff',
                                        cursor: 'pointer',
                                    }}>
                                        {t('common:connect')}
                                    </button>
                                );
                            }
                            // if (chain.unsupported) {
                            //     return (
                            //         <button onClick={openChainModal} type="button">
                            //             Wrong network
                            //         </button>
                            //     );
                            // }

                            // return (
                            //     <div style={{ display: 'flex', gap: 12 }}>
                            //         <button
                            //             onClick={openChainModal}
                            //             style={{ display: 'flex', alignItems: 'center' }}
                            //             type="button"
                            //         >
                            //             {chain.hasIcon && (
                            //                 <div
                            //                     style={{
                            //                         background: chain.iconBackground,
                            //                         width: 12,
                            //                         height: 12,
                            //                         borderRadius: 999,
                            //                         overflow: 'hidden',
                            //                         marginRight: 4,
                            //                     }}
                            //                 >
                            //                     {chain.iconUrl && (
                            //                         <img
                            //                             alt={chain.name ?? 'Chain icon'}
                            //                             src={chain.iconUrl}
                            //                             style={{ width: 12, height: 12 }}
                            //                         />
                            //                     )}
                            //                 </div>
                            //             )}
                            //             {chain.name}
                            //         </button>
                            //         <button onClick={openAccountModal} type="button">
                            //             {account.displayName}
                            //             {account.displayBalance
                            //                 ? ` (${account.displayBalance})`
                            //                 : ''}
                            //         </button>
                            //     </div>
                            // );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};