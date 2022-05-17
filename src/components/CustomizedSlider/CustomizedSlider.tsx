/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class ExternalControlledCarousel extends Component<
  {},
  { currentSlide: number }
> {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  getCurrentSlide = (): number => {
    const { currentSlide } = this.state;
    return currentSlide;
  };

  next = (): void => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  prev = (): void => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  updateCurrentSlide = (index): void => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };
}

export const CustomizedSlider = (customizedProps: any): React.ReactElement => {
  const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };
  const containerStyle = { margin: '5px 0 20px' };
  const externalCarousel = new ExternalControlledCarousel([]);
  const { props } = externalCarousel;
  const { children } = customizedProps;

  return (
    <div>
      <div style={containerStyle}>
        <p style={containerStyle}>
          Use the buttons above to change the selected schema visualization
        </p>
        <br />
        <p>Slide value: {externalCarousel.getCurrentSlide()}</p>
        <button
          type="button"
          onClick={externalCarousel.prev}
          style={buttonStyle}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={externalCarousel.next}
          style={buttonStyle}
        >
          Next
        </button>
        <Carousel
          autoPlay={false}
          selectedItem={externalCarousel.getCurrentSlide()}
          onChange={externalCarousel.updateCurrentSlide}
          {...props}
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomizedSlider;
