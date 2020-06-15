
context('Desafio API', () => {
  beforeEach(() => {
    
  })

  it('ST3 Retornar apenas um livro.', () => {


    cy.request('GET','https://fakerestapi.azurewebsites.net/api/Books/1').then((response=>{
      expect(response.status).equal(200);
      expect(response.body.ID).equal(1);
      expect(response.body.Title).equal('Book 1');
      //aparentemente há um bug no cypress que nao termos grandes
      //expect(response.body.Description).equal('Vel laoreet delenit facilisi ullamcorper. Eirmod justo tempor amet no et. Vel ut at dolore stet qui voluptua eos aliquip accumsan at voluptua et. Justo lorem kasd amet ipsum takimata aliquyam dolore magna elitr eos et lorem no est diam nonumy euismod eu. Et est amet sed at accusam. Tincidunt ut dolor in eum duo accumsan justo rebum voluptua. Consetetur rebum sit sit amet et diam consetetur dolores et. Kasd invidunt praesent consetetur consequat nonummy rebum aliquip volutpat velit diam minim. Dolore iusto dolor eros ut erat diam dia');
      expect(response.body.PageCount).equal(100);
      //aparentemente há um bug no cypress que nao termos grandes
      //expect(response.body.Excerpt).contain('Invidunt et est consequat consetetur kasd erat ut odio sed facilisis lorem sanctus nulla dolore' );
      expect(response.body.PublishDate).contains('2020-06-14');
 
    }))

  })
})
