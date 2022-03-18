function add() {
  let li = document.createElement("LI");
  let p = document.createElement("P");
  let input_value = document.getElementById("toDo").value;
  let input_text = document.createTextNode(input_value);
  let validate = document.getElementById("validate");

  validate.style.display = "none";

  if (input_text.length < 2) {
    validate.style.display = "flex";
  } else {
    p.className = "unchecked";
    p.appendChild(input_text);
    li.appendChild(p);
    document.querySelector("ul").appendChild(li);
    document.getElementById("toDo").value = "";

    createDeleteButton(li);
  }
}

function createDeleteButton(li) {
  let span = document.createElement("SPAN");
  let icon = document.createTextNode("delete");

  span.className = "material-icons";
  span.appendChild(icon);
  li.appendChild(span);

  span.onclick = () => (span.parentElement.style.display = "none");
}

document.querySelectorAll("li").forEach(createDeleteButton);

document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    e.target.classList.toggle("checked");
  }
});
