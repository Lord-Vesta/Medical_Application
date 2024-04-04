const express = require('express');
const { AddRegistrationData, DeleteRegistrationData } = require('../Controller/RegisterDataController');
const router = express.Router()

router.post('/', AddRegistrationData)
router.delete('/:id', DeleteRegistrationData)

module.exports = router;