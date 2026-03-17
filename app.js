const API = 'http://localhost:3000';

async function loadTasks() {
  const res = await fetch(`${API}/todos`);
  const todos = await res.json();
  renderTasks(todos);
}

async function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  setStatus('Asking AI...');
  input.value = '';

  const res = await fetch(`${API}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  await res.json();
  setStatus('');
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/todos/${id}`, { method: 'DELETE' });
  loadTasks();
}

function handleKey(event) {
  if (event.key === 'Enter') addTask();
}

function setStatus(msg) {
  document.getElementById('status').textContent = msg;
}

function renderTasks(todos) {
  const list = document.getElementById('todoList');
  if (todos.length === 0) {
    list.innerHTML = '<p class="empty">No tasks yet. Add one above!</p>';
    return;
  }
  list.innerHTML = todos.map(todo => `
    <div class="todo-card ${todo.priority}">
      <div class="todo-content">
        <div class="todo-top">
          <span class="todo-text ${todo.done ? 'done' : ''}">${todo.text}</span>
          <span class="priority-badge badge-${todo.priority}">${todo.priority}</span>
        </div>
        <div class="ai-tip">AI: ${todo.suggestion}</div>
      </div>
      <button class="del-btn" onclick="deleteTask(${todo.id})">×</button>
    </div>
  `).join('');
}

loadTasks();