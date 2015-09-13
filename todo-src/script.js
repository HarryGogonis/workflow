// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.priorities = ["Now", "Tomorrow", "Someday"]
  $scope.todos = [
    {"text":"Learn Angular", "prio":"Now"},
    {"text":"Learn node", "prio": "Someday"}
  ];
  $scope.newItem = {};
  $scope.editable = [false, false]
  $scope.totalItems = 2;
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem.text){
      $scope.todos.push($scope.newItem);
      $scope.editable.push(false);
      $scope.newItem = "";
      $scope.totalItems += 1;
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.totalItems -= 1;
  }

  $scope.saveItem = function(item){
    if($scope.todos[item].text !== "")
      $scope.editable[item] = false;
  }
  
  // Clears all todos that are marked complete
  $scope.clearComplete = function() {
    // Create a copy of the todos array
    var temp = [];
    // iterate through todos array
    for (var i in $scope.todos) {
      var obj = $scope.todos[i];
      // check that obj is defined and todo is not done
      if (obj && !obj.done) {
        // add todo to temp array
        temp.push(obj);
      }
      // temp becomes new todo array
      $scope.todos = temp
      // fix increment of items
      $scope.totalItems = temp.length;
    }
  }
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/
