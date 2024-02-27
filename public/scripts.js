import Stove from '../src/classes/Stove.js';

$(document).ready(function () {
    const stove = new Stove();

    const elements = [
        { lighter: '#lighter1', flame: '#flame1', index: 0 },
        { lighter: '#lighter2', flame: '#flame2', index: 1 },
        { lighter: '#lighter3', flame: '#flame3', index: 2 },
        { lighter: '#lighter4', flame: '#flame4', index: 3 },
    ];

    $('#oven').css("background-color", stove.oven.getLighterColor());
    $('#flame5').css("visibility", stove.oven.isTurnedOn() ? 'initial' : 'hidden');
    $('#lamp').css("background-image", stove.lamp.isTurnedOn() ? "url('./img/lampOn.png')" : "url('./img/lampOff.png')");

    elements.forEach(element => {
        $(element.lighter).css("background-color", stove.burners[element.index].getLighterColor());
        $(element.flame).css("visibility", stove.burners[element.index].isTurnedOn() ? 'initial' : 'hidden');
    });

    elements.forEach(element => {
        $(element.lighter).on("click", function () {
            stove.burners[element.index].turnOnOff();
            $(element.flame).css("visibility", stove.burners[element.index].isTurnedOn() ? 'initial' : 'hidden');
        });
    });

    $( "#oven" ).on( "click", function() {
        stove.oven.turnOnOff();
        $('#flame5').css("visibility", stove.oven.isTurnedOn() ? 'initial' : 'hidden');
    } );
    
    $( "#switchLamp" ).on( "click", function() {
        stove.lamp.turnOnOff();
        $('#lamp').css("background-image", stove.lamp.isTurnedOn() ? "url('./img/lampOn.png')" : "url('./img/lampOff.png')");
    } );

});
