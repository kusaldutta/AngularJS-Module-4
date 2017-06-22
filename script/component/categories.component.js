(function(){
  'use strict';
  angular.module('MenuApp')
        .component('categoryList', {
          templateUrl: 'src/CategoryList.html',
          bindings: {
            items: '<'
          }
        });
})();
