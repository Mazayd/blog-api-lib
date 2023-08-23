const axios = require("axios");
const store = require("../store/index");

class CommentServices {
  async newComment(telegram_id, post_id, body) {
    try {
      const { data } = await axios.post(
        `${store.baseUrl}/comment/${telegram_id}/${post_id}`,
        body
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getComment(post_id) {
    try {
      const { data } = await axios.get(`${store.baseUrl}/comment/${post_id}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateComment(telegram_id, comment_id, body) {
    try {
      const { data } = await axios.patch(
        `${store.baseUrl}/comment/${telegram_id}/${comment_id}`,
        body
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteComment(telegram_id, comment_id) {
    try {
      const { data } = await axios.delete(
        `${store.baseUrl}/comment/${telegram_id}/${comment_id}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async likeComment(comment_id, telegram_id) {
    try {
      const { data } = await axios.post(
        `${store.baseUrl}/likes/comment/${comment_id}/${telegram_id}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = CommentServices;
