require([
    "gaslib/GasNetwork",
    "gaslib/Pipe"
], function(GasNetwork, Pipe){

    QUnit.test( "Gas network - add pipe", function( assert ) {

        var gasNetwork = new GasNetwork();
        var pipe = new Pipe();

        gasNetwork.addPipe(pipe);

        assert.equal( gasNetwork.getNumberOfPipes(), 1, "Rura nie została dodana do sieci" );
    });

});

