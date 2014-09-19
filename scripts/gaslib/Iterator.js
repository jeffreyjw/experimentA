define([], function(){


    var Iterator = function(collection){
        this.collection = collection;
        this.position = 0;
    };

    Iterator.constructor = Iterator;

    Iterator.prototype.getNext = function()
    {
        return this.collection[this.position++];
    }

    
    Iterator.prototype.end = function()
    {
        return this.position == this.collection.length;
    }


    return Iterator;
});
