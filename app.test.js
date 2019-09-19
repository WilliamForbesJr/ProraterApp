const dataManager = require('./app.js')

//input test case
const inputTest = {
    platformPrice: 1500,
    newPlatformPrice: 700,
    daysInMonth: 30,
    newPlatformDays: 10,
    oldPlatformDays: 20,
}

//expected output key
const output = {
    platformPrice: 1500,
    newDailyRate: 23,
    oldDailyRate: 50,
    oldDailyTotal: 1000,
    newDailyTotal: 233
}

//individual function testing
test('adding inputs', () => {
    expect(dataManager.addInput(1500, 700,30,10)).toMatchObject(inputTest)
})

test('calculating daily rate', () => {
    expect(dataManager.calculateDailyRate(700,30)).toBeCloseTo(23.33)
})

test('calculating daily rate', () => {
    expect(dataManager.calculateTotals(20, 30)).toBe(600)
})

test('calculating credit', () => {
    expect(dataManager.calculateCredit(1500, 800, 300)).toBe(400)
})

test('calculating downgrade', () => {
    expect(dataManager.calculateDowngrade(1500, 700, 300, 20)).toMatchObject(output)
})