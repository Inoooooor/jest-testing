const validateNumber = require("./validateNumber")

test("Валидация значения", () => {
  expect(validateNumber(50)).toBe(true)
})

describe("validateNumber", () => {
  test("Нормальное значение", () => {
    expect(validateNumber(50)).toBe(true)
  })

  test("Больше нормального", () => {
    expect(validateNumber(101)).toBe(false)
  })

  test("Меньше нормального", () => {
    expect(validateNumber(-1)).toBe(false)
  })

  test("Нижняя граница", () => {
    expect(validateNumber(0)).toBe(false)
  })

  test("Верхняя граница", () => {
    expect(validateNumber(100)).toBe(false)
  })
})
