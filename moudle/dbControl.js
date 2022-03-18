const pg = require('pg');

// PostgreSQL Database Account Configuration
const dbUser = {
    user: "ubuntu",
    host: "localhost",
    database: "stageus",
    password: "1234",
    prot: 5432
}

const dbControl = async (sql, values) => {

            console.log("\n=== Request Data ===")
            console.log("SQL : ", sql)
            console.log("Values : ", values)

    const result = {
        "message": "",
        "success": false,
        "data": null
    }

    const client = new pg.Client(dbUser)

    try {
        await client.connect()
    } catch(err) {
        result.message = "DBServerConnectionError"
        console.log("Error Log: ", "DBServerConnectionError: ");

        return result
    }

    try {
        const res = await client.query(sql, values);
        result.success = true
        result.data = res.rows
        result.message = "RequestComplete"
        console.log("Success Log: ", "RequestComplete")

                console.log("=== Success Data ===")
                console.log(res.rows)

    } catch(err) {
        result.message = "SQLSyntaxError"
        console.log("Error Log: ", "SQLSyntaxError: ");
    }
    client.end()

    return result
}

module.exports = dbControl