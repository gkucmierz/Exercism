//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster() {
    const res = {};
    Object.keys(this._roster).map(key => res[key] = this._roster[key].slice());
    return res;
  }

  _getGrade(grade) {
    return this._roster[grade] || [];
  }

  add(name, grade) {
    const list = this._getGrade(grade);
    list.push(name);
    list.sort();
    this._roster[grade] = list;
  }

  grade(grade) {
    return this._getGrade(grade).slice();
  }
}
