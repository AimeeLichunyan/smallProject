class GPromise {
    constructor(executor) {
        this._promiseStatus = GPromise.PENDING;
        this._promiseValue;
        this.execute(excutor)
    }
}