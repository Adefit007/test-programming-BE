const { Customer } = require("../../models");

exports.AddCustomer = async (req, res) => {
  try {
    const newCust = await Customer.create({
      nama: req.body.nama,
      contact: req.body.contact,
      email: req.body.email,
      alamat: req.body.alamat,
      discount: req.body.discount,
      tipeDiscount: req.body.tipediscount,
      ktp: req.body.ktp,
    });
    res.status(200).send({
      status: "success",
      data: {
        nama: newCust.nama,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      customer,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "server error",
    });
  }
};
