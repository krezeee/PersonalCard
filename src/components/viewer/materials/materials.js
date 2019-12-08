import { StandardMaterial, Color3, Mesh, Texture, Vector2 } from "babylonjs";
import { WaterMaterial, TerrainMaterial } from "babylonjs-materials";

export class Materials {
  constructor(scene) {
    this.ground = new TerrainMaterial("terrain", scene);
    this.ground.diffuseColor = Color3.Blue();

    this.targetBoard = new StandardMaterial("concrete", scene);
    this.targetBoard.emissiveTexture = new Texture(
      "/assets/target-board.png",
      scene
    );

    this.standard = new StandardMaterial("standard");
    this.standard.diffuseColor = Color3.Gray();
    this.standard.sideOrientation = Mesh.ClockWiseSideOrientation;
    this.standard.alpha = 0.5;
    this.standard.specularPower = 0;
    this.standard.zOffset = -10;

    this.ballMaterial = new StandardMaterial("ballMaterial");
    this.ballMaterial.diffuseColor = Color3.Gray();
    this.ballMaterial.sideOrientation = Mesh.ClockWiseSideOrientation;
    this.ballMaterial.alpha = 1;
    this.ballMaterial.specularPower = 0;
    this.ballMaterial.zOffset = -10;

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
