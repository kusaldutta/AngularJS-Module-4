(function(){
  'use strict'
angular.module('MenuApp')
    .service('MenuDataService',MenuDataService );
    //.constant('BASEPATH','https://davids-restaurant.herokuapp.com/');

MenuDataService.$inject = ['$http'];
function MenuDataService($http)
{

  //alert("inside service method");
  var service = this;
  service.getAllCategories = function(){
    var response = $http({
      method: 'GET',
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    })

    return response;
  }

  service.getItemsForCategory = function(){
    //alert("Service called");
    var response = $http({
      method: 'GET',
      url:  'https://davids-restaurant.herokuapp.com/menu_items.json'
      //params: categoryShortName
    })
    //var items = response.data;
    console.log("Response: " + response);
    return response;
  }
}
})();
