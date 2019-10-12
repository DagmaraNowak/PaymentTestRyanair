let oneWayTicket,
    cookiePopUpCloseButton,
    fromTextBox,
    toTextBox,
    continueButton,
    flyOutCalendarBox;

module.exports = {
  init: () => {
    cookiePopUpCloseButton = element(by.className('cookie-popup__close'));
    flyOutDateOnCalendar = element(by.css('li[data-id="24-10-2019"]'));
    oneWayTicket = element(by.id('flight-search-type-option-one-way'));
    fromTextBox = element(by.css('div > form > div.col-flight-search-left > div > div > div.col-departure-airport > div.route-selector-departure > div.field-type > div > div.disabled-wrap > input'));
    toTextBox = element(by.css('div > form > div.col-flight-search-left > div.row-airports > div > div.col-destination-airport > div.route-selector-destination > div.field-type > div > div.disabled-wrap > input'));
    continueButton = element(by.css('#search-container > div:nth-child(1) > div:nth-child(1) > div > form > div.col-flight-search-right > button:nth-child(1)'));
    flyOutCalendarBox = element(by.className('ellipsis focused'));
    letsGoButton = element(by.css('div > form > div.col-flight-search-right > button:nth-child(2)'));
  },
  get: (string) => {
    console.log(browser.getSession().value_.id_);
    return browser.get(string);
  },
  setOneWayTicket: () => {
    return oneWayTicket.click();
  },
  closeCookiePopUp: () => {
    return cookiePopUpCloseButton.click();
  },
  setDepartureAirport: (departurePlace) => {
    fromTextBox.clear();
    fromTextBox.sendKeys(departurePlace);
  },
  setDestinationAirport: (destinationPlace) => {
    toTextBox.clear();
    toTextBox.sendKeys(destinationPlace);
  },
  clickContinueButton: () => {
    continueButton.click();
  },
  handleCalendar: () => {
    flyOutCalendarBox.click();
    flyOutDateOnCalendar.click();
  },
  letsGoClick: () => {
    letsGoButton.click();
  }
}