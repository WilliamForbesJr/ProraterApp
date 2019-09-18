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
            return dailyRate * daysOnPlatform
        },

        calculateCredit: (platformPrice, oldDailyTotal, newDailyTotal) => {
            return platformPrice - (oldDailyTotal + newDailyTotal)
        },

        calculateDowngrade: function() {

            //destructuring inputData for clarity
            const { platformPrice, newPlatformPrice, daysInMonth, newPlatformDays, oldPlatformDays } = inputData
            
            let outputData = {
                //pushing platformPrice into obj to calculate credit after obj is initialized
                platformPrice: platformPrice,
                newDailyRate: Math.round(this.calculateDailyRate(newPlatformPrice, daysInMonth)),
                oldDailyRate: Math.round(this.calculateDailyRate(platformPrice, daysInMonth)),
                oldDailyTotal: Math.round(this.calculateTotals(oldPlatformDays, this.calculateDailyRate(platformPrice, daysInMonth))),
                newDailyTotal: Math.round(this.calculateTotals(newPlatformDays, this.calculateDailyRate(newPlatformPrice, daysInMonth))),
            }

            return outputData
        },

        calculateCancellation: function() {
            
            return Math.round(this.calculateTotals(inputData.newPlatformDays, this.calculateDailyRate(inputData.newPlatformPrice, inputData.daysInMonth)))

            
        }
    }
})();





