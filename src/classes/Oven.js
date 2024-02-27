import { BaseClass } from "./BaseClass.js";

export default class Oven extends BaseClass{
    constructor(lighterColor, dimensionX, dimensionY, isOn) {
        super(isOn);
        
        this.lighterColor = lighterColor;
        this.glassDimension = {
            dimensionX: dimensionX,
            dimensionY: dimensionY
        };
    }
     
    getGlassDimension(){
        return this.glassDimension;
    }

    getLighterColor(){
        return this.lighterColor;
    }

}