import useEmblaCarousel from "embla-carousel-react";
import {Box} from "@mui/material";
import {Slide1} from "@/components/Tips/Slides/Slide1.tsx"
import {Slide2} from "@/components/Tips/Slides/Slide2.tsx"
import {Slide3} from "@/components/Tips/Slides/Slide3.tsx"
import Close from "@/components/Tips/Close.tsx"
import TipsProgressTab from "@/components/Tips/TipsProgressTab.tsx";

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
        </Box>
      </Box>
    </Box>

  )
}

export default Carousel