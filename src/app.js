console.log('app')

var drawCanvas = function(){
  var $canvas = $('#myCanvas');
  var canvas = $canvas.get(0).getContext("2d");
  canvas.FPS = 30;
  return canvas;
};

var stateGen = function() {
	var state = {};
	state.rabbits = [];
	state.foxes = [];
	state.grass = [];
	return state;	
};

