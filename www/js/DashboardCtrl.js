angular.module('shelf.controllers').controller('DashboardCtrl', ['$scope', '$state', '$famous', 'shelfService',
    function ($scope, $state, $famous, shelfService) {


        var EventHandler = $famous['famous/core/EventHandler'];
        $scope.myEventHandler = new EventHandler();
        $scope.mySecondEventHandler = new EventHandler();
        $scope.list = shelfService.getShelves();
        $scope.options = {
            myScrollView: {
                paginated: false,
                speedLimit: 5,
                direction: 0
            }
        };


        $scope.navigate = function () {

            $state.go('shelfDetails');
        };


    }]);