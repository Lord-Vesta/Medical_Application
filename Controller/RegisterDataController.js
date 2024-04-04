const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const RegisterData = JSON.parse(fs.readFileSync("RegisterData.json"));

// @desc Add registration data
// @route POST /api/PatientData
// @access private
const AddRegistrationData = async (req, res) => {
  let patientId;
  let { email, password } = req.body;
  const myEncPassword = await bcrypt.hash(password, 10);
  console.log("encrypted");
  console.log(myEncPassword);
  if (RegisterData.length === 0) {
    patientId = 1;
  } else if (RegisterData.length > 0) {
    patientId = RegisterData[RegisterData.length - 1].id + 1;
  }
  let newData = Object.assign({ id: patientId }, req.body);
  RegisterData.push(newData);
  fs.writeFile("RegisterData.json", JSON.stringify(RegisterData), (err) => {
    res.status(201).json({
      status: "created",
      data: newData,
    });
  });

  const token = jwt.sign(
    {email,password},"shhhh",
    {
        expiresIn: "2h"
    }
  );
    console.log("token");
  console.log(token);
};

// @desc Delete registered data
// @route Delete /api/PatientData/:id
// @access private
const DeleteRegistrationData = (req, res) => {
  let patientId = parseInt(req.params.id);
  let data = RegisterData;
  var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
      if (
        arr[i] &&
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };
  const deletedData = removeByAttr(data, "id", patientId);
  fs.writeFile("RegisterData.json", JSON.stringify(deletedData), (err) => {
    res.status(201).json({
      status: deletedData,
    });
  });
  //   res.json(patientId - 1);
  console.log(patientId - 1);
};

module.exports = { AddRegistrationData, DeleteRegistrationData };
