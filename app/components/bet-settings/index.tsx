"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./chip-slider.scss";
import {
  ChipLabelMapper,
  ChipMapper,
  ChipValuesBySystem as ChipValues,
  systemName,
} from "../../common/constants/index";

const SlidingTimeInMillisecond = 100;
let isSwipe = true;

interface ChipData {
  chip: number;
}

const chipData: ChipData[] = [
  {
    chip: 1,
  },
  {
    chip: 5,
  },
  {
    chip: 10,
  },
  {
    chip: 20,
  },
  {
    chip: 50,
  },
  {
    chip: 100,
  },
  {
    chip: 200,
  },
];

export const ChipSlider = () => {
  const [enabledPrevBtn, setEnabledPrevBtn] = useState(false);
  const [enabledNextBtn, setEnabledNextBtn] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const [selectedChip, setSelectedChip] = useState(1);
  let sliderRef: any = null;

  const getCurrentSlidesToShow = () => {
    const currentBreakPoint = sliderRef.state.breakpoint;
    const sliderResponsiveSettings = sliderRef.props.responsive;
    const currentResponsiveSettings = sliderResponsiveSettings.find(
      (settings: any) => settings.breakpoint === currentBreakPoint
    );

    return (
      currentResponsiveSettings?.settings?.slidesToShow ??
      sliderRef.props.slidesToShow
    );
  };

  const updateArrowsByChipValue = (chipValue: number) => {
    const chipIndex = ChipValues.indexOf(chipValue);

    chipIndex === 0 ? setEnabledPrevBtn(false) : setEnabledPrevBtn(true);
    chipIndex === ChipValues.length - 1
      ? setEnabledNextBtn(false)
      : setEnabledNextBtn(true);
  };

  const disableSelectChipWhenSliding = () => {
    setIsSliding(true);

    const slidingTimeOut = setTimeout(() => {
      setIsSliding(false);
      clearTimeout(slidingTimeOut);
    }, SlidingTimeInMillisecond);
  };

  const handleSelectChip = (chipValue: number) => {
    setSelectedChip(chipValue);
    updateArrowsByChipValue(chipValue);
    //updateBetValue(chipValue);
  };

  const onClickNext = () => {
    if (enabledNextBtn) {
      const chipIndex = ChipValues.indexOf(selectedChip);
      const newSelectedChip = ChipValues[chipIndex + 1];
      const currentSlideToShow = getCurrentSlidesToShow();

      isSwipe = false;
      sliderRef.slickGoTo(chipIndex + 3 - currentSlideToShow);
      handleSelectChip(newSelectedChip);
      disableSelectChipWhenSliding();
    }
    console.log("onClickNext");
  };

  const onClickPrev = () => {
    if (enabledPrevBtn && !isSliding) {
      const chipIndex = ChipValues.indexOf(selectedChip);
      const newSelectedChip = ChipValues[chipIndex - 1];

      isSwipe = false;
      sliderRef.slickGoTo(chipIndex - 2);
      handleSelectChip(newSelectedChip);
      disableSelectChipWhenSliding();
    }
  };

  useEffect(() => {
    if (sliderRef) {
      isSwipe = false;
      const chipIndex = ChipValues.indexOf(selectedChip);
      sliderRef.slickGoTo(chipIndex);
      updateArrowsByChipValue(selectedChip);
    }
  }, []);

  const settings = {
    speed: SlidingTimeInMillisecond,
    infinite: false,
    adaptiveHeight: true,
    swipeToSlide: true,
    slidesToShow: 5,
    arrows: false,
    onSwipe: () => {
      isSwipe = true;
    },
    beforeChange: (oldIndex: number, newIndex: number) => {
      if (isSwipe) {
        const currentSlideToShow = getCurrentSlidesToShow();

        oldIndex > newIndex &&
          handleSelectChip(ChipValues[newIndex + currentSlideToShow - 1]);
        oldIndex < newIndex && handleSelectChip(ChipValues[newIndex]);
      }
    },
  };

  return (
    <div className="chip-slider">
      <span className="icon-prev" onClick={onClickPrev}>
        <img src="/images/bet-settings/icon-arrow-back.svg" alt="arrow-bg" />
      </span>
      <Slider {...settings}>
        {ChipValues.map((value) => (
          <div className="chip-container" key={value}>
            <img
              src={`/images/bet-settings/${ChipMapper[systemName][value]}.svg`}
              alt="chip"
            />
          </div>
        ))}
      </Slider>

      <span className={`icon-next`} onClick={onClickNext}>
        <img src="/images/bet-settings/icon-arrow-back.svg" alt="arrow-bg" />
      </span>
    </div>
  );
};

export default ChipSlider;
