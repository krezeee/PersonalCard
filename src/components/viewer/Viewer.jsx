import React from "react";
import ViewerEngine from "./ViewerEngine";
import { ballFactory } from "./balls/ball";
import {
  ShadowGenerator,
  Vector3,
  AmmoJSPlugin,
  FreeCamera,
  PointLight
} from "babylonjs";
import { Materials } from "./materials/materials";
import { createBasket } from "./basket/basket";
import { createBoundary } from "./ground/boundary";
import { createWater } from "./ground/water";
import { ScoringService } from "./score/scoring-service";
import { createParticleSystem } from "./particles/particles-factory";
import { particles } from "./particles/particles.enum";
import { Scoreboard } from "./gui/scoreboard";

export const Viewer = () => {

  const scoringService = new ScoringService();

  const onSceneMount = e => {
    const { scene, engine } = e;

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

    // scene.debugLayer.show({ overlay: true, embedMode: false });

    const materials = new Materials(scene);

    createWater(scene, materials);
    const boundary = createBoundary(scene, materials);
    const basket = createBasket(scene, materials);
    materials.waterMaterial.addToRenderList(basket);
    materials.waterMaterial.addToRenderList(boundary);

    let waterParticles = createParticleSystem(scene, particles.WATER);
    let basketParticles = createParticleSystem(scene, particles.BASKET);
    waterParticles.start();
    basketParticles.start();

    ballFactory(
      scene,
      shadowGenerator,
      materials,
      waterParticles,
      basketParticles,
      scoringService
    );

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });
  };

  return (
    <div style={{ height: "100vh", width: "100vw", zIndex: 0 }}>
      <Scoreboard scoringService={scoringService} />
      <ViewerEngine onSceneMount={onSceneMount} />
    </div>
  );
};
