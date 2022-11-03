module.exports = function(err, reg, res, next){
    // Error handling
    console.log( `error ${err.message}`) // log the error
    const status = err.status || 500
    // send back an easily understandable error message to the caller
    res.status(status).json({ succeed: false , message: err.message })

}
