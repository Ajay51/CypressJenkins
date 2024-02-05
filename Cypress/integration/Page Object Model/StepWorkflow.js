class StepWorkflow
{
    getUsername()
    {
        return cy.get('input#username')
    }
    getPassword()
    {
        return cy.get('input#password')
    }
    Loginbutton()
    {
        return cy.get('input[value="Log In"]')
    }
}
export default StepWorkflow;