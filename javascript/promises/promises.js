//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = fn => {
  return data => {
    return new Promise((resolve, reject) => {
      fn(data, (error, res) => {
        if (error) {
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  };
};

export const all = promises => {
  return new Promise((resolve, reject) => {
    if (typeof promises === 'undefined') return resolve();
    if (promises.length === 0) return resolve([]);
    const res = [];
    let cnt = 0;
    const done = (data, i) => {
      res[i] = data;
      ++cnt;
      if (cnt >= promises.length) {
        resolve(res);
      }
    };
    promises.map((promise, i) => {
      promise
        .then(data => done(data, i))
        .catch(reject);
    })
  });
};

export const allSettled = promises => {
  return new Promise((resolve, reject) => {
    if (typeof promises === 'undefined') return resolve();
    if (promises.length === 0) return resolve([]);
    const res = [];
    let cnt = 0;
    const done = (data, i) => {
      res[i] = data;
      ++cnt;
      if (cnt >= promises.length) {
        resolve(res);
      }
    };
    promises.map((promise, i) => {
      promise
        .then(data => done(data, i))
        .catch(data => done(data, i));
    })
  });
};

export const race = promises => {
  return new Promise((resolve, reject) => {
    if (typeof promises === 'undefined') return resolve();
    if (promises.length === 0) return resolve([]);
    let resolved = false;
    const resOnce = fn => data => {
      if (!resolved) fn(data);
      resolved = true;
    };
    promises.map((promise, i) => {
      promise
        .then(resOnce(resolve))
        .catch(resOnce(reject));
    })
  });
};

export const any = promises => {
  return new Promise((resolve, reject) => {
    if (typeof promises === 'undefined') return resolve();
    if (promises.length === 0) return resolve([]);
    const errors = [];
    let cnt = 0;
    let resolved = false;
    const addError = (error, i) => {
      errors[i] = error;
      ++cnt;
      if (cnt >= promises.length) reject(errors);
    };
    promises.map((promise, i) => {
      promise
        .then(data => {
          if (!resolved) resolve(data);
          resolved = true;
        })
        .catch(error => {
          if (!resolved) addError(error, i);
        });
    })
  });
};
