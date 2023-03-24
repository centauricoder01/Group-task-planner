const { AuthModel } = require("../Models/Auth");

const LoginUser = async (req, res) => {
  const { email, name, org } = req.body;
  let getbyemail = await AuthModel.findOne({ email });
  if (getbyemail) {
    return res.send({ user: getbyemail, message: "Successful" });
  }

  const newUser = new AuthModel({
    email,
    name,
    org,
  });

  let ReturnedUser = await newUser.save();

  res.send({ user: ReturnedUser, message: "Successful" });
};

module.exports = { LoginUser };
