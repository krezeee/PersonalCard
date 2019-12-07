import { PhysicsImpostor, MeshBuilder, Vector3 } from "babylonjs";

export const createBoundary = (scene, materials) => {
  const shape = [
    new Vector3(-2.5, -2.5, 0),
    new Vector3(-2.5, 2.5, 0),
    new Vector3(2.5, 2.5, 0),
    new Vector3(-2.5, -2.5, 0),
    new Vector3(-2.5, -2.5, 0)
  ];

  const path = [
    new Vector3(-75, 0, -75),
    new Vector3(-75, 0, 75),
    new Vector3(75, 0, 75),
    new Vector3(75, 0, -75),
    new Vector3(-75, 0, -75)
  ];

  const boundary = MeshBuilder.ExtrudeShape(
    "torus",
    { shape: shape, path: path },
    scene
  );
  boundary.position.y = 5;
  boundary.material = materials.concrete;
  boundary.physicsImpostor = new PhysicsImpostor(
    boundary,
    PhysicsImpostor.MeshImpostor,
    { mass: 0, restitution: 1 },
    scene
  );

  return boundary;
};
