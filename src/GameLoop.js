export class GameLoop {
    constructor(update, render) {

        this.lastFrameTime = 0;
        this.accumulatedTime = 0;
        this.timeStep = 1000 / 60; // 60 frames persecond


        this.update = update;
        this.render = render;



        this.rafid = null;
        this.isRunning = false;
    }

    mainLoop = (timestamp) => {
        if (!this.isRunning) return;

        let deltaTime = timestamp - this.lastFrameTime;
        this.lastFrameTime = timestamp;

        // acumulate all the ti,e since the last frame
        this.accumulatedTime += deltaTime;

        // fixed time step updates
        // if theres enough accumulated time to run one or more fixed update 
        while (this.accumulatedTime >= this.timeStep) {
           
            this.update(this.timeStep);
            this.accumulatedTime -= this.timeStep;
        }

        this.render();


        this.rafid = requestAnimationFrame(this.mainLoop);

    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.rafid = requestAnimationFrame(this.mainLoop);
        }
    }

    stop() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafid);
        }
        this.isRunning = false;
    }
}