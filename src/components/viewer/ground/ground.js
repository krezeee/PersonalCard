import { PhysicsImpostor, MeshBuilder } from "babylonjs";

export const createGround = (scene, materials) => {
  const ground = MeshBuilder.CreateGround(
    "ground",
    { height: 250, width: 250 },
    scene
  );

  ground.position.y = -100;
  ground.material = materials.ground;
  ground.receiveShadows = true;
  ground.checkCollisions = true;
  ground.physicsImpostor = new PhysicsImpostor(
    ground,
    PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0 },
    scene
  );

  return ground;
};
