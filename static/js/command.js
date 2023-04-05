class Command {
    constructor(posX = 0, posY = 0) {
        this.imgCommand = new Image();
        this.imgCommand.src = imgObjCommand;

        this.scale = objectScale;

        this.tileWidth = 16;
        this.tileHeight = 16;

        this.tileX = 8;
        this.tileY = 2;

        this.x = posX * tileSize * this.scale;
        this.y = posY * tileSize * this.scale;

        this.STATE_NONE = 0;
        this.STATE_CURSOR_ON = 1;
        this.STATE_PRESS = 2;

        this.state = this.STATE_NONE;
    }

    draw() {
        if (this.imgCommand.complete) {
            ctx.drawImage(
                this.imgCommand,
                0,
                this.tileHeight * this.tileY * this.state,
                this.tileWidth * this.tileX,
                this.tileHeight * this.tileY,
                this.x,
                this.y - cam.y,
                this.tileWidth * this.tileX * this.scale,
                this.tileHeight * this.tileY * this.scale,
            );
            // ctx.strokeRect(
            //     this.x,
            //     this.y - cam.y,
            //     this.tileWidth * this.tileX * this.scale,
            //     this.tileHeight * this.tileY * this.scale,
            //     );
        }
    }
}