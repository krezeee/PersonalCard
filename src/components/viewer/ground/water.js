import { PhysicsImpostor, MeshBuilder } from "babylonjs";

export const createWater = (scene, materials) => {
  const water = MeshBuilder.CreateGround(
    "pool",
    { height: 150, width: 150 },
    scene
  );
  water.position.y = 5;
  water.physicsImpostor = new PhysicsImpostor(
    water,
    PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0.05 },
    scene
  );

  water.material = materials.waterMaterial;
  water.receiveShadows = true;

  return water;
};
