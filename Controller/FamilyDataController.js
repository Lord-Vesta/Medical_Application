const { json } = require("express");
const fs = require("fs");

let FamilyData = JSON.parse(fs.readFileSync("FamilyData.json"));

// @desc Gets all family data
// @route GET /api/FamilyData
// @access private
const getFamilyData = (req, res) => {
  res.status(200).json({
    status: "fetched",
    data: FamilyData,
  });
};

// @desc Add family data
// @route POST /api/FamilyData
// @access private
const AddFamilyData = (req, res) => {
  FamilyData.push(req.body);
  fs.writeFileSync("FamilyData.json", JSON.stringify(FamilyData));
  res.status(201);
  res.json({
    status: "created",
    data: req.body,
  });
};

// @desc Edit family data
// @route PUT /api/FamilyData
// @access private
const EditFamilyData = (req, res) => {
  let existingData = FamilyData;
  let patientId = parseInt(req.params.id);

  existingData[patientId-1] = req.body;
  fs.writeFile("FamilyData.json", JSON.stringify(existingData), () => {
    res.status(200).json({
        status:"editted",
        data : req.body
    })
  });
};

module.exports = { getFamilyData, AddFamilyData, EditFamilyData };
