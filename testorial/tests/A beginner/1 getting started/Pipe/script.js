require([
    "gaslib/Point",
    "gaslib/Pipe"
], function(Point, Pipe){

    QUnit.test( "Test distance calculation", function( assert ) {

        var start = new Point(52.390058, 16.860684);
        var finish = new Point(52.241198, 21.030156);
        var pipe = new Pipe();
        pipe.setStartPoint(start);
        pipe.setFinishPoint(finish);

        //283,87?
        assert.equal( pipe.lengthInKm(), 21.108772741743323, "Niewłaściwa długość rury" );
    });

});


