
const getList =  (req, res) => {
  const data = ["test 1", "test 2"];
  res.send({
    data,
  });
}

module.exports = getList

