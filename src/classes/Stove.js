import Burner from './Burner.js';
import Oven from './Oven.js';
import Lamp from './Lamp.js';

export default class Stove {
    constructor() {
        this.color = 'orange';
        this.brand = 'Eletrolux';
        this.dimension = {
            dimensionXCm: 75,
            dimensionYCm: 87.9,
            dimensionZCm: 59.5,
        };

        this.burners = [
            new Burner('aquamarine'),
            new Burner('cadetblue'),
            new Burner('yellow'),
            new Burner('coral'),
        ];
        
        this.oven = new Oven('burlywood', 60, 40);
        this.lamp = new Lamp();
    }

    turnOnOffBurnerIgniter(burnerNumber) {
        this.burners[burnerNumber].turnOnOff();
    }

    turnOnOffOvenButton() {
        this.oven.isOn = ! this.oven.turnOnOff(); 
    }

    turnOnOffLampButton() {
        this.lamp.isOn = ! this.lamp.turnOnOff();
    }

}