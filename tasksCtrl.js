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
    $scope.completed = 0;

    $scope.changefilter = function (setfilter) {
        $scope.filter = setfilter;

        console.log($scope.filter);
    }


    $scope.filterTasks = function (task) {

        $scope.completed = 0;
        for(var i=0;i< $scope.tasksArr.length;i++)
        {
            if ($scope.tasksArr[i].taskDone)
            {
                $scope.completed++; 
            }
        }
        console.log(" in filterTasks with " + task.taskName + " " + task.taskDone);
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