import { StandardMaterial, Color3, Texture, Vector2 } from "babylonjs";
import { WaterMaterial, TerrainMaterial } from "babylonjs-materials";

export class Materials {
  constructor(scene) {
    this.ground = new TerrainMaterial("terrain", scene);
    this.ground.diffuseColor = Color3.Blue();

    this.concrete = new StandardMaterial("concrete", scene);
    this.concrete.emissiveTexture = new Texture("/assets/concrete.jpg", scene);

    this.golden = new StandardMaterial("golden");
    this.golden.diffuseColor = Color3.Yellow();

    this.silver = new StandardMaterial("silver");
    this.silver.diffuseColor = Color3.Gray();

    this.random = new StandardMaterial("random");
    this.random.diffuseColor = Color3.Random();

    this.waterMaterial = new WaterMaterial(
      "water",
      scene,
      new Vector2(1024, 1024)
    );

    this.waterMaterial.backFaceCulling = true;
    this.waterMaterial.windForce = -10;
    this.waterMaterial.waveHeight = 0.1;
    this.waterMaterial.bumpHeight = 0.1;
    this.waterMaterial.windDirection = new Vector2(1, 1);
    this.waterMaterial.waterColor = new Color3(0.1, 0.1, 0.6);
    this.waterMaterial.colorBlendFactor = 0.3;
    this.waterMaterial.bumpTexture = new Texture(
      "assets/water-bump.jpg",
      scene
    );
  }
}
