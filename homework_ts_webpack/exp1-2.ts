//任务： 使用类型断言使代码可以运行

interface User {
    name: string;
    age: number;
    university: string;
  }
  
  interface Admin {
    name: string;
    age: number;
    role: string;
  }
  
  export type Person = User | Admin; //联合类型
  
  export const persons: Person[] = [
    {
        name: "Li  Ming",
        age: 25,
        university: "THU",
    },
    {
      name: "Shen Megui",
      age: 32,
      role: "Administrator",
    },
    {
        name: "Ham Meimei",
        age: 23,
        university: "PKU",
    },
    {
      name: "Cai Xukun",
      age: 11,
      role: "beautiful chicken",
    },
  ];
  
  export function logPerson(person: Person) {
    let additionalInformation: string;
    if (person.role) {
      additionalInformation = person.role;
    } else {
      additionalInformation = person.university;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
  }
  
  persons.forEach(logPerson);// 还记得for each是怎样使用吗？