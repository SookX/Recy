const sucFunc = (code, res, data) => {
    res.status(code).json({
        message: "Success",
        data: data
    })
}

module.exports = sucFunc;