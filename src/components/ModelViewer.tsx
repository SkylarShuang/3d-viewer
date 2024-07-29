// components/ModelViewer.tsx
import React, { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  SceneLoader,
} from "@babylonjs/core";
import "@babylonjs/loaders";

interface ModelViewerProps {
  modelUrl: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 2,
      2,
      Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, true);
    new HemisphericLight("light", new Vector3(1, 1, 0), scene);

    if (modelUrl) {
      SceneLoader.ImportMesh("", modelUrl, "", scene, (meshes) => {
        // Optionally, you can manipulate the loaded meshes here
      });
    }

    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      engine.dispose();
    };
  }, [modelUrl]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default ModelViewer;
