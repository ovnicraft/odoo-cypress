
// -- Start: Partner tests --
var oe_user = Cypress.env("user");
var oe_passwd = Cypress.env("password");


describe('Test Partner', () => {

    beforeEach(() => {
        cy.Login(oe_user, oe_passwd)
    })

    context('Testing Partner', () => {

        it('Create Customer', () => {
            cy.MainMenu('crm.crm_menu_root')
            cy.SubMenu('crm.crm_menu_sales')
            cy.SubMenu('crm.res_partner_menu_customer')
            //cy.Button('Create')
            //cy.SetValue('name', 'John Doe')
            //cy.SetValue('city', 'Quito')
            //cy.M2O_SetValue('country_id', 'Ecuador')
            //cy.SetValue('mobile', '0001234567890')
            //cy.Button('Save')
        })

    })

})
