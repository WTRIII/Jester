const db = require('../config/connection');
const { Post, Task } = require('../models');
// const postSeeds = require('./PostSeeds.json');
const taskSeeds = require('./taskSeeds.json');

db.once('open', async () => {
  try {
    await Task.deleteMany({});
    await Task.create(taskSeeds);
    // await Post.deleteMany({});

    // await Post.create(postSeeds);

    // for (let i = 0; i < taskSeeds.length; i++) {
    //   const { _id, taskAuthor } = await Task.create(taskSeeds[i]);
      // const Post = await Post.findOneAndUpdate(
      //   { postname: taskAuthor },
      //   {
      //     $addToSet: {
      //       Tasks: _id,
      //     },
      //   }
      // );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
