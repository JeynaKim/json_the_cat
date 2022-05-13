const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);
      done();
    });
  });

  it("returns 'not found', if there is no match breed", (done) => {
    fetchBreedDescription("americanshorthair", (err, desc) => {
      const expectedDesc = "not found";
      assert.equal(err, expectedDesc);
      done();
    });
  });
});
