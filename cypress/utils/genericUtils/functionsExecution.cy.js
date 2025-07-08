const { typeTextMethod } = require("./reusableMethods.cy");
import { firstName, lastName, address, city, state, zipCode, swissSocialSecurityNumber } from "@fixtures/loginAndRegistrationData/registrationAndLoginData.json";
import {
    firstNameInputFieldLocator,
    lastNameInputFieldLocator,
    addressInputFieldLocator,
    cityInputFieldLocator,
    stateInputFieldLocator,
    zipCodeInputFieldLocator,
    ssnInputFieldLocator
} from "@pages/loginAndRegistrationPage/registrationAndLoginPage.json"

// This function is been created here under the generic utils is becuase to not have the repeated steps of method in the test file rather here as a function and call it over the test file
function registration() {
    typeTextMethod({ locator: firstNameInputFieldLocator, text: firstName });
    typeTextMethod({ locator: lastNameInputFieldLocator, text: lastName });
    typeTextMethod({ locator: addressInputFieldLocator, text: address });
    typeTextMethod({ locator: cityInputFieldLocator, text: city });
    typeTextMethod({ locator: stateInputFieldLocator, text: state });
    typeTextMethod({ locator: zipCodeInputFieldLocator, text: zipCode });
    typeTextMethod({ locator: ssnInputFieldLocator, text: swissSocialSecurityNumber });
}

// This function can be used for the registration page to see whether it is working fine, random check with the random generation code for these field to avoid the duplicate users 
function generateUserData() {
    const random = Date.now();
    return {
        username: `testuser${random}`,
        password: `Pass${random}!`,
        phoneNumber: `98765${Math.floor(Math.random() * 100000)}`
    };
}

export {
    registration,
    generateUserData
}