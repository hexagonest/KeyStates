//probably shouldn't do this. But it saves time.
$ = function (id) { return document.getElementById(id); }
var love = {};

var keysDown = {};
var canvas;
var ctx;

love.init = function(can){
    canvas = can;
    ctx = canvas.getContext("2d");
    run();
}

function run(){
    
    canvas.addEventListener("keydown", onKeyDown, true);
    canvas.addEventListener("keyup", onKeyUp, true);

    function onKeyDown(e) {
        keysDown[e.keyCode] = true;
        console.log("key down.");
        console.log(keysDown);
    }

    function onKeyUp(e) {
        keysDown[e.keyCode] = false;
        console.log("key UP NIGA");
        console.log(keysDown);
    }

    love.keyDown = function() {
        if(keysDown.hasOwnProperty(id))
            return keysDown[id];
        
        return false;
    }

    love.load();
    love.update();
    love.draw();
    setInterval(function(){love.update();love.draw();},1);
}
