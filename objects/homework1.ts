interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
}

let person1: Person = {
  name: "Ivan",
  lastName: "Ivanov",
  age: 30,
  email: "ivan.ivanov@gmail.com",
  phoneNumber: +35999020300,
};

console.log(person1);

let person2: PersonInfo = {
  name: "Ivanka",
  lastName: "Ivanova",
  age: 35,
  email: "ivanka.ivanova@gmail.com",
  phoneNumber: +35988909090,
  country: "Bulgaria",
  greeting: function () {
    return "Здравей!";
  },
};

console.log(person2);
console.log(person2.greeting?.());
