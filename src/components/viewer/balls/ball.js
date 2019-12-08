import { PhysicsImpostor, Mesh, Color3 } from "babylonjs";

const INITIAL_HEIGHT = 100;

export const createBall = (scene, shadowGenerator, materials) => {
  let sphere;
  let ballCategory = "bronze";

  const randX = Math.round(Math.random() * 100 - 50);
  const randZ = Math.round(Math.random() * 100 - 50);
  if (randX % 15 === 0) {
    ballCategory = "golden";
  } else if (randX % 3 === 0) {
    ballCategory = "silver";
  }

  switch (ballCategory) {
    case "Golden":
      sphere = Mesh.CreateSphere(ballCategory, 16, 1, scene);
      break;
    case "Silver":
      sphere = Mesh.CreateSphere(ballCategory, 16, 1.5, scene);
      break;
    default:
      sphere = Mesh.CreateSphere(ballCategory, 16, 2, scene);
      break;
  }

  sphere.material = materials.ballMaterial;
  sphere.material.emissiveColor = Color3.Random();
  sphere.material.diffuseColor = Color3.Random();
  sphere.position.y = INITIAL_HEIGHT;
  sphere.position.x = randX;
  sphere.position.z = randZ;
  sphere.receiveShadows = true;
  sphere.physicsImpostor = new PhysicsImpostor(
    sphere,
    PhysicsImpostor.SphereImpostor,
    { mass: 1000, restitution: 0.5 },
    scene
  );
  shadowGenerator.addShadowCaster(sphere);

  return sphere;
};
