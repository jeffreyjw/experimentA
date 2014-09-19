define([
    "gaslib/Angle",
    "gaslib/GasNetwork",
    "gaslib/Pipe"
], function(Angle, GN, Pipe){
    "use strict";

    var JSONToGasNetwork = function(data){
        var pipes = data.pipes;
        var gasNetwork = new GN();

        pipes.forEach (function(p)  {

            if (p.start.unit=="rad") {
                p.start.lat = Angle.radianToDegree(p.start.lat);
                p.start.lng = Angle.radianToDegree(p.start.lng);
                p.start.unit = "deg";
            }
            if (p.end.unit=="rad") {
                p.end.lat = Angle.radianToDegree(p.end.lat);
                p.end.lng = Angle.radianToDegree(p.end.lng);
                p.end.unit = "deg";
            }
            var newPipe = new Pipe();

            newPipe.finish = p.end;
            newPipe.start = p.start;
            newPipe.maxFlow = p.maxFlow;
            newPipe.flow = p.flow;

            gasNetwork.addPipe(newPipe);

        });



        return gasNetwork;


    };


    return JSONToGasNetwork;
});
