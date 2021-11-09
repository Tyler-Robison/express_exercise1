const express = require('express');
const ExpressError = require('./expressError')
const { mean, median, mode } = require("./functions")


const app = express();

app.get('/mean', (req, res, next) => {


    try {
        // If blank, req.query.nums is undef
        const numsStr = req.query.nums;
        if (!numsStr) throw new ExpressError(`Must enter nums`, 400)
        const numArr = numsStr.split(',')
        for (num of numArr) {
            if (isNaN(parseInt(num))) throw new ExpressError(`${num} is not a number`, 400)
        }

        const meanValue = mean(numArr)

        const respObj = {
            response: {
                operation: 'mean',
                value: meanValue
            }
        }

        return res.send(respObj)
    } catch (err) {
        next(err)
    }
})


app.get('/median', (req, res, next) => {

    try {
        const numsStr = req.query.nums;
        if (!numsStr) throw new ExpressError(`Must enter nums`, 400)
        const numArr = numsStr.split(',')
        for (num of numArr) {
            if (isNaN(parseInt(num))) throw new ExpressError(`${num} is not a number`, 400)
        }
        const medianVal = median(numArr)

        const respObj = {
            response: {
                operation: 'median',
                value: medianVal
            }
        }

        return res.send(respObj)
    } catch (err) {
        next(err)
    }
})


app.get('/mode', (req, res, next) => {

    try {
        const numsStr = req.query.nums;
        if (!numsStr) throw new ExpressError(`Must enter nums`, 400)
        const numArr = numsStr.split(',')
        for (num of numArr) {
            if (isNaN(parseInt(num))) throw new ExpressError(`${num} is not a number`, 400)
        }

        const modeValues = mode(numArr)

        const respObj = {
            response: {
                operation: 'mode',
                value: modeValues
            }
        }

        return res.send(respObj)
    } catch (err) {
        next(err)
    }
})

app.get('/all', (req, res, next) => {
    try {
        const numsStr = req.query.nums;
        if (!numsStr) throw new ExpressError(`Must enter nums`, 400)
        const numArr = numsStr.split(',')
        for (num of numArr) {
            if (isNaN(parseInt(num))) throw new ExpressError(`${num} is not a number`, 400)
        }

        const meanValue = mean(numArr)
        const medianVal = median(numArr)
        const modeValues = mode(numArr)

        const respObj = {
            response: {
                operation: 'all',
                mean: meanValue,
                median: medianVal,
                mode: modeValues
            }
        }

        return res.send(respObj)

    } catch (err) {
        next(err)
    }
})

// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
  })

app.use((err, req, res, next) => { //Note the 4 parameters!
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});

