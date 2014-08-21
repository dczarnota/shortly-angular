angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.loading = false;
  $scope.reg =  /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.addLink = function(){
    Links.addLink($scope.link)
      .then(function(){
        $scope.link.url = null;
        $scope.loading = false;
      })
      .catch(function(error){
        console.error(error);
      });
  };
});

// .directive('httpCheck', function(){
//   var link = $scope.link.url;
//   var error = "Add http:// or https:// to your link";
//   if(link.indexOf('http://') === -1 || link.indexOf('https://') === -1){

//   }

// });
