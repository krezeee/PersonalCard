import { PhysicsImpostor, MeshBuilder } from "babylonjs";

export const createGround = (scene, materials) => {
  const ground = MeshBuilder.CreateGround(
    "ground",
    { height: 150, width: 150 },
    scene
  );

  ground.material = materials.ground;
  ground.receiveShadows = true;
  ground.physicsImpostor = new PhysicsImpostor(
    ground,
    PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0 },
    scene
  );

  return ground;
};
