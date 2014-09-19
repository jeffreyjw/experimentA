require([
    "gaslib/Collection",
    "gaslib/Iterator"
], function(Collection, Iterator){

    QUnit.test( "Iterate throught elements", function( assert ) {

        var collection = new Collection();
        collection.add(6);
        collection.add("Placki");
        collection.add(1);

        var iter = collection.iterator();

        assert.equal( iter.getNext(), 6, "Nie znaleziono wartości 6" );
        assert.equal( iter.end(), false, "Elementy są w kolekcji a end zwraca co innego" );
        assert.equal( iter.getNext(), "Placki", "Nie znalzeiono tekstu 'Placki'" );
        assert.equal( iter.getNext(), 1, "Nie znaleziono wartości 1" );
        assert.equal( iter.end(), true, "Nie ma więcej elementów w kolekcji, a end zwraca że są" );

    });

});

