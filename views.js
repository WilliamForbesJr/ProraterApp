const platformPriceEl = document.querySelector('#oldPlatformPrice')
const newPlatformPriceEl = document.querySelector('#newPlatformPrice')
const daysinMonthEl = document.querySelector('#daysInMonth')
const newPlatformDaysEl = document.querySelector('#newPlatformDays')
const submitButton = document.querySelector('#submit')
const resultsEl = document.querySelector('#resultsEl')

const creditAmountEl = document.querySelector('#creditAmount')
const oldPlatformTotalEl = document.querySelector('#oldPlatformTotal')
const newPlatformTotalEl = document.querySelector('#newPlatformTotal')

submitButton.addEventListener('click', () => {
    dataManager.addInput(Number(platformPriceEl.value), Number(newPlatformPriceEl.value), Number(daysinMonthEl.value), Number(newPlatformDaysEl.value))
    showResults()
    clearInputs()
})

const clearInputs = () => {
    platformPriceEl.value = ''
    newPlatformPriceEl.value = ''
    daysinMonthEl.value = ''
    newPlatformDaysEl.value = ''
}

const showResults = () => {
    const results = dataManager.calculateDowngrade()

    creditAmountEl.textContent= `Credit Amount: $${results.credit}`
    oldPlatformTotalEl.textContent = `Days On Old Platform Total: $${ results.oldDailyTotal }`
    newPlatformTotalEl.textContent = `Days On New Platform Total: $${results.newDailyTotal}`
}