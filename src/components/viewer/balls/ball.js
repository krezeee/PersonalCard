import { PhysicsImpostor, Mesh } from "babylonjs";

const INITIAL_HEIGHT = 100;

export const Ball = (scene, shadowGenerator, materials) => {
  let sphere;
  let ballCategory = "bronze";

  const randX = Math.round(Math.random() * 100 - 50);
  const randZ = Math.round(Math.random() * 100 - 50);
  console.log(randX);
  if (randX % 15 === 0) {
    ballCategory = "golden";
  } else if (randX % 3 === 0) {
    ballCategory = "silver";
  }

  switch (ballCategory) {
    case "Golden":
      sphere = Mesh.CreateSphere(ballCategory, 16, 1, scene);
      sphere.material = materials.golden;
      break;
    case "Silver":
      sphere = Mesh.CreateSphere(ballCategory, 16, 1.5, scene);
      sphere.material = materials.silver;
      break;
    default:
      sphere = Mesh.CreateSphere(ballCategory, 16, 2, scene);
      sphere.material = materials.random;
      break;
  }

  sphere.position.y = INITIAL_HEIGHT;
  sphere.position.x = randX;
  sphere.position.z = randZ;
  sphere.receiveShadows = true;
  sphere.physicsImpostor = new PhysicsImpostor(
    sphere,
    PhysicsImpostor.SphereImpostor,
    { mass: 1000, restitution: 1 },
    scene
  );
  shadowGenerator.addShadowCaster(sphere);

  return sphere;
};
