define([
    "gaslib/Point",
    "gaslib/Helpers"
], function(Point, Helpers){

    var Pipe = function(){
        this.flow = 0;
        this.maxFlow = 0;
        this.start = new Point();
        this.finish = new Point();
    };


    Pipe.constructor = Pipe;

    Pipe.prototype.length = function()
    {
        return Helpers.distanceInKm(this.start, this.finish);
    };

    Pipe.prototype.setStartPoint = function(point)
    {
        this.start = point;
    };

    Pipe.prototype.setFinishPoint = function(point)
    {
        this.finish = point;
    };

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
