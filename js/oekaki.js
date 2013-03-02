var stage = new Kinetic.Stage({
	container: 'canvas',
	width: 960,
	height: 640
});

// add the shape to the layer
var layer = new Kinetic.Layer();

stage.on("touchstart", function(event) {
	var rect = new Kinetic.Circle({
		x: stage.getTouchPotision().x,
		y: stage.getTouchPotision().y,
		width: 10,
		height: 10,
		fill: 'green',
	});
	layer.add(rect);
});

// add the layer to the stage
stage.add(layer);

