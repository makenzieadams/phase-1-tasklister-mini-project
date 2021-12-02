document.addEventListener("DOMContentLoaded", () => {
  // get the form out of html
  let form = document.querySelector("#create-task-form");
  let taskInput = document.querySelector("#new-task-description");

  // listen to the form's submit event
  form.addEventListener("submit", (e) => {
    // prevent the default of sending to a server (crashes page)
    e.preventDefault();

    // get the value of our task input when the form was submitted
    const task = e.target.querySelector("#new-task-description").value;

    // get the ul from our html
    // <ul id="tasks"></ul>
    let tasks = document.querySelector("#tasks");

    // create a list item element
    // <li></li>
    const tag = document.createElement("li");
    // create a text node "dog"
    const text = document.createTextNode(
      `${task[0].toUpperCase()}${task.slice(1)}`
    );
    // make an input <input />
    const checkbox = document.createElement("input");
    // make the input type checkbox <input type="checkbox" />
    checkbox.type = "checkbox";
    // add an event listener to the checkbox being clicked
    checkbox.addEventListener("click", (e) => {
      // event target will be the checkbox
      // if the checkbox is checked. strike through
      if (e.target.checked) {
        tag.style.textDecoration = "line-through";
        tag.style.color = "red";
      } else {
        // if it isnt checked, show like normal
        tag.style.textDecoration = "inherit";
        tag.style.color = "inherit";
      }
    });
    // put the text node and checkbox in the list item
    // <li> <input type="checkbox"/> Dog </li>
    tag.appendChild(checkbox);
    tag.appendChild(text);

    // add the list item to the ul (unordered list)
    /*
      <ul id="tasks">
        <li>dog</li>
      </ul>
    */
    tasks.appendChild(tag);
    taskInput.value = "";
  });
});
