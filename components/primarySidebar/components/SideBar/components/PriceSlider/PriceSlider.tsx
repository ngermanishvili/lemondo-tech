import React, { useState, useEffect } from 'react';
import { SliderComponentProps } from '../../../../../../types/index';
import ReactSlider from 'react-slider'; //! Here i'm using ReactSlider BCS styling exact antd slider is not supported by scss.
import './PriceSlider.scss'

const SliderComponent: React.FC<SliderComponentProps> = ({ minPrice, maxPrice, onPriceChange }) => {
  const [value, setValue] = useState<[number, number]>([0, 1200]);

  useEffect(() => {
    if (minPrice !== '' || maxPrice !== '') {
      setValue([parseFloat(minPrice), parseFloat(maxPrice)]);
    } else {
      setValue([0, 1200]); //!? Reset to default
    }
  }, [minPrice, maxPrice]);

  const handleSliderChange = (values: [number, number]) => {
    setValue(values);
    onPriceChange(values);
  };

  return (
    <>
      <div className="price-container">
        <div className="slider">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            value={value}
            defaultValue={[0, 2000]}
            max={2000}
            min={0}
            onChange={handleSliderChange}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            pearling
            minDistance={1}
          />
        </div>
      </div>
      <div style={{ width: '100%', height: '30px' }}></div>
    </>
  );
};

export default SliderComponent;
