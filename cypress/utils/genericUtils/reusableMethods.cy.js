// This method is basically to click on the buttons or any clickable elements with the locators and this can't be used for the text based locators
const clickActionMethod = ({ locator }) => {
  cy.get(locator).click();
}

// This method is going to click only the text based locators --> Just the click action
const textBasedMethod = ({ locator }) => {
  cy.get(locator).last().click();
}

// This method is going to type the text inside the input fields on the application
const typeTextMethod = ({ locator, text, options = {} }) => {
  cy.get(locator).type(text, options);
}

export {
  textBasedMethod,
  typeTextMethod,
  clickActionMethod
}