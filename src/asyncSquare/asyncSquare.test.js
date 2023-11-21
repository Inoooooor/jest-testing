const square = require("./asyncSquare")

describe("square", () => {
  let mockValue

  // Перед каждым тестом
  beforeEach(() => console.log("ДОБАВИЛИ В БД"))

  // Один раз перед всеми тестами в дескрайбе
  beforeAll(() => console.log("All"))

  test("Корректное значение", () => {
    expect(square(2)).toBe(4)
    expect(square(2)).toBeLessThan(5)
    expect(square(2)).toBeGreaterThan(3)
    expect(square(2)).not.toBeUndefined()
  })

  test("Корректное значение", () => {
    const spyMathPow = jest.spyOn(Math, "pow")
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })

  test("Корректное значение", () => {
    const spyMathPow = jest.spyOn(Math, "pow")
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })

  afterEach(() => {
    console.log("УБРАЛИ С БД")
    jest.clearAllMocks()
  })
})
