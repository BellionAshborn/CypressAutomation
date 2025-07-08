import { textBasedMethod } from "@utils/reusableMethods.cy.js";
import { registrationTextBasedLocator } from "@pages/loginAndRegistrationPage/loginPage.json";

describe('User Registration Test Case', () => {
    it('Create a new registration account test case', () => {
       cy.login();
       textBasedMethod({ locator: registrationTextBasedLocator });
    });
});