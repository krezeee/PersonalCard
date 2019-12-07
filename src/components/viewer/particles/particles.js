import { ParticleSystem, Color4, Texture, Vector3 } from "babylonjs";

export const createParticleSystem = scene => {
  const particleSystem = new ParticleSystem("particles", 200000, scene);

  particleSystem.particleTexture = new Texture(
    "../../../../public/assets/flare.jpg",
    scene
  );

  particleSystem.minEmitBox = new Vector3(0.1, 0, 0); // Starting all from
  particleSystem.maxEmitBox = new Vector3(-0.1, 0, 0); // To...

  // Colors of all particles
  particleSystem.color1 = new Color4(0, 178, 255, 1.0);
  particleSystem.color2 = new Color4(240, 248, 255, 1.0);
  particleSystem.colorDead = new Color4(0, 0, 0.2, 0.0);

  // Size of each particle (random between...
  particleSystem.minSize = 0.1;
  particleSystem.maxSize = 0.2;

  // Life time of each particle (random between...
  particleSystem.minLifeTime = 1;
  particleSystem.maxLifeTime = 1.5;

  // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
  particleSystem.blendMode = ParticleSystem.BLENDMODE_ONEONE;

  // Set the gravity of all particles
  particleSystem.gravity = new Vector3(0, -50, 0);

  // Direction of each particle after it has been emitted
  particleSystem.direction1 = new Vector3(-10, 8, 10);
  particleSystem.direction2 = new Vector3(10, 8, -10);

  // Angular speed, in radians
  particleSystem.minAngularSpeed = 0;
  particleSystem.maxAngularSpeed = Math.PI;

  // Speed
  particleSystem.minEmitPower = 0.8;
  particleSystem.maxEmitPower = 0.9;

  particleSystem.updateSpeed = 0.005;

  return particleSystem;
};
