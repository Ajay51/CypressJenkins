class HomePage
{
EditBox()
{ 
    return cy.get('form input[name="name"]') 
}

getwoWayDataBinding()
{
     return cy.get('h4 input[name="name"]')
    }

gender()
{ 
    return  cy.get('select')
}

getEntrepreneurRadioButton() 
{
     return  cy.get('div input[name="inlineRadioOptions"]')
    }

getShopTab()
{ 
    return cy.get('li a[href="/angularpractice/shop"]')
}

}
export default HomePage;