
const studentModal = require('../DataBase/StudentModal')

const register = async (req, res) => {
    console.log(JSON.stringify(req.body))
    try {
        const result = await new studentModal(req.body).save()
        console.log("Result is ", result)
        res.status(201).json({ data: result })
    }
    catch (e) {
        res.status(202).json({ error: e.message })
    }
}

module.exports = register







