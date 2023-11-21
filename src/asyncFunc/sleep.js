const sleep = (callback, ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback())
    }, ms)
  })

module.exports = sleep
