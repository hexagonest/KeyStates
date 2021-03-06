window.Keys = {
    keysDown: {},

    init: function(element) {
        element.addEventListener("keydown", this.onKeyDown, true);
        element.addEventListener("keyup", this.onKeyUp, true);
        return Keys;
    },
    
    isDown: function(id) {
        if(this.keysDown.hasOwnProperty(id))
            return this.keysDown[id];

        return false;
    },
    
    anyDown: function() {
        for(var keyState in Keys.keysDown){
            if(!Keys.keysDown.hasOwnProperty(keyState)){
                continue;
            }
            
            if(Keys.keysDown[keyState] == true) {
                return keyState;
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