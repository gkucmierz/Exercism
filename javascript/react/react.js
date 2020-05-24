//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Observer {
  constructor() {
    this.fns = [];
  }

  add(fn) {
    this.fns.push(fn);
  }

  remove(fn) {
    const idx = this.fns.indexOf(fn);
    if (idx !== -1) {
      this.fns.splice(idx, 1);
      return true;
    }
    return false;
  }

  emit(data) {
    return this.fns.map(fn => fn(data));
  }
}

class SteadyState {
  constructor() {
    if (!SteadyState.instance) {
      SteadyState.instance = this;
    }
    this.observer = new Observer();
    this._cnt = 0;
    this._busy = () => ++this._cnt;
    this._free = () => {
      if (--this._cnt === 0) {
        this.observer.emit();
      }
    }
   return SteadyState.instance;
  }

  wrap(fn) {
    return (...args) => {
      this._busy();
      const res = fn(...args);
      this._free();
      return res;
    };
  }

  call(fn) {
    this._busy();
    fn();
    this._free();
  }
}

export class InputCell {
  constructor(value) {
    this.value = value;
    this.observer = new Observer();
  }

  setValue(value) {
    new SteadyState().call(() => {
      this.value = value;
      this.observer.emit(value);
    });
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    let lastValue;
    const steadyState = new SteadyState();

    this.inputCells = inputCells;
    this.callbacks = [];
    this.observer = new Observer();
    
    steadyState.observer.add(() => {
      if (this.value !== lastValue) {
        this.callbacks.map(callback => callback.fn(this));
        lastValue = this.value;
      }
    });

    const updateValue = steadyState.wrap(() => {
      this.value = fn(inputCells);
      this.observer.emit(this.value);
    });
    inputCells.map(inputCell => inputCell.observer.add(updateValue));

    updateValue();
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    const idx = this.callbacks.indexOf(cb);
    if (idx !== -1) {
      this.callbacks.splice(idx, 1);
    }
  }
}

export class CallbackCell {
  constructor(fn) {
    this.values = [];
    this.fn = cell => this.values.push(fn(cell));
  }
}
