import { GameObject } from "../../GameObject";
import { Vector2 } from "../../Vector2";

export class Hero extends GameObject {
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        });
this.facingDirection =DOWN;
this.destinationPosition = this.position.duplicate()
    }

tryMove (root) {

    const {input} = root; 

        if (!input.direction) {
      
          if (this.facingDirection === LEFT) { hero.animations.play("standLeft") };
          if (this.facingDirection === RIGHT) { hero.animations.play("standRight") };
          if (this.facingDirection === UP) { hero.animations.play("standUp") };
          if (this.facingDirection === DOWN) { hero.animations.play("standDown") };
      
      
      
          return;
        }
      
        let nextX = this.destinationPosition.x;
        let nextY = this.destinationPosition.y;
        const gridSize = 16;
      
      
      
      
        if (input.direction === DOWN) {
          nextY += gridSize;
         hero.animations.play("walkDown")
        }
        if (input.direction === UP) {
          nextY -= gridSize;
          hero.animations.play("walkUp")
        }
        if (input.direction === LEFT) {
          nextX -= gridSize;
          hero.animations.play("walkLeft")
        }
        if (input.direction === RIGHT) {
          nextX += gridSize;
          hero.animations.play("walkRight")
        }
      this.facingDirection = input.direction ?? this.facingDirection
       
        if (isSpaceFree(walls, nextX, nextY)) {
      
          this.destinationPosition.x = nextX;
          this.destinationPosition.y = nextY;
        }
      
      
      
      
      
      }
      
}