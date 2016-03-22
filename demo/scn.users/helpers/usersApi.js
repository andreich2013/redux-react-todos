function buildHeaders(data) {
  return Object({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, data || {});
}

class UsersApi {

  constructor(url = '') {
    this.endpoint = url;
  }

  create(data) {
    return fetch(`${this.endpoint}`, {
      method: 'post',
      headers: buildHeaders(),
      body: JSON.stringify(data)
    }).then((response) => response.json());
  }

  read() {
    return fetch(`${this.endpoint}`, {
      method: 'get',
      headers: buildHeaders()
    }).then((response) => response.json());
  }

  update(id, data) {
    return fetch(`${this.endpoint}/${id}`, {
      method: 'put',
      headers: buildHeaders(),
      body: JSON.stringify(data)
    }).then((response) => response.json());
  }

  delete(id) {
    return fetch(`${this.endpoint}/${id}`, {
      method: 'delete',
      headers: buildHeaders()
    }).then((response) => response.json());
  }

}

export default new UsersApi('/api/users');
