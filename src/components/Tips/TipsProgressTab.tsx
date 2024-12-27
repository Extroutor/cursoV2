import React from 'react';
import {DotButton, useDotButton} from "@/components/Tips/DotButton.tsx";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TipsProgressTab = ({emblaApi}: {emblaApi: any}) => {
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div className="embla__controls">
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TipsProgressTab;