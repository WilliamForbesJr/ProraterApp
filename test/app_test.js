const expect = require('chai').expect;
const dataManager = require('../app.js')

describe('APP', function () {

    //input test case
    const input = {
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

    before(function () {
        data = dataManager.addInput(1500, 700, 30, 10);
    })

    describe('DATA HANDLING', function() {

        it('should add input', function () {
            expect(data).to.deep.equal(input)
        });

        it('should return output Data in downgrade', function () {
            expect(dataManager.calculateDowngrade()).to.deep.equal(output);
        });
    })

    describe('CALCULATIONS', function () {

        it('should calculate daiy rate', function () {
            const dailyRate = dataManager.calculateDailyRate(1500, 30);
            expect(dailyRate).to.equal(50);
        });

        it('should calculate credit', function () {
            const credit = dataManager.calculateCredit(1500, 100, 233);
            expect(credit).to.equal(1167);
        });

        it('should calculate downgrade', function () {
            expect(dataManager.calculateDowngrade()).to.deep.equal(output);
        });

        it('should calculate cancellation', function() {
            expect(dataManager.calculateCancellation()).to.equal(233);
        });
    })


})