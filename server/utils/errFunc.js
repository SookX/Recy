const errFunc = (res, err) => {
    res.status(404).json({
        message: "Failed",
        data: err
    })
}

module.exports = errFunc;