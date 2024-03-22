const staffModel = require("../db/model/staffModel");

module.exports = {
  create: async function (request, response) {
    const { name, email } = request.body;
    const staff = await staffModel.create({ name, email });
    return response.send(staff);
  },
};
