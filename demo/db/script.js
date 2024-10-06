let userForm = document.getElementById('userForm');
userForm.addEventListener('submit', async x => {
    x.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const response = await fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age })
    });
    const user = await response.json();
    document.getElementById('userList').innerHTML += `<li>${user.name} (${user.age})</li>`;
});

async function fetchUsers() {
    const response = await fetch('/users');
    const users = await response.json();
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        userList.innerHTML += `<li>${user.name} (${user.age})</li>`;
    });
}

fetchUsers();