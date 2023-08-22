const UserServices = require("./services/UserServices");

const userServices = new UserServices();

async function result() {
  console.log(await userServices.updateUser("12334", { sex: "мужчина" }));
}

result();
