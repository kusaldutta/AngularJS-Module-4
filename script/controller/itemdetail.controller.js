(function(){
'use strict';
angular.module('Data')
        .controller('ItemDetailController', ItemDetailController);


    ItemDetailController.$inject = ['item'];
    function ItemDetailController(item){
      var itemDetail = this;
      //alert("Kusal: " + item);
      itemDetail.name = item.name;
      itemDetail.description = item.description;
    }

})();
