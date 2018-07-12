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

$scope.filter= {
    all: false,
    complete: false,
    active: false
};

$scope.filterTasks = function(task) {

    console.log($scope.filter);
    if (task && (task.taskDone) && ($scope.filter.complete)){
      return false;
    } else {
      return true;
    }
    // return (car.brand.includes($scope.query) || car.model.includes($scope.query))
  }

});