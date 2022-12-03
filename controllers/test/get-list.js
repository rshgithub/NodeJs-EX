
const {Student} = require("../../database/models")
const getList = async (req, res) => {
  const data = await Student.findAll()
  res.send({
    data,
  });
}

module.exports = getList

