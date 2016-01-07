var Tile = function(options) {

  return {
    height: options.height || 10,
    width: options.width || 10,
    xpos: options.xpos,
    ypos: options.ypos,
    color: options.color || 'red',

    draw: function(canvasCtx) {
      canvasCtx.fillStyle = this.color;
      canvasCtx.fillRect(this.xpos, this.ypos, this.height, this.width);
    }
  }
};
