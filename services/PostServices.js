const axios = require("axios");
const store = require("../store");

class PostServices {
  async newPost(telegram_id, body) {
    try {
      const { data } = await axios.post(
        `${store.baseUrl}/post/${telegram_id}`,
        body
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getPostById(id) {
    try {
      const { data } = await axios.get(`${store.baseUrl}/post/${id}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getPostsByTags(body) {
    try {
      console.log(body);
      const { data } = await axios({
        method: "get",
        url: `${store.baseUrl}/post/`,
        data: body,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getPostByUserId(id) {
    try {
      const { data } = await axios.get(`${store.baseUrl}/post/user/${id}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async updatePost(post_id, telegram_id, body) {
    try {
      const { data } = await axios.patch(
        `${store.baseUrl}/post/${post_id}/${telegram_id}`,
        body
      );
      return data;
    } catch (err) {
      console.error();
    }
  }

  async deletePost(post_id, telegram_id) {
    try {
      const { data } = await axios.delete(
        `${store.baseUrl}/post/${post_id}/${telegram_id}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async likePost(post_id, telegram_id) {
    try {
      const { data } = await axios.post(
        `${store.baseUrl}/likes/post/${post_id}/${telegram_id}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = PostServices;
