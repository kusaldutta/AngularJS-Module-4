(function(){
'use strict';
//angular.module('MenuApp')
angular.module('MenuApp')
      .config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  //alert("Inside Routes");
  $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'src/template/home.html'
        })
        .state('categorylist',{
          url: '/Categories',
          templateUrl: 'src/template/Categories.html'
          //controller: 'CategoryListController as categoryList',
          //resolve: {
            //items: ['MenuDataService', function(MenuDataService){
              //return MenuDataService.getAllCategories();
            //}]
          //}
        })
        .state('itemDetail',{
          url:'/itemDetail/{categoryShortName}',
          templateUrl: 'src/template/itemDetail.html',
          controller: 'ItemDetailController as itemDetail',
          resolve:{
              item: ['$stateParams','MenuDataService',
                  function($stateParams, MenuDataService){
                      return MenuDataService.getItemsForCategory()
                      .then(function(response){
                        //alert(response.data.menu_items[0].name);
                        //alert($stateParams.categoryShortName);
                        return response.data.menu_items[$stateParams.categoryShortName];
                    });
                }]
            }
        });
      }
})();
