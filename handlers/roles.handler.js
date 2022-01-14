const { Role } = require('../models');

const createRole = async (req, res) => {
  const { name } = req.body;
  const role = await Role.create({
    name
  });

  return res.json(role);
}

const updateRole = async (req, res) => {

  const updateSuccess = await Role.update({
    ...req.body
  }, {
    where: {
      id: req.params.id
    }
  });

  if(updateSuccess) {

    const role = await Role.findByPk(req.params.id);
    return res.json(role);

  } else {
    res
    .status(500)
    .json({
      status: 500,
      message: 'Server error',
    });
  }

}

const deleteRole = async (req, res) => {

  const deleteSuccess = await Role.destroy({
    where: {
      id: req.params.id
    }
  });

  if(deleteSuccess) {

    return res.status(204).json();

  } else {
    res
    .status(500)
    .json({
      status: 500,
      message: 'Server error',
    });
  }

}

const getOneRole = async (req, res) => {
  const role = await Role.findByPk(req.params.id);

  if(!role) {
    return res.status(404).json({
      status: 404,
      message: 'Resource not found',
    })
  }

  return res.json(Role);
}

const getManyRoles = async (req, res) => {
  const roles = await Role.findAll();
  return res.json(roles);
}

module.exports = {
  createRole,
  updateRole,
  deleteRole,
  getOneRole,
  getManyRoles,
}
