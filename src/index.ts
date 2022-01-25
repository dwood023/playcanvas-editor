import * as pc from "https://esm.sh/playcanvas";

import Editor from "./editor.ts";

const canvas = document.getElementById("canvas");
if (!canvas) throw new Error("Could not find canvas");

const editor = new Editor(canvas);

const light = new pc.Entity("Light");
light.addComponent("light", {
    type: "omni",
    color: new pc.Color(1, 1, 1),
    range: 100,
});
light.setPosition(1, 1, 1);
editor.root.addChild(light);

const camera_focal_point = new pc.Entity("Camera focal point");
camera_focal_point.setPosition(0, 0, 0);
editor.root.addChild(camera_focal_point);

const camera = new pc.Entity("Camera");
camera.setPosition(5, 0, 0);
camera.lookAt(0, 0, 0);
camera.addComponent("camera", {
    clearColor: new pc.Color(0.2, 0, 0, 0.2),
    clearColorBuffer: false,
    enabled: true,
}) as pc.CameraComponent;
camera_focal_point.addChild(camera);

editor.on("update", () => {
    editor.drawAxes();
});

editor.mouse.on(pc.EVENT_MOUSEMOVE, (e) => {
    const { dx, dy, buttons } = e;
    const isMiddleMouseButtonDown = buttons[0];

    if (isMiddleMouseButtonDown) {
        const factor = 0.2;
        camera_focal_point.rotate(0, -dx * factor, 0);
        camera_focal_point.rotateLocal(0, 0, dy * factor);
    }
});

editor.start();
