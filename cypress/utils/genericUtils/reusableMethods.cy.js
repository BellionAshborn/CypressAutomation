
// This function is going to click only the text based locators --> Just the click action
const textBasedMethod = ({locator}) => {
    cy.get(locator).last().click();
}

export{
  textBasedMethod
}