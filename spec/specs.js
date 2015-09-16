describe('romanNumerals', function() {
  it("translates arabic numbers into roman numerals", function() {
    expect(romanNumerals(1000)).to.equal("M");
  })

  it("translates 6", function() {
    expect(romanNumerals(6)).to.equal("VI");
  })


  it("translates 3452", function() {
    expect(romanNumerals(3452)).to.equal("MMMCDLII");
  })

  it("rejects the wrong number", function() {
    expect(romanNumerals(-3452)).to.equal("Only numbers between 1 and 4999");
  })
});
