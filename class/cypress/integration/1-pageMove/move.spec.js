it('페이지 이동 연습', () => {
    cy.visit('http://localhost:3000/34-04-cypress-integration-test')
    cy.get('button').click()
    cy.get('div').contains('철수야 놀자')
})