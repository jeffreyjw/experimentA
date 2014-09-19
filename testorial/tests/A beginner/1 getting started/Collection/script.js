require([
    "gaslib/Collection"
], function(Collection){

    QUnit.test( "Number of elements in Collection", function( assert ) {

        var collection = new Collection();

        collection.add(6);

        assert.equal( collection.getSize(), 1, "Element nie został dodany do kolekcji" );
    });

});

