
const getStudentByName = async (req, res) => {
    const data = await Students.findOne({
      where: {
        name: req.params.name,
      },
    });
  
    res.send({
      data,
    });
  
  };
  
  module.exports = getStudentByName