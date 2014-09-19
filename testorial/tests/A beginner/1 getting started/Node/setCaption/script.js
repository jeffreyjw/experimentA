require([
    "gaslib/Node"
], function(Node){

    QUnit.test( "Node - initialize", function( assert ) {

        var node = new Node();

        node.setCaption("Lubie placki");

        assert.equal( node.getCaption(), "Lubie placki", "Nieprawidłowa nazwa węzła" );
    });

});

