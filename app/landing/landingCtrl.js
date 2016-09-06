angular.module("Zoolandia")
    .controller('LandingCtrl', [
        '$scope',
        '$http',
     function($scope, $http){
        $scope.title = "I'm the landing page"

        $scope.apiRoute = null
        
        $http.get("http://localhost:8000")
            .then((res) => {
                $scope.apiRoute = res.data;
            })
        
    }]);
