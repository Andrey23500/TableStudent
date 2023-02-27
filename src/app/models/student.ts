class Student {
  id: string;
  name: string;
  surname: string;
  birthday: string;
  score: number;

  constructor(
    _id: string,
    _name: string,
    _surname: string,
    _birthday: string,
    _score: number,
  ) {
    this.id = _id;
    this.name = _name;
    this.surname = _surname;
    this.birthday = _birthday;
    this.score = _score;
  }
}
export { Student };
