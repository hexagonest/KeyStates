var Keys = {
    keysDown: {},

    init: function(element) {
        element.addEventListener("keydown", this.onKeyDown, true);
        element.addEventListener("keyup", this.onKeyUp, true);
    },
    
    keyDown: function(id) {
        if(this.keysDown.hasOwnProperty(id))
            return this.keysDown[id];

        return false;
    },
    
    anyKeyDown: function() {
        for(var keyState in Keys.keysDown){
            if(!Keys.keysDown.hasOwnProperty(keyState)){
                continue;
            }
            
            if(Keys.keysDown[keyState] == true) {
                return true;
            }
        }
        return false;
    },
    
    onKeyDown: function(e) {
        Keys.keysDown[e.keyCode] = true;
    },
    
    onKeyUp: function(e) {
        Keys.keysDown[e.keyCode] = false;
    }
}