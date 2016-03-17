'use strict';

class CareTaker {

    constructor() {
        this._data = new Map();
    }

    /**
     * @param title {String}
     * @param data {Object}
     */
    $set(title, data) {console.log(this._data);
        try{
            this._data.set(title, JSON.stringify(data));
        } catch(e) {
            throw new Error();
        };
    }

    /**
     * @param title {String}
     */
    $get(title) {
        var state = this._data.get(title);

        return state ? JSON.parse(state) : undefined;
    }

}

export default CareTaker;