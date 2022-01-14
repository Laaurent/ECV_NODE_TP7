const { Comment } = require('../models');

const createComment = async (req, res) => {
  const { content, date, author_id, post_id } = req.body;
  const comment = await Comment.create({
    content,
    date,
    postId: post_id,
    authorId: author_id,
  });

  return res.json(comment);
}

const updateComment = async (req, res) => {

  const updateSuccess = await Comment.update({
    ...req.body
  }, {
    where: {
      id: req.params.id
    }
  });

  if(updateSuccess) {

    const comment = await Comment.findByPk(req.params.id);
    return res.json(comment);

  } else {
    res
    .status(500)
    .json({
      status: 500,
      message: 'Server error',
    });
  }

}

const deleteComment = async (req, res) => {

  const deleteSuccess = await Comment.destroy({
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

const getOneComment = async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);

  if(!comment) {
    return res.status(404).json({
      status: 404,
      message: 'Resource not found',
    })
  }

  return res.json(Comment);
}

const getManyComments = async (req, res) => {
  const comments = await Comment.findAll();
  return res.json(comments);
}

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  getOneComment,
  getManyComments,
}
