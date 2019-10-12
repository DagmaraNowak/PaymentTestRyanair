let randomSeat,
    priorityQueue,
    continueButton;

module.exports = {
    init: () => {
        randomSeat = element(by.css('div > div.footer-message-content > div.footer-message-content__bottom > div.footer-message-content__seats-offer-buttons > div:nth-child(2) > button'));
        priorityQueue = element(by.css('div.priority-boarding-view__journey-list.priority-boarding-view__journey-list--0 > div > priority-cabin-bag-card:nth-child(2)'));
        continueButton = element(by.className('trips-basket trips-cnt'));
    },
   
    selectSeat: () => {
        randomSeat.click();
    },

    selectBaggage: () => {
        priorityQueue.click();
    },

    clickContinueButton: () => {
        continueButton.click();
    }
}
