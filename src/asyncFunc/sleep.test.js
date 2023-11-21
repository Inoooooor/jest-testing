const sleep = require("./sleep")

describe("asyncSleep", () => {
  test("Корректное значение", async () => {
    const sum = await sleep(() => 5 + 5, 3000)
    expect(sum).toBe(10)
  })
})
