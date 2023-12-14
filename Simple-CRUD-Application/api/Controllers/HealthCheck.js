const  healthCheck = (req,res) =>{
    res.status(200).send('Server is UP and ready to Serve')
}

module.exports = healthCheck