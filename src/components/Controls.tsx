import React from "react";

interface ControlsProps {
  onRotate: (angle: number) => void;
  onScale: (factor: number) => void;
  onTranslate: (x: number, y: number, z: number) => void;
}

const Controls: React.FC<ControlsProps> = ({
  onRotate,
  onScale,
  onTranslate,
}) => {
  return (
    <div className="controls">
      <button className="btn" onClick={() => onRotate(10)}>
        Rotate
      </button>
      <button className="btn" onClick={() => onScale(1.1)}>
        Scale
      </button>
      <button className="btn" onClick={() => onTranslate(1, 0, 0)}>
        Translate
      </button>
    </div>
  );
};

export default Controls;
