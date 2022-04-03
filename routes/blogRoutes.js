const express = require('express');
const router = express.Router();
const { getBlogs, createBlog, getBlog, updateBlog, deleteBlog, uploadImage,  checkReq, uploadToCloud } = require('../controllers/blogControllers');

router
  .route("/")
  .get(getBlogs)
  .post(uploadImage, uploadToCloud,createBlog);


router
  .route('/:id')
  .get(getBlog)
  .patch(updateBlog)
  .delete(deleteBlog)


module.exports = router;