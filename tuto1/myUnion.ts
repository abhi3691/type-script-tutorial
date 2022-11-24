/** @format */

let score: number | string = 33;

type Users = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let hitesh: Users | Admin = {
  name: "abhi",
  id: 332,
};

// hitesh = { userName: "hc", id: 334 };
// //making some API calls
// function getDbId(id: number | string) {
//   console.log(`DB id is ${id}`);
// }
getDbId(3);
getDbId("3");

hitesh = { userName: "hc", id: 334 };
//making some API calls
function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

const data: number[] = [1, 2, 3];

let SetAlotMent: "Abhi" | "Aji" | "visha";

SetAlotMent = "Aji";
