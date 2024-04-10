import './style.css'
import { resources } from "./src/Resource.js"
import {Sprite} from "./src/Sprite.js";
import {Vector2} from "./src/Vector2.js";

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const draw = () => {
    const sky = resources.images.sky;
    if (sky.isLoaded) {
        ctx.drawImage(sky.image, 0, 0)
    }
   
    const ground = resources.images.ground;
    if (ground.isLoaded) {
        ctx.drawImage(ground.image, 0, 0)
    }
}


const hero = new Sprite({
    resource: resources.images.hero,
    hFrames: 3,
    vFrames: 8,
    frame: 1
})

setInterval(() => {

    draw()
}, 300)
