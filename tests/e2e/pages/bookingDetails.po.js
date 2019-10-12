let titleField,
    firstNameField,
    surnameField,
    noIncuranceButton,
    phoneNumberCountryField,
    phoneNumberField,
    cardNumberField,
    expiryMonthField,
    expiryYearField,
    securityCodeField,
    cardholdersNameField,
    address1Field,
    billingCityField,
    billingZipCodeField,
    billingCountryField,
    poland,
    checkbox,
    payNowField,
    selectCurrencyPLN;

module.exports = {
    init: () => {
        titleField = element(by.cssContainingText('option','Mr'));   
        firstNameField = element(by.css("passengers-form > div.body > ng-form > passenger-input-group > div > ng-form > div.row > div.form-field.payment-passenger-first-name > input[id^='firstName']"));
        surnameField = element(by.css("passengers-form > div.body > ng-form > passenger-input-group > div > ng-form > div.row > div.form-field.payment-passenger-last-name > input[id^='lastName']"));
        noIncuranceButton = element(by.css('div > div > div.csi-card__actions-wrapper > div > div.csi-card__btns-wrapper > button.csi-card__btn.csi-card__actions-no'));
        phoneNumberCountryField = element(by.css('contact-details-form > div > div.details-holder.clearfix > div.form-field.full-width-form > phone-number > div.phone-number-country'));
        polandPhoneNumberCountry = element(by.model('ctrl.selectedCountry')).$('[label="Poland"]').click();
        phoneNumberField = element(by.css('contact-details-form > div > div.details-holder.clearfix > div.form-field.full-width-form > phone-number > div.phone-number > input'));
        cardNumberField = element(by.css("payment-details-form > div > div.details-holder.clearfix > div.payment-form__methods > div.clearfix > div:nth-child(1) > payment-method-retrieved-cards > payment-method-card > div.form-field.half-width-form.card-seats-flow > input[id^='cardNumber']"));
        expiryMonthField = element(by.cssContainingText('option','4'));
        expiryYearField = element(by.cssContainingText('option','2020'));  
        securityCodeField = element(by.css('payment-method-retrieved-cards > payment-method-card > div.full-width-form.payment-input-seats-flow > div.form-field.security-code > div.card-security-code > input'));
        cardholdersNameField = element(by.css('payment-method-retrieved-cards > payment-method-card > div.full-width-form.payment-input > div.form-field.half-width-form.payment-input.cardholders-name > input'));
        address1Field = element(by.id('billingAddressAddressLine1'));
        billingCityField = element(by.id('billingAddressCity'));
        billingZipCodeField = element(by.id('billingAddressPostcode'));
        billingCountryField = element(by.id('billingAddressCountry'));
        poland = element(by.model('$ctrl.selectedCountry')).$('[label="Poland"]');
        checkbox = element(by.xpath('//*[@id="checkout"]/div/form/div[1]/div[3]/div[2]/div[5]/div/label/span'));
        payNowField = element(by.xpath('//*[@id="checkout"]/div/form/div[1]/div[3]/div[2]/div[5]/button'));
        selectCurrencyPLN = element(by.model('$ctrl.selectedQuote')).$('[value="PLN"]');
    },
   
    selectTitle: () => {
        titleField.click();
    },

    includeName: (name) => {
        
        firstNameField.click();
        firstNameField.sendKeys(name);
    },

    includeSurname: (surname) => {

        surnameField.click();
        surnameField.sendKeys(surname);
    },

    selectTripProtect: () => {

        noIncuranceButton.click();

    },

    selectPhoneNumberCountry: () => {

        phoneNumberCountryField.click();
        polandPhoneNumberCountry.click();

    },

    enterPhoneNumber: (phonenumber) => {

        phoneNumberField.click();
        phoneNumberField.sendKeys(phonenumber);

    },

    enterCardNumber: (cardnumber) => {

        cardNumberField.click();
        cardNumberField.sendKeys(cardnumber);

    },

    selectExpiryDate: () => {

        expiryMonthField.click();
        expiryYearField.click();

    },

    enterSecurityCode: (securitycode) => {

        securityCodeField.click();
        securityCodeField.sendKeys(securitycode);

    },

    enterCardholdersName: (cardholdersname) => {

        cardholdersNameField.click();
        cardholdersNameField.sendKeys(cardholdersname);
    
    },

    selectPLNCurrency: () => {
        selectCurrencyField = element(by.css("currency-converter > div > div > div.multi-offers__rate > div.multi-offers__rate-select.core-select > select"));
        selectCurrencyField.click();
        selectCurrencyPLN.click();
    
    },

    enterBillingAddress1: (Address1) => {

        address1Field.click();
        address1Field.sendKeys(Address1);
    
    },

    enterBillingCity: (billingcity) => {

        billingCityField.click();
        billingCityField.sendKeys(billingcity);

    },

    enterZipCode: (zipcode) => {

        billingZipCodeField.click();
        billingZipCodeField.sendKeys(zipcode);
    
    },

    selectBillingCountry: () => {

        billingCountryField.click();
        poland.click()
        billingCountryField.click();
    },

    acceptTerms: () => {

        browser.executeScript("window.scrollTo(0,"+checkbox.getLocation().y+")");
        checkbox.click();

    },

    
    confirmPayment: () => {

        payNowField.click();

    },
    
    declinedPayment: () => {
        var EC = protractor.ExpectedConditions;
        var validationErrorBox = element(by.css("div.core-card.available-step.after-pax-validation-step > div.body > payment-details-form > div > div:nth-child(2) > prompt"));
        browser.wait(EC.presenceOf(validationErrorBox), 5000);
        return validationErrorBox.isDisplayed();
    }

}
