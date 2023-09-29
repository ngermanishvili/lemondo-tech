import React from "react";
import ReactSlider from "react-slider";
import "./SymbolSlider.scss";

interface SymbolSliderProps {
  minSymbolCount: number;
  maxSymbolCount: number;
  onSymbolCountChange: (values: [number, number]) => void;
}

const SymbolSlider: React.FC<SymbolSliderProps> = ({
  minSymbolCount,
  maxSymbolCount,
  onSymbolCountChange,
}) => {
  return (
    <div className="symbol-container">
      <div className="slider">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[minSymbolCount, maxSymbolCount]}
          max={26}
          min={0}
          onChange={onSymbolCountChange}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          pearling
          minDistance={1}
        />
      </div>
    </div>
  );
};

export default SymbolSlider;
