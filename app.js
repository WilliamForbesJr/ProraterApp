const dataManager = (function (){

    let inputData = {}
    outputData = {}

    return {

        addInput: (platformPrice, newPlatformPrice, daysInMonth, newPlatformDays) => {
            inputData = {
                platformPrice: platformPrice,
                newPlatformPrice: newPlatformPrice,
                daysInMonth: daysInMonth,
                newPlatformDays: newPlatformDays,
                oldPlatformDays: daysInMonth - newPlatformDays,
            }
            return inputData;
        },

        mathFunctions: function() {
            console.log(inputData)
            const oldDailyRate = inputData.platformPrice / inputData.daysInMonth
            const newDailyRate = inputData.newPlatformPrice / inputData.daysInMonth

            const oldDailyTotal = oldDailyRate * inputData.oldPlatformDays
            const newDailyTotal = newDailyRate * inputData.newPlatformDays

            const credit = inputData.platformPrice - (oldDailyTotal + newDailyTotal)

            outputData = {
                credit: Math.round(credit),
                oldDailyTotal: Math.round(oldDailyTotal),
                newDailyTotal:Math.round(newDailyTotal),
                newDailyRate: Math.round(newDailyRate),
                oldDailyRate: Math.round(oldDailyRate)
            }
            return outputData
        }
    }
}())





