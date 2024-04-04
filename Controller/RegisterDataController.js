const fs = require("fs");
const bcrypt = require("bcrypt");
const RegisterData = JSON.parse(fs.readFileSync("RegisterData.json"));

// @desc Add registration data
// @route POST /api/PatientData
// @access private
const AddRegistrationData = (req, res) => {
  let patientId;

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
