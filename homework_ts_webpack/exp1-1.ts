// 定义一个user使得代码可以正常运行

export type User = unknown;

export const users: unknown[] = [
  {
    name: "Li  Ming",
    age: 25,
    university: "THU",
  },
  {
    name: "Ham Meimei",
    age: 23,
    university: "PKU",
  },
];

export function logPerson(user: unknown) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);