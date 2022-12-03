const {Student} = require("../../database/models")

const getStudentsList = async (req, res) => {
  const data = await Student.findAll();
  res.send({
    data,
  });
};

module.exports = getStudentsList;
