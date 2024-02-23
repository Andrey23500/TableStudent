class Student {
  id: string;
  name: string;
  surname: string;
  dateExam: Date;
  score: number;

  constructor(
    _id: string,
    _name: string,
    _surname: string,
    _dateExam: Date,
    _score: number,
  ) {
    this.id = _id;
    this.name = _name;
    this.surname = _surname;
    this.dateExam = _dateExam;
    this.score = _score;
  }
}
export { Student };
