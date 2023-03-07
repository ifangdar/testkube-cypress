describe('Check content in google.io',function(){

  it('visit the url',function(){
    cy.visit('https://google.com');
  })

  it('click on test search Taiwan',function(){
    cy.get('form>input').click();
    cy.get('form>input').type('Taiwan');
  })

  it('check 台灣',function(){
    cy.contains('台灣')
  })
})