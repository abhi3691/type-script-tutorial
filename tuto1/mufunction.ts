/** @format */

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero: string) => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function HandleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
