let departureTime,
    standardFlight,
    continueButton;

module.exports = {
    init: () => {
        
        departureTime = element(by.css('div > div.flight-header__min-price.hide-mobile'));
        standardFlight = element(by.className('flights-table-fares__fare fare-select standard'));
        continueButton = element(by.id('continue'));
    },
    selectDepartureTime: () => {

            var EC = protractor.ExpectedConditions;
            browser.wait(EC.presenceOf(departureTime), 5000);

            departureTime.click();
    },
    selectFlightStandard: () => {
        standardFlight.click();
    },
    clickContinueButton: () => {
        continueButton.click();
    }

}