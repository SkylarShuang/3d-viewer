import React from "react";

interface Model {
  id: number;
  name: string;
  category: string;
  previewImage: string;
  url: string;
}

const models: Model[] = [
  {
    id: 1,
    name: "Model 1",
    category: "Category 1",
    previewImage:
      "https://img.alicdn.com/imgextra/i3/O1CN01FUC4tb1Js3uolxrWZ_!!6000000001083-0-tps-934-1158.jpg",
    url: "https://models.babylonjs.com/flightHelmet.glb",
  },
  // 添加更多模型
];

interface ModelListProps {
  onSelect: (model: Model) => void;
}

const ModelList: React.FC<ModelListProps> = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model) => (
        <div key={model.id} className="card" onClick={() => onSelect(model)}>
          <img
            src={model.previewImage}
            alt={model.name}
            style={{ objectFit: "cover" }}
          />
          <h2>{model.name}</h2>
          <p>{model.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ModelList;
