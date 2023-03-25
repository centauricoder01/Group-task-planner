const { AuthModel } = require("../Models/Auth");

const SignupUser = async (req, res) => {
  try {
    const { email, name, institute } = req.body;
    let getbyemail = await AuthModel.findOne({ email });
    if (getbyemail) {
      return res.send({ user: getbyemail, message: "Successful" });
    }

    const newUser = new AuthModel({
      email,
      name,
      institute,
    });

    let ReturnedUser = await newUser.save();

    res.send({ user: ReturnedUser, message: "Successful" });
  } catch (error) {
    res.send({ message: "Some Error", error });
  }
};

const AddAvatar = async (req, res) => {
  try {
    const { value, id } = req.body;
    await AuthModel.findByIdAndUpdate(id, { avatar: value });
    let findUser = await AuthModel.findById(id);
    res.send({ message: "Avatar Added", findUser });
  } catch (error) {
    res.send({ message: "Some Error Occured" });
  }
};

const LoginUser = async (req, res) => {
  try {
    let { email } = req.body;
    console.log(email);
    let user = await AuthModel.findOne({ email });
    if (!user) {
      return res.send({ message: "User Not found" });
    }
    res.send({ message: "User Find", findUser: user });
  } catch (error) {
    res.send({ message: "Some Error Occcured", error });
  }
};

const GetOrgUser = async (req, res) => {
  try {
    const { org } = req.body;
    let data = await AuthModel.find({ institute: org });
    res.send({ message: "User Find", user: data });
  } catch (error) {
    res.send({ message: "Some Error", error });
  }
};

module.exports = { SignupUser, AddAvatar, LoginUser, GetOrgUser };
