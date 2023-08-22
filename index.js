const UserServices = require("./services/UserServices");
const PostServices = require("./services/PostServices");

const userServices = new UserServices();
const postServices = new PostServices();

async function result() {
  console.log(
    await postServices.updatePost("64e4bbfdb53ed1b30dab81a2", "12334", {
      content: "da",
      hashtags: ["magic", "hui"],
    })
  );
}

result();
