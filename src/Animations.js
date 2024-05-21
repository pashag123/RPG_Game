import { FrameIndexPattern } from "./FrameIndexPattern";

export class Animations {
    constructor(patterns) {
        this.patterns = {
            walkDown: new FrameIndexPattern(WALK_DOWN)
        }
    }
}