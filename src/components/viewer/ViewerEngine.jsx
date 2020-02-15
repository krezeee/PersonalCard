import React, { Component } from "react";
import * as BABYLON from "babylonjs";
import { Color3 } from "babylonjs";

export default class ViewerEngine extends Component {
  componentDidMount() {
    this.engine = new BABYLON.Engine(
      this.canvas,
      true,
      this.props.engineOptions,
      this.props.adaptToDeviceRatio
    );

    let scene = new BABYLON.Scene(this.engine);
    this.scene = scene;
    this.scene.clearColor = Color3.FromHexString("#f1f1f1");

    if (typeof this.props.onSceneMount === "function") {
      this.props.onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas
      });
    } else {
      console.error("onSceneMount function not available");
    }

    // Resize the babylon engine when the window is resized
    window.addEventListener("resize", this.onResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeWindow);
  }

  onCanvasLoaded = c => {
    if (c !== null) {
      this.canvas = c;
    }
  };

  render() {
    return (
      <canvas
        style={{ height: "100%", width: "100%", zIndex: "0" }}
        ref={this.onCanvasLoaded}
      />
    );
  }
}
