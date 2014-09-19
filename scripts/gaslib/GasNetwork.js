define([
    "gaslib/Collection"
], function(Collection){

    var GasNetwork = function(){
        this.pipes = new Collection();
        this.nodes = new Collection();
    };

    GasNetwork.constructor = GasNetwork;

    GasNetwork.prototype.getNumberOfPipes = function()
    {
        return this.pipes.getSize();
    }

    GasNetwork.prototype.getNumberOfNodes = function()
    {
        return this.nodes.getSize();
    }

    GasNetwork.prototype.addPipe = function(pipe){
        this.pipes.add(pipe);
    };


    GasNetwork.prototype.addNode = function(node){
        this.nodes.add(node);
    };


    return GasNetwork;
});
