//main.js

function regSW(){
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js');
  }
}

function login() {
  var infile = ('{"Emil":[{"Name":"Philosophy Final","Due":"4/28/21","Status":"Important"},{"Name":"Mobile App Final","Due": "5/2/21","Status": "Very Important"}],"Marta":[{"Name":"Greek History Test","Due":"B/28/22","Status":"Long-Term"},{"Name":"Take Out Trash","Due": "Every Tuesday","Status": "Important"}]}')
  var list = JSON.parse(infile);
  
  var userName = document.getElementById("userInput").value;
  if(list.hasOwnProperty(userName)){
    var jsonData = list[userName];

    //Empty the old contents of the ToDo list so the new ones can be added
    document.getElementById("todoList").innerHTML = '';

    var tasks = document.createElement("div");
    tasks.setAttribute('id', 'Tasks');

    for(var i = 0; i < jsonData.length; i++) {
      var currentTask = jsonData[i];

      var task = document.createElement('div');
      task.setAttribute('id', 'task');

      var taskPt = document.createElement('div');
      taskPt.setAttribute('id', 'taskPt');
      var key = document.createElement('p');
      key.setAttribute('id', 'key');
      var value = document.createElement('p')
      value.setAttribute('id', 'value')
      textNode1 = document.createTextNode("Name: ");
      key.appendChild(textNode1);
      textNode2 = document.createTextNode(currentTask.Name);
      value.appendChild(textNode2);
      taskPt.appendChild(key)
      taskPt.appendChild(value);
      task.appendChild(taskPt);


      var taskPt = document.createElement('div');
      taskPt.setAttribute('id', 'taskPt');
      var key = document.createElement('p');
      key.setAttribute('id', 'key');
      var value = document.createElement('p')
      value.setAttribute('id', 'value')
      textNode1 = document.createTextNode("Due: ");
      key.appendChild(textNode1);
      textNode2 = document.createTextNode(currentTask.Due);
      value.appendChild(textNode2);
      taskPt.appendChild(key)
      taskPt.appendChild(value);
      task.appendChild(taskPt);

      var taskPt = document.createElement('div');
      taskPt.setAttribute('id', 'taskPt');
      var key = document.createElement('p');
      key.setAttribute('id', 'key');
      var value = document.createElement('p')
      value.setAttribute('id', 'value')
      textNode1 = document.createTextNode("Status: ");
      key.appendChild(textNode1);
      textNode2 = document.createTextNode(currentTask.Status);
      value.appendChild(textNode2);
      taskPt.appendChild(key);
      taskPt.appendChild(value);
      task.appendChild(taskPt);
      tasks.appendChild(task);
    }
  document.getElementById("todoList").appendChild(tasks);
  } else(
    alert('This username does not exist.')
  )
}
