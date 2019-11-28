import React from "react";
import * as BABYLON from "babylonjs";
import ViewerEngine from "./ViewerEngine";
import { Ball } from "./balls/ball";
import { ShadowGenerator, ParticleHelper } from "babylonjs";
import { Materials } from "./materials/materials";
import { Basket } from "./basket/basket";
import { createParticleSystem } from "./particles/particles";

export const Viewer = () => {
  const onSceneMount = e => {
    const { canvas, scene, engine } = e;

    scene.enablePhysics(
      new BABYLON.Vector3(0, -50, 0),
      new BABYLON.AmmoJSPlugin()
    );

    const camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 100, -100),
      scene
    );
    camera.setTarget(BABYLON.Vector3.Zero());
    // camera.attachControl(canvas, true);

    const light = new BABYLON.PointLight(
      "dir01",
      new BABYLON.Vector3(0, -1, 0),
      scene
    );
    light.position = new BABYLON.Vector3(0, 50, 0);
    light.intensity = 0.5;
    light.autoUpdateExtends = false;

    const shadowGenerator = new ShadowGenerator(1024, light);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
    shadowGenerator.bias = 0.01;

    const materials = new Materials(scene);
    const ground = BABYLON.Mesh.CreateGround("ground1", 150, 150, 2, scene);
    ground.material = materials.ground;
    ground.receiveShadows = true;
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(
      ground,
      BABYLON.PhysicsImpostor.PlaneImpostor,
      { mass: 0, restitution: 0.1 },
      scene
    );

    const basket = new Basket(scene, materials);

    const water = BABYLON.Mesh.CreateGround("pool", 175, 175, 2, scene);
    water.position.y = 0;

    materials.waterMaterial.addToRenderList(basket);
    materials.waterMaterial.addToRenderList(ground);
    water.material = materials.waterMaterial;

    // scene.debugLayer.show();
    const balls = [];
    let particleSystem = null;
    setInterval(() => {
      const ball = new Ball(scene, shadowGenerator, materials);
      particleSystem = createParticleSystem(ball, false, scene);
      balls.push(ball);
    }, 5000);

    scene.registerBeforeRender(() => {
      balls.forEach(ball => {
        if (ball.intersectsMesh(water, true)) {
          if (particleSystem) {
            particleSystem.dispose();
          }
        }
      });
    });

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });
  };

  return (
    <div style={{ width: "100vw" }}>
      <ViewerEngine onSceneMount={onSceneMount} />
    </div>
  );
};
