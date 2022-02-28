const router = require('express').Router();
const Comment = require('./comment');
const commentRoutes = require('./comment-routes');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/comment', commentRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;