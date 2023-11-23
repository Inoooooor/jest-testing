const axios = require("axios")
const mapArrToStrings = require("../mapArrToString/mapArrToString")

const getData = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users"
    const response = await axios.get(url)
    const userIds = response.data.map((user) => user.id)

    return mapArrToStrings(userIds)
    // return userIds
  } catch (error) {
    console.error(error)
  }
}

module.exports = getData
