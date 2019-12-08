import React from "react";
import ViewerEngine from "./ViewerEngine";
import { createBall } from "./balls/ball";
import {
  ShadowGenerator,
  Vector3,
  AmmoJSPlugin,
  FreeCamera,
  PointLight
} from "babylonjs";
import { Materials } from "./materials/materials";
import { createBasket } from "./basket/basket";
import { createParticleSystem } from "./particles/particles";
import { createBoundary } from "./ground/boundary";
import { createWater } from "./ground/water";
import { createGround } from "./ground/ground";

export const Viewer = () => {
  const onSceneMount = e => {
    const { canvas, scene, engine } = e;

    scene.enablePhysics(new Vector3(0, -50, 0), new AmmoJSPlugin());

    const camera = new FreeCamera("camera1", new Vector3(0, 70, -120), scene);
    camera.setTarget(new Vector3(0, 10, 0));

    const light = new PointLight("dir01", new Vector3(0, -1, 0), scene);
    light.position = new Vector3(1, 10, 1);
    light.intensity = 0.5;
    light.autoUpdateExtends = false;

    const shadowGenerator = new ShadowGenerator(1024, light);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_LOW;
    shadowGenerator.bias = 0.01;

    // scene.debugLayer.show();

    const materials = new Materials(scene);

    const ground = createGround(scene, materials);
    const boundary = createBoundary(scene, materials);
    const basket = createBasket(scene, materials);
    const water = createWater(scene, materials);
    materials.waterMaterial.addToRenderList(ground);
    materials.waterMaterial.addToRenderList(basket);
    materials.waterMaterial.addToRenderList(boundary);

    let ball = null;
    let particleSystem = createParticleSystem(scene);
    particleSystem.start();

    scene.registerBeforeRender(() => {
      if (!ball) {
        ball = createBall(scene, shadowGenerator, materials);
        materials.waterMaterial.addToRenderList(ball);
      }

      if (
        ball.intersectsMesh(water, true) ||
        Math.abs(ball.position.y - 1) < 0.01
      ) {
        particleSystem.emitter = ball.position;
        particleSystem.manualEmitCount = 100;

        ball.dispose();
        ball = null;
      }
    });

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });
  };

  return (
    <div style={{ width: "100vw", zIndex: 0 }}>
      <ViewerEngine onSceneMount={onSceneMount} />
    </div>
  );
};
