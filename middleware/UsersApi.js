class UsersApi {

    constructor() {
        this.endpoint = './assets/fixture'
    }

    create(data) {
        return fetch(this.endpoint, {
            method: "post",
            body: JSON.stringify(data)
        });
    }

    read() {
        return fetch(this.endpoint, {
            method: "get"
        });
    }

    update(id, data) {
        return fetch(`${this.endpoint}/${id}`, {
            method: "put",
            body: JSON.stringify(data)
        });
    }

    delete(id) {
        return fetch(`${this.endpoint}/${id}`, {
            method: "delete"
        });
    }

}

export default UsersApi