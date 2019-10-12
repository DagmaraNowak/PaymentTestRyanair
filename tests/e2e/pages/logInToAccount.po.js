let logInButton,
emailAddressField,
passwordField,
logInConfirmation;

module.exports = {
    init: () => {
    
        logInButton = element(by.id('myryanair-auth-login'));
    },
   
    LogInToAccount: () => {

        logInButton.click();
    },

    enterEmail: (email) => {
        emailAddressField = element(by.css(".modal-form-container > .ng-pristine > .form-field > input[id^='email']"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(emailAddressField), 1000);
        emailAddressField.click();
        emailAddressField.sendKeys(email);
    },

    enterPassword: (password) => {
        passwordField = element(by.css("div > div > div > form > div.form-field.password > password-input > input[id^='password']"));
        passwordField.click();
        passwordField.sendKeys(password);
    },

    logInToRyanair: () => {
        logInConfirmation = element(by.css("div > div > div > form > div:nth-child(5) > button-spinner > button"));
        logInConfirmation.click();
    }
} 