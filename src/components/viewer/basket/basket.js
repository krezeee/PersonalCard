import {
  MeshBuilder,
  PhysicsImpostor,
  PointerDragBehavior,
  Vector3,
  Color3,
  HighlightLayer
} from "babylonjs";

export const Basket = (scene, materials) => {
  const highlightLayer = new HighlightLayer("highlightlayer", scene);

  const basket = MeshBuilder.CreateBox(
    "Basket",
    {
      size: 10,
      width: 20,
      height: 10,
      depth: 20
    },
    scene
  );

  basket.position = new Vector3(0, 30, 0);
  basket.material = materials.concrete;

  const pointerDragBehavior = new PointerDragBehavior({
    dragPlaneNormal: new Vector3(0, 1, 0)
  });

  pointerDragBehavior.useObjectOrienationForDragging = false;

  pointerDragBehavior.onDragStartObservable.add(event => {
    highlightLayer.addMesh(basket, Color3.Blue());
  });
  pointerDragBehavior.onDragObservable.add(event => {});
  pointerDragBehavior.onDragEndObservable.add(event => {
    highlightLayer.removeMesh(basket);
  });

  basket.addBehavior(pointerDragBehavior);
  basket.physicsImpostor = new PhysicsImpostor(
    basket,
    PhysicsImpostor.BoxImpostor,
    { mass: 10000, friction: 1, restitution: 0.7 },
    scene
  );

  return basket;
};
