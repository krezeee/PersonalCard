import {
  GPUParticleSystem,
  ParticleSystem,
  SphereParticleEmitter,
  Texture
} from "babylonjs";

export const createParticleSystem = (ball, useGPUVersion, scene) => {
  let particleSystem;

  if (useGPUVersion && GPUParticleSystem.IsSupported) {
    particleSystem = new GPUParticleSystem(
      "particles",
      { capacity: 1000000 },
      scene
    );
    particleSystem.activeParticleCount = 100000;
  } else {
    particleSystem = new ParticleSystem("particles", 50000, scene);
  }

  particleSystem.emitRate = 10000;
  particleSystem.particleEmitterType = new SphereParticleEmitter(2.5);
  particleSystem.particleTexture = new Texture("/assets/flare.jpg", scene);
  particleSystem.maxLifeTime = 3;
  particleSystem.minSize = 0.01;
  particleSystem.maxSize = 0.3;
  particleSystem.gravity.y = 5;
  particleSystem.emitter = ball;

  particleSystem.start();

  return particleSystem;
};
