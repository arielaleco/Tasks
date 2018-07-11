app.factory('tasksServices', function ($log, $q,$http) {

    tasksArr = [];
    function Task(taskName) {
        this.taskName = taskName;
        this.taskDone = false;      
    }

    
    function addThisTask(task) {
        tasksArr.push(new Task(task));

    }


    return {
        addTask : addThisTask
     
    }

});