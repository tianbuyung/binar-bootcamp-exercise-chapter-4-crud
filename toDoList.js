// Assign variable to do list as array
let toDoList =[];

// Create - add toDo item to toDoList
function addToDoList (toDo) {
    toDoList.push(toDo);
}

// Read - check item on toDoList
function getToDoList (){
    console.log('ini daftar pekerjaan saat ini:', toDoList)
}

// Update - change status from waiting to done or else
function updateStatus (id) {
  toDoList.forEach(function(toDo) {
    if(id == toDo.id) {
      toDo.status = 'Done';
    }
  })
}

// Update - change activity name
function updateActivityName (id, newName) {
  toDoList.forEach(function(toDo) {
    if(id == toDo.id) {
      toDo.activity_name = newName;
    }
  })
}

// Delete - delete activity from toDoList
function deleteActivity(id) {
  const filteredActivity = toDoList.filter(function(toDo) {
   return toDo.id !== id
  })
  toDoList = filteredActivity
}

addToDoList({
    id: 1,
    activity_name: "Buy shoes",
    status: "waiting",
    deadline: "28-07-2022",
});

getToDoList();

addToDoList({
    id: 2,
    activity_name: "Create a event proposal",
    status: "waiting",
    deadline: "28-07-2022",
});

getToDoList();

addToDoList({
    id: 3,
    activity_name: "Meeting with The Big Boss",
    status: "waiting",
    deadline: "29-07-2022",
});

updateStatus(2);

getToDoList();

updateActivityName(1,'Go to shop')

getToDoList();

deleteActivity(2);

getToDoList();