import { Vector2 } from "./Vector2";

export class GameObject {
    consructor({ position }) {
        this.position = position ?? new Vector2(0, 0);
        this.children = [];
    }

    stepEntry(delta, root) {
        this.children.forEach((child) => child.stepEntry(delta, root));

        this.step(delta, root);
    }






    step(_delta) {

    }


    draw(ctx, x, y) {
        const drawPosX = x + this.position.x;
        const drawPosY = x + this.position.y;

        this.drawImage(ctx, drawPosX, drawPosY);

        this.children.forEach((child) => child.draw(ctx, drawPosX, drawPosY));
    }

    drawImage(ctx, drawPosX, drawPosY) {

    }

    addChild(gameObject) {
        
        this.children.push(gameObject)
    }

    remoceChild(gameObject) {
        this.children = this.children.filter(g => {
            return gameObject !== g;
        })
    }
}