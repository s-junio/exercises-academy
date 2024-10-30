import { describe, it, expect } from "vitest";
import {
  addTwoNumbers,
  checkUserAccess,
  coerceAmount,
  fetchLukeSkywalker,
  returnLastElement,
  returnLastObjElement,
  returnWhatIPassIn,
} from ".";

describe("Exercises", () => {
  it("Should add the two numbers together", () => {
    expect(addTwoNumbers(2, 4)).toEqual(6);
    expect(addTwoNumbers(10, 10)).toEqual(20);
  });

  it("Checks if a user without a given permission returns true", () => {
    const user = {
      name: "Regular user",
      email: "regular@user.com",
      permissions: ["read:user"],
    };

    expect(checkUserAccess(user, "delete:user")).toBe(false);
  });

  it("Should return the amount when passed an object", () => {
    expect(coerceAmount({ amount: 20 })).toEqual(20);
  });

  it("Should return the amount when passed a number", () => {
    expect(coerceAmount(20)).toEqual(20);
  });

  it("Expects the fetched person name to be Luke Skywalker", async () => {
    const result = await fetchLukeSkywalker();
    expect(result).toBe("Luke Skywalker");
  });

  it("Expects to return the argument without any changes", () => {
    const testObj = { test: 123 };
    const one = returnWhatIPassIn(1);
    const matt = returnWhatIPassIn("matt");
    const obj = returnWhatIPassIn(testObj);

    expect(one).toBe(1);
    expect(matt).toBe("matt");
    expect(obj).toBe(testObj);
  });

  it("Expects to return the last element of the array", () => {
    const testArray = [1, 2, 3];
    const result = returnLastElement(testArray);
    expect().toBe(3);
  });

  it("Expects to return the last elemnt of the object array if the prop exists", () => {
    const testUndefined = [
      { shouldReturn: true },
      { shouldReturn: true },
      { shouldReturn: false },
    ];
    const testReturned = [
      { shouldReturn: true },
      { shouldReturn: true },
      { shouldReturn: true },
    ];

    const resultUndefined = returnLastObjElement(testUndefined);
    const resultReturned = returnLastObjElement(testReturned);
    expect(resultUndefined).toBeUndefined();
    expect(resultReturned).toBe(testReturned[2]);
  });
});
