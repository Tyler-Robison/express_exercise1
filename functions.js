function mean(numArr) {
    let total = 0
    for (let i = 0; i < numArr.length; i++) {
        total += parseInt(numArr[i])
    }

    return total / numArr.length
}

function mode(numArr) {
    const countingObj = numArr.reduce((accum, nextValue) => {
        if (!accum[parseInt(nextValue)]) {
            accum[nextValue] = 1;
        }
        else {
            accum[nextValue]++;
        }
        return accum
    }, {})

    let max = 0
    for (const [key, value] of Object.entries(countingObj)) {
        if (value > max) max = value
    }
    const modeArray = []
    for (const [key, value] of Object.entries(countingObj)) {
        if (value === max) modeArray.push(parseInt(key))
    }

    return modeArray
}

// If even array.length, median is mean of middle 2 nums
function median(numArr) {
    let median;

    if (numArr.length % 2 !== 0) {
        const idx = Math.floor((numArr.length) / 2)
        median = parseInt(numArr[idx])
    }

    else {
        const leftIdx = (numArr.length / 2) - 1
        const rightIdx = (numArr.length / 2)
        const leftVal = parseInt(numArr[leftIdx])
        const rightVal = parseInt(numArr[rightIdx])
        median = (rightVal + leftVal) / 2
    }
    return median
}

module.exports = {
    mean, mode, median
}
