const fs = require('fs')

const requestLogger = async (req, res, next) => {
    try {
        const date = new Date().toISOString()
        const data = {
            RequestTime: date,
            Path: req.path,
            Methods: req.method
        }
        await fs.appendFileSync('./Logs/Requests.json', JSON.stringify(data))
    }
    catch (err) {
        console.log(`Fail to Write to the File ${err.message}`)
    }
    next()
}


module.exports = requestLogger