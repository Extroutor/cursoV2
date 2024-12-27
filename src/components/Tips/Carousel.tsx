import useEmblaCarousel from "embla-carousel-react";
import {Box} from "@mui/material";
import {Slide1} from "@/components/Tips/Slides/Slide1.tsx"
import {Slide2} from "@/components/Tips/Slides/Slide2.tsx"
import {Slide3} from "@/components/Tips/Slides/Slide3.tsx"
import Close from "@/components/Tips/Close.tsx"
import TipsProgressTab from "@/components/Tips/TipsProgressTab.tsx";
import {Slide4} from "@/components/Tips/Slides/Slide4.tsx";
import {Slide5} from "@/components/Tips/Slides/Slide5.tsx";
import {Slide6} from "@/components/Tips/Slides/Slide6.tsx";
import {Slide7} from "@/components/Tips/Slides/Slide7.tsx";
import {Slide8} from "@/components/Tips/Slides/Slide8.tsx";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  return (
    <Box>
      <Close/>
      <TipsProgressTab emblaApi={emblaApi}/>
      <Box sx={{
        overflow: 'hidden',
        width: '100%',
        height: '100%'
      }} ref={emblaRef}>
        <Box sx={{
          display: 'flex',
        }}>
          <Slide1/>
          <Slide2/>
          <Slide3/>
          <Slide4/>
          <Slide5/>
          <Slide6/>
          <Slide7/>
          <Slide8/>
        </Box>
      </Box>
    </Box>

  )
}

export default Carousel