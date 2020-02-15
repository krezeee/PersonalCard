import { PhysicsImpostor, MeshBuilder } from "babylonjs";

export const createWater = (scene, materials) => {
  const water = MeshBuilder.CreateGround(
    "water",
    { height: 150, width: 150, updatable: true },
    scene
  );
  water.position.y = 5;
  water.physicsImpostor = new PhysicsImpostor(
    water,
    PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0 },
    scene
  );

  water.material = materials.waterMaterial;
  water.receiveShadows = true;
  water.checkCollisions = true;

  return water;
};
