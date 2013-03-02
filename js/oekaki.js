var stage = new Kinetic.Stage({
	container: 'canvas',
	width: 960,
	height: 640
});

// add the shape to the layer
var layer = new Kinetic.Layer();

var border = new Kinetic.Rect({
	x: 10,
	y: 10,
	width: stage.getWidth() - 20,
	height: stage.getHeight() - 20,
	stroke: 'green'
});
layer.add(border);

border.on("touchstart", function(event) {
	var rect = new Kinetic.Circle({
		x: stage.getTouchPosition().x,
		y: stage.getTouchPosition().y,
		width: 10,
		height: 10,
		fill: 'green',
	});
	layer.add(rect);
});

// add the layer to the stage
stage.add(layer);

