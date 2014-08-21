angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(res){
        console.log("links: ", res.data);
        $scope.data = res;
        $scope.data.links = res.data;
    });
  };

  $scope.getLinks();
});
