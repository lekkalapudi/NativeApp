angular.module('shelf.controllers').controller('ShelfDetailsCtrl',['$scope','notificationWorkerService',
    function($scope,notificationWorkerService){

    $scope.list=[];

        notificationWorkerService.getWorker().onmessage= function(event){
            $scope.$applyAsync(function(){
                $scope.list.unshift(event.data);
            });

        };

}]);