class ShopTab
{
   getCheckoutButton()
   {
    return cy.get('li a.nav-link.btn')
   } 
  // getProductHeding()
   //{return cy.get('h4.media-heading')}
   get2CheckoutButton()
   {
    return cy.get('button.btn-success')
   }
   getTextBox()
   {
    return cy.get('input#country')
   }
   getCheckbox()
   {
    return cy.get('input#checkbox2')
   }
   getPurchaseButton()
   {
    return cy.get('input[type="submit"]')
   }
   SuccessAlert()
   {
    return cy.get('div.alert-success.alert-dismissible')
   }
 }
 export default ShopTab;