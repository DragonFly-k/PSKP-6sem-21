const formAdd = document.querySelector('#form-add');
const formUpdate = document.querySelector('#form-update');
const deleteButton = document.querySelector('#delete');

formAdd?.addEventListener('submit', add);
formUpdate?.addEventListener('submit', update);
deleteButton?.addEventListener('click', deleteOne);

function add(event) {
    event.preventDefault();

    const fd = new FormData(formAdd);

    fetch('/contacts/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullName: fd.get('fullName'),
            phoneNumber: fd.get('phoneNumber')
        })
    })
        .then(() => window.location.href = '/contacts');
}

function update(event) {
    event.preventDefault();

    const fd = new FormData(formUpdate);

    fetch(`/contacts/update/${fd.get('id')}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullName: fd.get('fullName'),
            phoneNumber: fd.get('phoneNumber')
        })
    })
        .then(() => window.location.href = '/contacts');
}

function deleteOne(event) {
    event.preventDefault();

    const fd = new FormData(formUpdate);

    fetch(`/contacts/delete/${fd.get('id')}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
        .then(() => window.location.href = '/contacts');
}





