/* eslint-disable react/jsx-props-no-spreading */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Component, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Slider.module.scss';
import Table from '../DatabaseSchema/Table/Table';
import { Table as TableInfos } from '../../views/Table/Table';
import { ReduxState } from '../../utils/types';
import { setCurrentSlide } from '../../store/actions/schemaActions';
import { Header } from '../Header/Header';

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
    console.log(this.state.currentSlide);
  };

  prev = (): void => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };
}

export const Slider = (customizedProps: any): React.ReactElement => {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state: ReduxState) => state.currentSlide);
  const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };
  const containerStyle = { margin: '5px 0 20px' };
  const externalCarousel = new ExternalControlledCarousel([]);
  const { props } = externalCarousel;
  const { schemas, onClick, currentTable } = customizedProps;

  function renderTables(schema): React.ReactElement {
    let xPosition = -5;
    return schema.tables.map((table) => (
      <Table
        position={[xPosition++, 1, -2]}
        table={table}
        key={table.name}
        onClick={() => onClick(table)}
      />
    ));
  }

  function renderSchemas(): any {
    return schemas.map((schema) => (
      <div className={styles.schema__container}>
        <Header />
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
          />
          {renderTables(schema)}
        </Canvas>
      </div>
    ));
  }

  function updateCurrentSlide(index): void {
    if (currentSlide !== index) {
      dispatch(setCurrentSlide(index));
    }
  }

  function next(): void {
    dispatch(setCurrentSlide(currentSlide + 1));
  }

  function prev(): void {
    dispatch(setCurrentSlide(currentSlide - 1));
  }

  return (
    <div>
      {currentTable ? <TableInfos table={currentTable} /> : renderSchemas()}
      {/* <div style={containerStyle}>
        <br />
        <Carousel
          autoPlay={false}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
          showThumbs={false}
          {...props}
        >
          <div>teste</div>
          <div>teste2</div>
        </Carousel>
        <p>Slide value: {currentSlide}</p>
        <p style={containerStyle}>
          Use the buttons above to change the selected schema visualization
        </p>
        <button type="button" onClick={prev} style={buttonStyle}>
          Prev
        </button>
        <button type="button" onClick={next} style={buttonStyle}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Slider;
