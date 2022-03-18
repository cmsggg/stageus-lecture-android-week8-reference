const router = require('express').Router();
const dbControl = require("../moudle/dbControl")

router.post('/', async (req, res) => {

    const idValue = req.body.id
    const pwValue = req.body.pw
    const nameValue = req.body.name
    const contactValue = req.body.contact

    if (idValue == "" || pwValue == "") {
        console.log("Error Log: ", "EmptyValueError")
        res.send({
            "message": "EmptyValueError",
            "success": false,
            "data": ""
        })
    } 

    if (idValue.length > 10 || pwValue.length > 10 || nameValue.length > 10 || contactValue.length > 11) {
        console.log("Error Log: ", "DataTooLongError")
        res.send({
            "message": "DataTooLongError",
            "success": false,
            "data": ""
        })
    }

    const result = await dbControl(
        "INSERT INTO android.account(id, pw, name, contact) VALUES($1, $2, $3, $4)",
        [idValue, pwValue, nameValue, contactValue]
    )
    res.send(result)
})

router.get('/login', async (req, res) => {

    const idValue = req.query.id
    const pwValue = req.query.pw

    if (idValue == "" || pwValue == "") {
        console.log("Error Log: ", "EmptyValueError")
        res.send({
            "message": "EmptyValueError",
            "success": false,
            "data": ""
        })
    }

    const result = await dbControl(
        "SELECT * FROM android.account WHERE id=$1 and pw=$2",
        [idValue, pwValue]
    )

    if (result.data.length == 0) {
        result.success = false
    } else {
        result.success = true
    }
    res.send(result)
})

module.exports = router;