const Hello = artifacts.require("Hello"); //read json file of SC compiled (artifact) and puts data in "Hello" const

module.exports = function (deployer) {
    deployer.deploy(Hello);
};