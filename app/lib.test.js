import { it, expect } from "vitest";
import { getAllNamesFromList } from "./lib.js";

it("should return all names from list", () => {
  const list = [
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
  ];
  expect(getAllNamesFromList(list)).toEqual(["John", "Jane"]);
}
