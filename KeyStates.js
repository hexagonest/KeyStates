var Keys = function(element) {
    this.element = element;
    this.keysDown = {};
    
    this.element.addEventListener("keydown", this.onKeyDown, true);
    this.element.addEventListener("keyup", this.onKeyUp, true);
};

Keys.prototype.keyDown = function(id) {
    if(this.keysDown.hasOwnProperty(id))
        return this.keysDown[id];
    
    return false;
}

Keys.prototype.onKeyDown = function(e) {
    this.keysDown[e.keyCode] = true;
    console.log(e.keyCode + " was pressed");
}

Keys.prototype.onKeyUp = function(e) {
    this.keysDown[e.keyCode] = false;
    console.log(e.keyCode + " was lifted");
}