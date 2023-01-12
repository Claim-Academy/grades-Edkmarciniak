import { expect, it } from "vitest";
import { getAllNamesFromList } from "./lib.js";

it("should return all names from list", () => {
  const input = [{ name: "John" }, { name: "Jane" }];
  const expected = ["John", "Jane"];
  const actual = getAllNamesFromList(input);
  expect(actual).toEqual(expected);
});
