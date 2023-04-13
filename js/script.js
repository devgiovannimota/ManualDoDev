const tbody = document.querySelector("tbody");
const addForm = document.querySelector(".add-form");
const inputValue = document.querySelector(".input-task");

const fetchTasks = async () => {
  const response = await fetch("http://localhost:3333/tasks");
  const tasks = await response.json();
  return tasks;
};

const addTask = async (event) => {
  event.preventDefault();

  const task = { tittle: inputValue.value };

  await fetch("http://localhost:3333/task", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  loadTasks();
  inputValue.value = "";
};

const deleteTask = async (id) => {
  await fetch(`http://localhost:3333/task/${id}`, {
    method: "delete",
  });
  loadTasks();
};

const updateTask = async (task) => {
  const { tittle, id_tasks, status, created_at } = task;
  await fetch(`http://localhost:3333/task/${id_tasks}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tittle, status }),
  });
  loadTasks();
};

const createElement = (tag, innerText = "", innerHTML = "") => {
  const element = document.createElement(tag);

  if (innerText) {
    element.innerText = innerText;
  }

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  return element;
};

const createSelect = (value) => {
  const options = `
    <option value="Pendente">Pendente</option>
    <option value="Em andamento">Em andamento</option>
    <option value="Concluida">Concluída</option>
    `;
  const select = createElement("select", "", options);

  select.value = value;

  return select;
};

const createRow = (task) => {
  const { tittle, id_tasks, status, created_at } = task;

  const tr = createElement("tr");
  const tdTittle = createElement("td", tittle);
  const tdCreateAt = createElement("td", created_at);
  const tdStatus = createElement("td");
  const tdActions = createElement("td");
  const select = createSelect(status);

  select.addEventListener("change", ({ target }) =>
    updateTask({ ...task, status: target.value })
  );

  const editButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined"> edit </span>'
  );

  const deleteButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined"> delete </span>'
  );

  editButton.classList.add("btn-action");
  deleteButton.classList.add("btn-action");

  deleteButton.addEventListener("click", () => deleteTask(id_tasks));

  tdStatus.appendChild(select);

  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  tr.appendChild(tdTittle);
  tr.appendChild(tdCreateAt);
  tr.appendChild(tdStatus);
  tr.appendChild(tdActions);

  return tr;
};

const loadTasks = async () => {
  const tasks = await fetchTasks();

  tbody.innerHTML = "";

  tasks.forEach((task) => {
    const tr = createRow(task);
    tbody.appendChild(tr);
  });
};

addForm.addEventListener("submit", addTask);
loadTasks();
