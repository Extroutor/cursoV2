import React, {ReactElement, useEffect, useState} from 'react'
import Step from "@/components/Pages/MainPage/Step.tsx"
import img2 from "@/icons/welcome/curso2.tsx"
import img3 from "@/icons/welcome/curso3.tsx"
import img4 from "@/icons/welcome/curso4.tsx"
import img5 from "@/icons/welcome/curso5.tsx"
import {Box} from "@mui/material";
import Curso1 from "@/icons/welcome/curso1.tsx";

type StepType = {
  step: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: ReactElement,
  title: ReactElement,
  description: ReactElement,
  connect?: boolean
}

const steps: StepType[] = [
  {
    step: 1,
    image: Curso1,
    title: <div>Hey there! <span style={{color: '#56AAC8'}}>CURSO</span> here — your new, easy way to pay for services
    </div>,
    description: <div>Our app uses a cool technology that sends money from you to the service provider every second.
      We call it <b style={{color: '#696969', fontWeight: '500'}}>streaming payments.</b></div>,
  },
  {
    step: 2,
    image: img2,
    title: <div>Pay by the second, stop anytime</div>,
    description: <div>With streaming payments, you’re in total control. Pay for only the time you use, down to the
      second. And if anything unexpected happens, you can terminate instantly.</div>,
  },
  {
    step: 3,
    image: img3,
    title: <div>Trust anyone, even strangers</div>,
    description: <div>Payments only begin once the sender has sufficient funds, and if you’re the service provider and
      things don’t work out, you won’t lose a cent — every second of work is compensated.</div>,
  },
  {
    step: 4,
    image: img4,
    title: <div>Easy transition to a new way of paying</div>,
    description: <div>Streaming payments are powered by blockchain, but don’t worry — we’ve made it super simple and
      comfortable. We use the USDC token, which works just like dollars but in the crypto world.</div>,
  },
  {
    step: 5,
    image: img5,
    title: <div>Ready to give it a try?</div>,
    description: <div>To start streaming, just connect a crypto wallet. It’s simple — you can link an existing wallet or
      set up a new one using your social media or email.

      Or you can just look around the app first.</div>,
    connect: true
  },
]

const Intro = () => {
  const [step, setStep] = useState(1)
  const [stepObj, setStepObj] = useState<StepType | null>(null)

  useEffect(() => {
    setStepObj(steps.find(item => item.step === step) || null)
    if (step === 2)
      localStorage.setItem('intro', 'shown')
  }, [step])

  return (
    <Box sx={{maxWidth: '800px', height: '100%'}}>
      {stepObj && <Step item={stepObj} step={step} setState={setStep}/>}
    </Box>
  )
}

export default Intro