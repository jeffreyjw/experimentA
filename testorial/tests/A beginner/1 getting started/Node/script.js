require([
    "gaslib/Node"
], function(Node){

    QUnit.test( "Node - initialize", function( assert ) {

        var node = new Node();

        assert.equal( node.getCaption(), "Node", "Nieprawidłowa nazwa węzła" );
    });

});

