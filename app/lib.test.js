import { expect, it } from "vitest";
import {
  getAllNamesFromList,
  getStudentById,
  getStudentGradeById,
  getStudentGradesByType,
  addGrade,
} from "./lib.js";

it("should return all names from list", () => {
  const input = [{ name: "John" }, { name: "Jane" }];
  const expected = ["John", "Jane"];

  const actual = getAllNamesFromList(input);

  expect(actual).toEqual(expected);
});

it("should return student by id", () => {
  const listInput = [{ id: 1 }, { id: 2 }];
  const idFindInput = 2;

  const expected = { id: 2 };

  const actual = getStudentById(listInput, idFindInput);

  expect(actual).toEqual(expected);
});

it("should return student grade by id", () => {
  const listInput = [{ id: 1 }, { id: 2 }];
  const idGradeInput = 2;

  const expected = { id: 2 };

  const actual = getStudentGradeById(listInput, idGradeInput);

  expect(actual).toEqual(expected);
});

it("should return student grades by type", () => {
  const listInput = [{ id: 1 }, { id: 2 }];
  const idGradeInput = 2;

  const expected = { id: 2 };

  const actual = getStudentGradesByType(listInput, idGradeInput);

  expect(actual).toEqual(expected);
});
