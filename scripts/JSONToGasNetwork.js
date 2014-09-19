define([

], function(){
    "use strict";

    var JSONToGasNetwork = function(data){
        var pipes = data.pipes;


        require([
            "gaslib/Angle"
        ], function(Angle){

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

            });

        });

        return pipes;


    };


    return JSONToGasNetwork;
});
