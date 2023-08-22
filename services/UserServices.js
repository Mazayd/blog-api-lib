const axios = require("axios");
const store = require("../store");

class UserServices {
  async getUserByNickName(nickName) {
    try {
      const { data } = await axios.get(`${store.baseUrl}/user/${nickName}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getUsersByName(name) {
    try {
      const { data } = await axios.get(`${store.baseUrl}/user/many/${name}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserByTgId(telegramId) {
    try {
      const { data } = await axios.get(
        `${store.baseUrl}/user/telegram_id/${telegramId}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async createUser(body) {
    try {
      const { data } = await axios.post(`${store.baseUrl}/user/`, body);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateUser(telegram_id, body) {
    try {
      const { data } = await axios.patch(
        `${store.baseUrl}/user/${telegram_id}`,
        body
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteUser(telegram_id) {
    try {
      const { data } = await axios.delete(
        `${store.baseUrl}/user/${telegram_id}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteUsers(body) {
    try {
      const { data } = await axios.delete(`${store.baseUrl}/user/`, body);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = UserServices;
