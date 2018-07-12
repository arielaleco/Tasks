app.controller("tasksCtrl", function ($scope, tasksServices) {

    $scope.tasksArr = [];
    $scope.needTodo ="need to do";
    

$scope.PushMe = function (task) {
    tasksServices.addTask(task);
    $scope.tasksArr = tasksArr;
   
}

$scope.DeleteTheTask = function (task) {
    tasksServices.deleteTask(task);
    $scope.tasksArr = tasksArr;
   
}

$scope.changeFilter = function(state){
    
}



});