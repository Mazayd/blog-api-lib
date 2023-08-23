const UserServices = require("./services/UserServices");
const PostServices = require("./services/PostServices");
const CommentServices = require("./services/CommentServices");

const userServices = new UserServices();
const postServices = new PostServices();
const commentServices = new CommentServices();

async function result() {
  console.log(await postServices.likePost("64db48ca16ab68b3733caffc", "12334"));
}

result();
