import Stove from '../src/classes/Stove.js';

$(document).ready(function() {
    const stove = new Stove();

    $('#lighter1').css("background-color", stove.burners[0].getLighterColor());
    $('#flame1').css("visibility", stove.burners[0].isTurnedOn() ? 'initial' : 'hidden');

    $('#lighter2').css("background-color", stove.burners[1].getLighterColor());
    $('#flame2').css("visibility", stove.burners[1].isTurnedOn() ? 'initial' : 'hidden');

    $('#lighter3').css("background-color", stove.burners[2].getLighterColor());
    $('#flame3').css("visibility", stove.burners[2].isTurnedOn() ? 'initial' : 'hidden');

    $('#lighter4').css("background-color", stove.burners[3].getLighterColor());
    $('#flame4').css("visibility", stove.burners[3].isTurnedOn() ? 'initial' : 'hidden');

    $('#oven').css("background-color", stove.oven.getLighterColor());
    $('#flame5').css("visibility", stove.oven.isTurnedOn() ? 'initial' : 'hidden');

    $('#lamp').css("background-image", stove.lamp.isTurnedOn() ? "url('./img/lampOn.png')" : "url('./img/lampOff.png')");

    $( "#lighter1" ).on( "click", function() {
        stove.burners[0].turnOnOff();
        $('#flame1').css("visibility", stove.burners[0].isTurnedOn() ? 'initial' : 'hidden');
    } );

    $( "#lighter2" ).on( "click", function() {
        stove.burners[1].turnOnOff();
        $('#flame2').css("visibility", stove.burners[1].isTurnedOn() ? 'initial' : 'hidden');
    } );

    $( "#lighter3" ).on( "click", function() {
        stove.burners[2].turnOnOff();
        $('#flame3').css("visibility", stove.burners[2].isTurnedOn() ? 'initial' : 'hidden');
    } );

    $( "#lighter4" ).on( "click", function() {
        stove.burners[3].turnOnOff();
        $('#flame4').css("visibility", stove.burners[3].isTurnedOn() ? 'initial' : 'hidden');
    } );

    $( "#oven" ).on( "click", function() {
        stove.oven.turnOnOff();
        $('#flame5').css("visibility", stove.oven.isTurnedOn() ? 'initial' : 'hidden');
    } );

    $( "#switchLamp" ).on( "click", function() {
        stove.lamp.turnOnOff();
        $('#lamp').css("background-image", stove.lamp.isTurnedOn() ? "url('./img/lampOn.png')" : "url('./img/lampOff.png')");
    } );

});
  