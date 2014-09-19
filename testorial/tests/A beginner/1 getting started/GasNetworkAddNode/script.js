require([
    "gaslib/GasNetwork",
    "gaslib/Node"
],
    function(GasNetwork, Node){

        QUnit.test( "Gas network - add node", function( assert ) {

            var gasNetwork = new GasNetwork();
            var node = new Node();

            gasNetwork.addNode(node);

            assert.equal( gasNetwork.getNumberOfNodes(), 1, "Węzeł nie został dodany do sieci" );
        });

});