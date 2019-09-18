downgradeInput.submitButton.addEventListener('click', () => {
    const { platformPrice, newPlatformPrice, daysinMonth, newPlatformDays, allInputs } = downgradeInput
    dataManager.addInput(Number(platformPrice.value), Number(newPlatformPrice.value), Number(daysinMonth.value), Number(newPlatformDays.value))
    showResults(downgradeOutput, 'downgrade');
    clearInputs(allInputs);
})



cancelInput.submitButton.addEventListener('click', () => {
    const {daysinMonth, newPlatformPrice, newPlatformDays, allInputs} = cancelInput
    dataManager.addInput(0,Number(newPlatformPrice.value), Number(daysinMonth.value), Number(newPlatformDays.value))
    showResults(cancelOutput, 'cancellation');
    clearInputs(allInputs);
})


