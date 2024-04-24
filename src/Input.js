export const LEFT = "LEFT"
export const RIGHT = "RIGHT"
export const UP = "UP"
export const DOWN = "DOWN"

export class Input {
    constructor() {

        this.heldDirections = [];

        document.addEventListener("keydown", (e) => {

            if (e.code === "ArrowUp" || e.code === "keyW") {
                this.onArrowPressed(UP);
            }

            if (e.code === "ArrowDown" || e.code === "KeyS") {
                this.onArrowPressed(DOWN);
            }

            if (e.code === "ArrowLeft" || e.code === "KeyA") {
                this.onArrowPressed(LEFT);
            }

            if (e.code === "ArrowRight" || e.code === "KeyD") {
                this.onArrowPressed(RIGHT);
            }

        })
    }

    onArrowPressed(direction) {
        if (this.heldDirections.indexOf(direction) === -1) {
            this.heldDirections.unshift(direction);
        }
    }

    onArrowReleased(direction) {

    }
}