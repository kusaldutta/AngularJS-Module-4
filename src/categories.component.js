(function(){
  'use strict';
  angular.module('MenuApp')
        .component('categoryList', {
          templateUrl: 'src/template/CategoryList.html',
          bindings: {
            items: '<'
          }
        });
})();
