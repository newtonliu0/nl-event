class Event {
    public readonly type: string | symbol;
    private _currentTarget: unknown = null;
    private _target: unknown = null;
    private _data: unknown = null;

    constructor(type: string | symbol) {
        this.type = type;
    }

    public get currentTarget(): unknown {
        return this._currentTarget;
    }

    public get target(): unknown {
        return this._target;
    }

    public get data(): unknown {
        return this._data;
    }

    public set data(data: unknown) {
        this._data = data;
    }

    public clone(): Event {
        return new Event(this.type);
    }

    public setCurrentTarget(currentTarget: unknown): Event {
        this._currentTarget = currentTarget;
        return this;
    }

    public setTarget(target: unknown): Event {
        this._target = target;
        return this;
    }
}

export default Event;
