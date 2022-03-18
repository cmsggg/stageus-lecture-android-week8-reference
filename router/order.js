const router = require('express').Router();
const dbControl = require("../moudle/dbControl")

router.post('/', async (req, res) => {

    const idValue = req.body.id
    const orderListValue = req.body.order_list
    const totalPriceValue = req.body.total_price

    if (idValue == "" || orderListValue == null || totalPriceValue == null) {
        console.log("Error Log: ", "EmptyValueError")
        res.send({
            "message": "EmptyValueError",
            "success": false,
            "data": []
        })
    }

    if (totalPriceValue <= 0) {
        console.log("Error Log: ", "InvalidPriceError")
        res.send({
            "message": "InvalidPriceError",
            "success": false,
            "data": []
        })
    }

    if (idValue.length > 10) {
        console.log("Error Log: ", "DataTooLongError")
        res.send({
            "message": "DataTooLongError",
            "success": false,
            "data": ""
        })
    }

    const result = await dbControl(
        "INSERT INTO android.order(id, order_list, total_price) values($1, $2, $3)",
        [idValue, orderListValue, totalPriceValue]
    )

    res.send(result)
})

router.get('/', async (req, res) => {

    const idValue = req.query.id

    if (idValue == "") {
        console.log("Error Log: ", "EmptyValueError")
        res.send({
            "message": "EmptyValueError",
            "success": false,
            "data": []
        })
    }

    const result = await dbControl(
        "SELECT * FROM android.order WHERE id = $1",
        [idValue]
    )

    res.send(result)
})

module.exports = router