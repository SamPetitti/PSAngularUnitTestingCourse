// What is Jasmine? DOM-less simple JavaScript testing framework. Jasmine is a Behavior Driven Development testing framework for JavaScript.
//It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run.

// What is Karma? Spectacular Test Runner for JavaScript. Karma is not a testing framework, nor an assertion library.
//Karma just launches a HTTP server, and generates the test runner HTML file you probably already know from your favourite testing framework. So for testing purposes you can use pretty much anything you like.


describe('my first test', () => {
  let sut;

  beforeEach(() => {
    sut = {};
  });

  it('should be true if true', () => {
    //arrange
    let sut = false;

    //act
    sut = true;
    
    //assert
    expect(sut).toBe(true);

  })
})
