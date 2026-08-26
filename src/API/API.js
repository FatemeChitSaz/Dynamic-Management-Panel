const BASE_URL = "https://jsonplaceholder.typicode.com";

const handleResponse = async (res) => {
    if (!res.ok) {
        throw new Error(`خطا در ارتباط با سرور (status: ${res.status})`);
    }

    const text = await res.text();
    return text ? JSON.parse(text) : null;
};

export const getUsers = () => {
    return fetch(`${BASE_URL}/users`).then(handleResponse);
}

export const getUser = (id) => {
    return fetch(`${BASE_URL}/users/${id}`).then(handleResponse);
}

export const updateUser = (id, data) => {
    return fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then(handleResponse);
}

export const deleteUser = (id) =>
     fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
    }).then(handleResponse);

export const getTodos = () =>
    fetch(`${BASE_URL}/todos`).then(handleResponse);

export const updateTodo = (id, data) =>
    fetch(`${BASE_URL}/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then(handleResponse);

export const getPosts = () =>
    fetch(`${BASE_URL}/posts`).then(handleResponse);

export const getPost = (id) =>
    fetch(`${BASE_URL}/posts/${id}`).then(handleResponse);

export const getComments = () =>
    fetch(`${BASE_URL}/comments`).then(handleResponse);

export const deleteComment = (id) =>
    fetch(`${BASE_URL}/comments/${id}`, {
        method: "DELETE",
    }).then(handleResponse);