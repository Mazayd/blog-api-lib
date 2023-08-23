const CommentServices = require("./CommentServices");
const PostServices = require("./PostServices");
const UserServices = require("./UserServices");
const store = require("../store");

class ApiIntegrationServices {
  constructor(baseUrl) {
    store.baseUrl = baseUrl;
  }

  getUserServices() {
    return new UserServices();
  }

  getPostServices() {
    return new PostServices();
  }

  getCommentServices() {
    return new CommentServices();
  }
}

module.exports = {
  ApiIntegrationServices,
};
