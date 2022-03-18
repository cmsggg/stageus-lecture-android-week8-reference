const router = require('express').Router();
const dbControl = require("../moudle/dbControl")

router.get('/', async (req, res) => {

    const langValue = req.query.lang

    if (langValue == "") {
        console.log("Error Log: ", "EmptyValueError")
        res.send({
            "message": "EmptyValueError",
            "success": false,
            "data": []
        })
    }

    const result = await dbControl(
        "SELECT * FROM android.category WHERE lang=$1",
        [langValue]
    )
    res.send(result)
})

router.get('/menu', async (req, res) => {

    const categoryNameValue = req.query.category_name
    const langValue = req.query.lang
    
    if (categoryNameValue == "" || langValue == "") {
        console.log("Error Log: ", "EmptyValueError")
        res.send({
            "message": "EmptyValueError",
            "success": false,
            "data": []
        })
    }

    const result = await dbControl(
        "SELECT menu_name, menu_price, menu_image FROM android.menu WHERE lang=$1 and category_name=$2",
        [langValue, categoryNameValue]
    )
    res.send(result)
})

module.exports = router