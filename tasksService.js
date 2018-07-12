app.factory('tasksServices', function ($log, $q,$http) {

    tasksArr = [];
    function Task(taskName) {
        this.taskName = taskName;
        this.taskDone = false;      
    }

    
    function addThisTask(task) {
        tasksArr.push(new Task(task));

    }

    function deleteThisTask(task){             
        var n = tasksArr.indexOf(task);                
        if (n>-1)
        {
            tasksArr.splice(n, 1);
        }
            
    }


    return {
        addTask     : addThisTask,
        deleteTask  : deleteThisTask
     
    }

});