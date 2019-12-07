import React from "react";
import * as BABYLON from "babylonjs";
import ViewerEngine from "./ViewerEngine";
import { createBall } from "./balls/ball";
import { ShadowGenerator, MeshBuilder } from "babylonjs";
import { Materials } from "./materials/materials";
import { createBasket } from "./basket/basket";
import { createParticleSystem } from "./particles/particles";
import { createBoundary } from "./ground/boundary";
import { createWater } from "./ground/water";
import { createGround } from "./ground/ground";

export const Viewer = () => {
  const onSceneMount = e => {
    const { canvas, scene, engine } = e;

    scene.enablePhysics(
      new BABYLON.Vector3(0, -50, 0),
      new BABYLON.AmmoJSPlugin()
    );

    const camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 70, -120),
      scene
    );
    camera.setTarget(new BABYLON.Vector3(0, 10, 0));

    const light = new BABYLON.PointLight(
      "dir01",
      new BABYLON.Vector3(0, -1, 0),
      scene
    );
    light.position = new BABYLON.Vector3(0, 50, 0);
    light.intensity = 0.1;
    light.autoUpdateExtends = false;

    const shadowGenerator = new ShadowGenerator(1024, light);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
    shadowGenerator.bias = 0.01;

    const materials = new Materials(scene);

    const ground = createGround(scene, materials);
    const boundary = createBoundary(scene, materials);
    const basket = createBasket(scene, materials);
    const water = createWater(scene, materials);
    materials.waterMaterial.addToRenderList(ground);
    materials.waterMaterial.addToRenderList(basket);
    materials.waterMaterial.addToRenderList(boundary);

    let ball = null;
    let stub = null;
    let particleSystem = null;

    scene.registerBeforeRender(() => {
      if (!ball) {
        ball = createBall(scene, shadowGenerator, materials);
      }

      if (ball.intersectsMesh(water, true)) {
        stub = MeshBuilder.CreateSphere("temp", { diameter: 0.1 }, scene);
        stub.position = ball.position;
        particleSystem = createParticleSystem(stub, false, scene);

        ball.dispose();
        ball = null;
      }
    });

    setInterval(() => {
      if (particleSystem && stub) {
        particleSystem.dispose();
        particleSystem = null;
        stub.dispose();
        stub = null;
      }
    }, 1000);

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
