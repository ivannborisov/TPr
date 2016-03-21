(function(){
    angular.module('app').factory('notifier', function(){
       return {
           success: function(msg) {
                alert("Success "+ msg);
           },
           error: function(msg){
               alert("Error "+ msg);
           }
       }
    });

}());