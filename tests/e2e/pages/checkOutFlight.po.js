let checkOutButton,
    chooseRandomAllocation;

module.exports = {
    init: () => {
        checkOutButton = element(by.css('section > div.trips-basket.trips-cnt > button'));       
    },
   
    checkOutFlight: () => {

        checkOutButton.click();
        browser.sleep(1000);
    },

    selectSeat: () => {
        chooseRandomAllocation = element(by.css('div.popup-msg__body > div.popup-msg__button-wrapper > button.popup-msg__button.popup-msg__button--cancel'));
        chooseRandomAllocation.click();
        browser.sleep(2000);
    }
}
