downgradeInput.submitButton.addEventListener('click', () => {
    const { platformPrice, newPlatformPrice, daysinMonth, newPlatformDays, allinputs } = downgradeInput
    dataManager.addInput(Number(platformPrice.value), Number(newPlatformPrice.value), Number(daysinMonth.value), Number(newPlatformDays.value))
    showResults(downgradeOutput, 'downgrade');
    clearInputs(allinputs);
})



cancelInput.submitButton.addEventListener('click', () => {
    const {daysinMonth, newPlatformPrice, newPlatformDays} = cancelInput
    dataManager.addInput(0,Number(newPlatformPrice.value), Number(daysinMonth.value), Number(newPlatformDays.value))
    showResults(cancelOutput, 'cancellation');
    // clearInputs(allinputs);
})


