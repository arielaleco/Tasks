app.controller("tasksCtrl", function ($scope, tasksServices) {

    $scope.tasksArr = [];
    $scope.needTodo ="need to do";
    

$scope.PushMe = function (task) {
    tasksServices.addTask(task);
    $scope.tasksArr = tasksArr;
   
}


});