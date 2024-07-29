"use client";

import React, { useState } from "react";
import ModelList from "../components/ModelList";
import ModelViewer from "../components/ModelViewer";
import Controls from "../components/Controls";
import TransformDisplay from "../components/TransformDisplay";

interface Transform {
  rotation: number;
  scale: number;
  position: { x: number; y: number; z: number };
}

const HomePage: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<{
    id: number;
    name: string;
    category: string;
    previewImage: string;
    url: string;
  } | null>(null);
  const [transform, setTransform] = useState<Transform>({
    rotation: 0,
    scale: 1,
    position: { x: 0, y: 0, z: 0 },
  });

  const handleRotate = (angle: number) => {
    setTransform((prev) => ({ ...prev, rotation: prev.rotation + angle }));
  };

  const handleScale = (factor: number) => {
    setTransform((prev) => ({ ...prev, scale: prev.scale * factor }));
  };

  const handleTranslate = (x: number, y: number, z: number) => {
    setTransform((prev) => ({
      ...prev,
      position: {
        x: prev.position.x + x,
        y: prev.position.y + y,
        z: prev.position.z + z,
      },
    }));
  };

  return (
    <div className="container">
      <h1 className="text-3xl mb-4 font-bold">3D Model Viewer</h1>
      <ModelList onSelect={setSelectedModel} />
      {selectedModel && (
        <>
          <ModelViewer modelUrl={selectedModel.url} />
          <Controls
            onRotate={handleRotate}
            onScale={handleScale}
            onTranslate={handleTranslate}
          />
          <TransformDisplay transform={transform} />
        </>
      )}
    </div>
  );
};

export default HomePage;
