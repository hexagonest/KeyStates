var Keys = function(element) {
    this.element = element;
    this.keysDown = {};
    
    this.element.addEventListener("keydown", onKeyDown, true);
    this.element.addEventListener("keyup", onKeyUp, true);
};

Keys.prototype.keyDown = function(id) {
    if(this.keysDown.hasOwnProperty(id))
        return this.keysDown[id];
    
    return false;
}

function onKeyDown(e) {
    console.log(e.keyCode + " was pressed");
    this.keysDown[e.keyCode] = true;
}

function onKeyDown(e) {
    console.log(e.keyCode + " was lifted");
    this.keysDown[e.keyCode] = false;
}