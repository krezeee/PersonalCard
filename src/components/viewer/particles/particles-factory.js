import { particles } from "./particles.enum";
import { createWaterParticles } from "./particles-water";
import { createBasketParticles } from "./particles-basket";

export const createParticleSystem = (scene, particlesType) => {
  switch (particlesType) {
    case particles.WATER:
      return createWaterParticles(scene);
    case particles.BASKET:
      return createBasketParticles(scene);
    default:
      break;
  }
};
