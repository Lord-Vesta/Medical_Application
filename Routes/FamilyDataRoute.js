const express = require("express");
const router = express.Router();
const {getFamilyData,AddFamilyData,EditFamilyData} = require("../Controller/FamilyDataController");

router.get("/",getFamilyData);
router.post("/",AddFamilyData);
router.put("/:id",EditFamilyData);


module.exports = router;

// yash