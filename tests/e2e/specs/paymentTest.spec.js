let searchFlightPage = require('../pages/searchFlight.po.js');
let datePickerPage = require('../pages/datePicker.po.js');
let flightExtrasPage = require('../pages/flightExtras.po.js');
let checkOutFlightPage = require('../pages/checkOutFlight.po.js');
let logInToAccountPage = require('../pages/logInToAccount.po.js');
let bookingDetailsPage = require('../pages/bookingDetails.po.js');

describe('ryanAir Payment tests', function() {
  var originalTimeout;

  beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should validate wrong card number and popup an error', function() {
    testLogInToAccountPage();
    testSearchFlightPage();
    testDatePickerPage();
    testFlightExtrasPage();
    testCheckOutFlightPage();
    testBookingDetailsPage();
    var result = bookingDetailsPage.declinedPayment();

    expect(result).toBe(true);
  });
});

function testSearchFlightPage() {
  searchFlightPage.init();
  searchFlightPage.closeCookiePopUp();
  searchFlightPage.setOneWayTicket();
  searchFlightPage.setDepartureAirport("Wroclaw");
  searchFlightPage.setDestinationAirport("Alicante");
  searchFlightPage.clickContinueButton();
  searchFlightPage.handleCalendar();
  searchFlightPage.letsGoClick();
}


function testDatePickerPage() {
  datePickerPage.init();
  datePickerPage.selectDepartureTime();
  datePickerPage.selectFlightStandard();
  datePickerPage.clickContinueButton();
 
  }

function testFlightExtrasPage() {
  flightExtrasPage.init();
  flightExtrasPage.selectSeat();
  flightExtrasPage.selectBaggage();
  flightExtrasPage.clickContinueButton();
}


function testCheckOutFlightPage() {
  checkOutFlightPage.init();
  checkOutFlightPage.checkOutFlight();
  checkOutFlightPage.selectSeat();
}

function testLogInToAccountPage() {
  logInToAccountPage.init();
  searchFlightPage.get("https://www.ryanair.com/ie/en/");
  logInToAccountPage.LogInToAccount();
  logInToAccountPage.enterEmail('testy.dn@wp.pl');
  logInToAccountPage.enterPassword('TestRyanair1234');
  logInToAccountPage.logInToRyanair();

} 

function testBookingDetailsPage() {
  bookingDetailsPage.init();
  bookingDetailsPage.selectTitle();
  bookingDetailsPage.includeName('Jan');
  bookingDetailsPage.includeSurname('Kowalski');
  bookingDetailsPage.selectTripProtect();
  bookingDetailsPage.selectPhoneNumberCountry();
  bookingDetailsPage.enterPhoneNumber('500100100');
  bookingDetailsPage.enterCardNumber('5105105105105100');
  bookingDetailsPage.selectExpiryDate();
  bookingDetailsPage.enterSecurityCode('666');
  bookingDetailsPage.enterCardholdersName('Jan Kowalski');
  bookingDetailsPage.selectPLNCurrency();
  bookingDetailsPage.enterBillingAddress1('Traugutta 4');
  bookingDetailsPage.enterBillingCity("Warszawa");
  bookingDetailsPage.enterZipCode('00-413');
  bookingDetailsPage.selectBillingCountry();
  bookingDetailsPage.acceptTerms();
  bookingDetailsPage.confirmPayment();
}