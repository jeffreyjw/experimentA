require([
    "gaslib/Node"
], function(Node){

    QUnit.test( "Node - initialize", function( assert ) {

        var node = new Node();

        assert.equal( node.caption, "Node", "Nieprawidłowa nazwa węzła" );
    });

});

