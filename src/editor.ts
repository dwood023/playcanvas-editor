import {
    Application,
    Color,
    FILLMODE_NONE,
    Mouse,
    RESOLUTION_AUTO,
    Vec3,
} from "https://esm.sh/playcanvas";

class Editor extends Application {
    constructor(canvas: ConstructorParameters<typeof Application>[0]) {
        super(canvas, { mouse: new Mouse(canvas) });

        this.setCanvasFillMode(FILLMODE_NONE);
        this.setCanvasResolution(RESOLUTION_AUTO);

        window.addEventListener("resize", () => this.resizeCanvas());
    }
    drawAxes() {
        const axes = [
            {
                direction: Vec3.RIGHT,
                color: Color.RED,
            },
            {
                direction: Vec3.UP,
                color: Color.GREEN,
            },
            {
                direction: Vec3.BACK,
                color: Color.BLUE,
            },
        ];

        for (const { direction, color } of axes) {
            this.drawLine(Vec3.ZERO, direction, color);
        }
    }
}

export default Editor;
