import { clickActionMethod, textBasedMethod, typeTextMethod } from "@utils/reusableMethods.cy.js";
import { registrationTextBasedLocator, userNameFieldLocator, passwordFieldLocator, confirmFieldLocator, phoneNumberInputFieldLocator, registerButtonLocator } from "@pages/loginAndRegistrationPage/registrationAndLoginPage.json";
import { phoneNumber } from "@fixtures/loginAndRegistrationData/registrationAndLoginData.json"
import { registration, generateUserData } from "@utils/functionsExecution.cy.js";

describe('User Registration Test Case', () => {
    it('Create a new user by clicking the registration --> test case 01', () => {
        const newUser = generateUserData();
        cy.login();
        textBasedMethod({ locator: registrationTextBasedLocator });
        typeTextMethod({ locator: userNameFieldLocator, text: newUser.username, options: { log: false } }); //This log: false is used in the runtime the password or the username should not be seen. Masking it
        typeTextMethod({ locator: passwordFieldLocator, text: newUser.password, options: { log: false } });
        typeTextMethod({ locator: confirmFieldLocator, text: newUser.password, options: { log: false } });
        typeTextMethod({ locator: phoneNumberInputFieldLocator, text: phoneNumber });
        registration();
        clickActionMethod({ locator: registerButtonLocator });
    });
});