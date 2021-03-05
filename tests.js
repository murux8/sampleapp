const chai = require("chai");
const chaiHttp = require("chai-http");
const { isMainThread } = require("worker_threads");
const server = require("./app");
const should = chai.should();
chai.use(chaiHttp);

describe("--Start Test--", () => {
    it("should Get / \n\n", (done) => {
        chai.request(server)
            .get("/")
            .end((err, res) => {
                if (err) {
                    done(err);
                    process.exit(1);
                } else {
                    res.should.have.status(200);
                    res.body.meta.status.should.be.a("boolean");
                    res.body.meta.message.should.be.a("string");
                    res.body.meta.code.should.be.a("number");

                    done();
                }
            });
    });    
});