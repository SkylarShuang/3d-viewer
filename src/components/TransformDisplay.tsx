import React from "react";

interface Transform {
  rotation: number;
  scale: number;
  position: { x: number; y: number; z: number };
}

interface TransformDisplayProps {
  transform: Transform;
}

const TransformDisplay: React.FC<TransformDisplayProps> = ({ transform }) => {
  return (
    <div className="transform-display">
      <p>Rotation: {transform.rotation}</p>
      <p>Scale: {transform.scale}</p>
      <p>
        Position:{" "}
        {`x: ${transform.position.x}, y: ${transform.position.y}, z: ${transform.position.z}`}
      </p>
    </div>
  );
};

export default TransformDisplay;
