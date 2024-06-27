import './style.css'
import { resources } from "./src/Resource.js"
import { Sprite } from "./src/Sprite.js";
import { Vector2 } from "./src/Vector2.js";
import { GameLoop } from "./src/GameLoop.js";
import { DOWN, LEFT, RIGHT, UP, Input } from "./src/Input.js"
import { gridCells, isSpaceFree } from './src/helpers/grid.js';
import { moveTowards } from './src/helpers/moveTowards.js';
import { walls } from './src/levels/level1.js';
import { Animations } from './src/Animations.js';
import { FrameIndexPattern } from './src/FrameIndexPattern.js';
import { STAND_DOWN, STAND_LEFT, STAND_RIGHT, STAND_UP, WALK_DOWN, WALK_LEFT, WALK_RIGHT, WALK_UP } from './src/objects/Hero/heroAnimations.js';
import { GameObject } from './src/GameObject.js';
import { Hero } from './src/objects/Hero/Hero.js';

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const mainScene = new GameObject({
  position: new Vector2(0,0)
})

const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180)
})

mainScene.addChild(skySprite);

const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180)
})

mainScene.addChild(groundSprite);




const hero = new Hero(gridCells(6), gridCells(5))
mainScene.addChild(hero)





mainScene.input = new Input();


const update = (delta) => {
mainScene.stepEntry(delta, mainScene)

};



const draw = () => {


mainScene.draw(ctx, 0, 0); 

 
}


const gameLoop = new GameLoop(update, draw);
gameLoop.start();
