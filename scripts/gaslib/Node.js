define([
    "gaslib/Point"
], function(Point){


    var Node = function(){
        this.position = new Point();
        this.__name = "Node";
    };

    Node.constructor = Node;

    Node.prototype.setCaption = function(caption)
    {
        this.__name = caption;
    };

     Node.prototype.getCaption = function()
    {
        return this.__name;
    };

    return Node;
});
