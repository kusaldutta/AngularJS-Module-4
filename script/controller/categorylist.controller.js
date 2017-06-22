(function(){
'use strict'
angular.module('MenuApp')
        .controller('CategoryListController', CategoryListController);


//CategoryListController.$inject = ['items'];
//function CategoryListController(items){
CategoryListController.$inject = ['MenuDataService'];
function CategoryListController(MenuDataService){

  var categoryList = this;
  //categoryList = items;
  //console.log(items);
  categoryList.items = [];

  //var promise = function(){
  categoryList.$onInit = function(){
    MenuDataService.getAllCategories()
      .then(function(result){
        //console.log("Result: " + result);
        categoryList.items = result.data;
      //  console.log("Categories: " + categoryList.items);
      });
    };
  //}
}
})();
