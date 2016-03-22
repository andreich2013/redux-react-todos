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
    });
  }

  read() {
    return fetch(`${this.endpoint}`, {
      method: 'get',
      headers: buildHeaders()
    });
  }

  update(id, data) {
    return fetch(`${this.endpoint}/${id}`, {
      method: 'put',
      headers: buildHeaders(),
      body: JSON.stringify(data)
    });
  }

  delete(id) {
    return fetch(`${this.endpoint}/${id}`, {
      method: 'delete',
      headers: buildHeaders()
    });
  }

}

export default new UsersApi('/api/users');
