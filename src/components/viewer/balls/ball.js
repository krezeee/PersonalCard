import { PhysicsImpostor, Mesh, Color3, Vector3, Color4 } from "babylonjs";

const INITIAL_HEIGHT = 100;

export const ballFactory = (
  scene,
  shadowGenerator,
  materials,
  waterParticles,
  basketParticles,
  scoringService
) => {
  let observer = null;
  scoringService.isRunning$.subscribe(isRunning => {
    let ball = null;
    if (!isRunning) {
      scene.onBeforeRenderObservable.remove(observer);
    } else {
      const basket = scene.getMeshByName("basket");
      const water = scene.getMeshByName("water");

      observer = scene.onBeforeRenderObservable.add(() => {
        if (ball === null) {
          ball = createBall(scene, shadowGenerator, materials);
          materials.waterMaterial.addToRenderList(ball);

          ball.onAfterWorldMatrixUpdateObservable.add(mesh => {
            if (mesh.intersectsMesh(water)) {
              emitFailed(waterParticles, ball);

              ball.dispose();
              ball = null;
            } else if (mesh.intersectsMesh(basket)) {
              emitScored(basketParticles, ball);

              scoringService.score();

              ball.dispose();
              ball = null;
            }
          });
        }
      });
    }
  });
};

const createBall = (scene, shadowGenerator, materials) => {
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
  sphere.checkCollisions = true;
  sphere.receiveShadows = true;
  sphere.physicsImpostor = new PhysicsImpostor(
    sphere,
    PhysicsImpostor.SphereImpostor,
    { mass: 10, restitution: 0.5 },
    scene
  );
  sphere.ellipsoidOffset = new Vector3(0, 1, 0);
  shadowGenerator.addShadowCaster(sphere);

  return sphere;
};

function emitFailed(waterParticles, ball) {
  waterParticles.emitter = ball.position;
  waterParticles.manualEmitCount = 100;
}

function emitScored(basketParticles, ball) {
  basketParticles.emitter = ball.position;
  let color = Color4.FromColor3(ball.material.diffuseColor);
  basketParticles.color1 = color;
  basketParticles.color2 = color;
  basketParticles.manualEmitCount = 1000;
}
