window.onload = () => {
  const form = document.getElementById("my-form");
  const main = document.getElementsByTagName("main")[0];
  const divOfUl = document.createElement("div");
  divOfUl.id = "all-tasks";
  const h3 = document.createElement("h3");
  const newUl = document.createElement("ul");
  main.appendChild(divOfUl);
  divOfUl.appendChild(h3);
  h3.innerText = "To-Do List:";
  form.onsubmit = (e) => {
    e.preventDefault();

    divOfUl.appendChild(newUl);

    const inputBar = document.getElementsByTagName("input")[0];
    const taskLi = document.createElement("li");
    const divForButtonAndLi = document.createElement("div");
    divForButtonAndLi.className = "button-and-li";
    newUl.appendChild(divForButtonAndLi);
    divForButtonAndLi.appendChild(taskLi);
    taskLi.innerText = inputBar.value;

    inputBar.value = "";

    const taskDone = (e) => {
      e.target.style = "text-decoration: line-through";
      const btnToDeleteTask = document.createElement("button");
      divForButtonAndLi.appendChild(btnToDeleteTask);
      btnToDeleteTask.className = "button-delete-task";
      btnToDeleteTask.innerText = "Elimina il task";
      const deleteTask = (e) => {
        e.target.parentElement.remove();
      };
      btnToDeleteTask.addEventListener("click", deleteTask);
      e.target.removeEventListener("click", taskDone);
    };
    taskLi.addEventListener("click", taskDone);
  };
};
