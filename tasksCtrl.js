app.controller("tasksCtrl", function ($scope, tasksServices) {

    $scope.tasksArr = [];
    $scope.needTodo = "need to do";


    $scope.PushMe = function (task) {
        tasksServices.addTask(task);
        $scope.tasksArr = tasksArr;

    }

    $scope.DeleteTheTask = function (task) {
        tasksServices.deleteTask(task);
        $scope.tasksArr = tasksArr;

    }
    $scope.filter = 1;
    $scope.changefilter = function (setfilter) {
        $scope.filter = setfilter;

        console.log($scope.filter);
        // $scope.selected = "active";

        // console.log($scope.my);
    }

    $scope.filterTasks = function (task) {

        console.log(task);
        if ($scope.filter == 1) //all 
        {
            console.log("in all");
            return true;
        }
        else
            if ($scope.filter == 2) //Active 
            {
                console.log("in active");
                if (task.taskDone) { return false; }
                else { return true; }


            }
        if ($scope.filter == 3) //Complete 
        {
            console.log("Complete");
            if (task.taskDone) { return true; }
            else { return false; }
        }
                
    }

    
});