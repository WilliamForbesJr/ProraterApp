
//separated input and output objects for cleaner reuse in DOM functions
const downgradeInput = {
    platformPrice: document.querySelector('#downgrade-oldPlatformPrice'),
    newPlatformPrice: document.querySelector('#downgrade-newPlatformPrice'),
    daysinMonth: document.querySelector('#downgrade-daysInMonth'),
    newPlatformDays: document.querySelector('#downgrade-newPlatformDays'),
    submitButton: document.querySelector('#downgrade-submit'),

    allInputs: document.querySelectorAll('.downgrade-input')
}

const downgradeOutput = {
    results: document.querySelector('#downgrade-resultsEl'),
    creditAmount: document.querySelector('#downgrade-creditAmount'),
}

const cancelInput = {
    newPlatformPrice: document.querySelector('#cancel-platformPrice'),
    newPlatformDays: document.querySelector('#cancel-oldPlatformDays'),
    daysinMonth: document.querySelector('#cancel-daysInMonth'),
    submitButton: document.querySelector('#cancel-submit'),

    allInputs: document.querySelectorAll('cancel-input')
}

const cancelOutput = {
    results: document.querySelector('#cancel-resultsEl'),
    creditAmount: document.querySelector('#cancel-creditAmount'),
}

//need to fix function as arguement doesn't seem to actually do anything.
// When forEach is applied for object's "querySelectorALl" properties in console, it works.
    //likely an issue with arguement when calling the function.
const clearInputs = (...inputs) => {
    inputs.forEach((item) => {
        item.value = '';
    })
}

const showResults = (output, type) => {

        if (type === 'downgrade') {

            const results = dataManager.calculateDowngrade()
            const credit = dataManager.calculateCredit(results.platformPrice, results.oldDailyTotal, results.newDailyTotal)
            //placeholder error handling is NaN isn't showing in DOM when no input is applied
            !isNaN(credit) ? output.creditAmount.textContent = `Credit: $${credit}` : console.log(credit);
        }
        if (type === 'cancellation') {
            const results = dataManager.calculateCancellation()
            !isNaN(results) ?output.creditAmount.textContent = `Credit: $${results}` : console.log(results)
        }

        output.creditAmount.classList.add('resultOn')

    //added conditional to reuse function between downgrade and cancellation forms

}





