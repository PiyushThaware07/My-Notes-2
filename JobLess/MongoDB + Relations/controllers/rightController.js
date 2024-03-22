const rightModel = require("../db/model/rightModel");

module.exports = {
  create: async function (request, response) {
    const right = await rightModel.create({
      staff_id: request.body.staff_id,
      right: request.body.right,
    });

    const savedRight = await right.save();
    return response.send(savedRight);
  },

  staffByRight: async function (request, response) {
    console.log(request.body);
    // const data = await rightModel.find({ _id: request.body.right_id }).populate('staff_id');
    const data = await rightModel.find({ _id: request.body.right_id }).populate({
      path:'staff_id',
      match : {name:"Sandip"}
    });
    console.log(data);
    return response.send(data);
  },
};
