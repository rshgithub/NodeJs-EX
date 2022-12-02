module.exports = async (req, res) => {
  const name = req.query.name;
  const data = await Students.update(
    {
      name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.send({
    data,
  });
};