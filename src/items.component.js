(function(){
  'use strict';
  angular.module('MenuApp')
        .component('itemDetail', {
          templateUrl: 'src/template/itemDetail.html',
          bindings: {
            items: '<'
          }
        });
})();
