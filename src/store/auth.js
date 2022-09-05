import { makeAutoObservable } from 'mobx';

class Auth {
    token = null;

    constructor() {
        makeAutoObservable(this);
    }

    setToken(data) {
        this.token = data;
    }

    clearToken() {
        this.token = null;
    }
}

export default new Auth();
