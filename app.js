const dataManager = (function (){

    //instantize input and output data with IIFE to ensure it doesn't return undefined
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

        calculateDailyRate: (price, daysInMonth) => {
            return price / daysInMonth
        },

        calculateTotals: (dailyRate, daysOnPlatform) => {
            dailyRate * daysOnPlatform
        },

        calculateDowngrade: function() {

            //destructuring inputData for clarity
            const { platformPrice, newPlatformPrice, daysInMonth, newPlatformDays, oldPlatformDays } = inputData
    
            //calculate daily rates for each platform type. Storing in new variable to recycle for second calculator
            // const oldDailyRate = calculateDailyRate(platformPrice, daysInMonth)
            // const newDailyRate = calculateDailyRate(newPlatformPrice, daysInMonth)

            // const oldDailyTotal = oldDailyRate * oldPlatformDays
            // const newDailyTotal = newDailyRate * newPlatformDays

            outputData = {
                // credit: Math.round(platformPrice - (oldDailyTotal + newDailyTotal)),
                newDailyRate: Math.round(this.calculateDailyRate(newPlatformPrice, daysInMonth)),
                oldDailyRate: Math.round(this.calculateDailyRate(platformPrice, daysInMonth)),
                // oldDailyTotal: Math.round(oldDailyTotal),
                // newDailyTotal: Math.round(newDailyTotal),
            }
            return outputData
        }
    }
}())





