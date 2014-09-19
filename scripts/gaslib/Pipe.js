define([
    "gaslib/Point"
], function(Point){

    var Pipe = function(){
        this.flow = 0;
        this.maxFlow = 0;
        this.start = new Point();
        this.finish = new Point();
    };


    Pipe.constructor = Pipe;


    Pipe.prototype.usage = function(){
        if (this.maxFlow > 0)
        {
            return this.flow / this.maxFlow;
        }
        else
        {
            return 0;
        }
    };


    return Pipe;
});