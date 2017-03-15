
var DrawImage = function (src, camera)
{
    var ctx = this.currentContext;
    var frame = src.frame;
    var cd = frame.canvasData;

    //  Blend Mode

    if (this.currentBlendMode !== src.blendMode)
    {
        this.currentBlendMode = src.blendMode;
        ctx.globalCompositeOperation = this.blendModes[src.blendMode];
    }

    //  Alpha

    if (this.currentAlpha !== src.alpha)
    {
        this.currentAlpha = src.alpha;
        ctx.globalAlpha = src.alpha;
    }

    //  Smoothing

    if (this.currentScaleMode !== src.scaleMode)
    {
        this.currentScaleMode = src.scaleMode;
        // ctx[this.smoothProperty] = (source.scaleMode === ScaleModes.LINEAR);
    }

    var dx = frame.x - src.originX;
    var dy = frame.y - src.originY;

    ctx.save();
    ctx.translate(src.x - camera.scrollX, src.y - camera.scrollY);
    ctx.rotate(src.rotation);
    ctx.scale(src.scaleX, src.scaleY);
    ctx.drawImage(frame.source.image, cd.sx, cd.sy, cd.sWidth, cd.sHeight, dx, dy, cd.dWidth, cd.dHeight);
    ctx.restore();
};

module.exports = DrawImage;
