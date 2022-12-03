const Students = require('./../../Models/student');

module.exports = async (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    const data = await Students.create({ name , age});
  
    res.send({
      data,
    });
  };