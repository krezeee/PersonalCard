import {
  MeshBuilder,
  PhysicsImpostor,
  PointerDragBehavior,
  Vector3,
  Color3,
  HighlightLayer
} from "babylonjs";

export const createBasket = (scene, materials) => {
  const highlightLayer = new HighlightLayer("highlightlayer", scene);

  const basket = MeshBuilder.CreateCylinder(
    "basket",
    {
      arc: 1,
      diameter: 20,
      height: 2
    },
    scene
  );
  basket.position = new Vector3(0, 20, 0);
  basket.material = materials.targetBoard;
  basket.receiveShadows = true;
  basket.checkCollisions = true;

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
    { mass: 500, friction: 1, restitution: 0.7 },
    scene
  );

  return basket;
};
