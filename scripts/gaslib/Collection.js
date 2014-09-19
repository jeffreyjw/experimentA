define([
    
], function(){

    var Collection = function(){
        this.__collection = [];
    };


    Collection.constructor = Collection;

    Collection.prototype.getSize = function()
    {
        return this.__collection.length;
    }

    Collection.prototype.add = function(element){
        this.__collection.push(element);
    };


    return Collection;
});
