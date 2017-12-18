let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');

chai.use(chaiHttp);

describe('mongoose test', ()=>{
  describe('/GET ', () => {
    it('it should GET data', () => {
      chai.request('http://localhost:3000')
      .get('/api/get')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
      });
    });
  });
})