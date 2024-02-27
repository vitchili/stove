import { BaseClass } from "./BaseClass.js";

export default class Burner extends BaseClass{
    constructor(lighterColor, isOn) {
        super(isOn);
        
        this.lighterColor = lighterColor;
    }

    getLighterColor(){
        return this.lighterColor;
    }
    
}