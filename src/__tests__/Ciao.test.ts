import TokenCount from "../index";
test("ciao", () => {
  const TokenCount = new TokenCount();

  TokenCount.inc("new-token");

  expect(TokenCount.records).toEqual({ "new-token": 1 });

  TokenCount.inc("new-token", 2);

  expect(TokenCount.records).toEqual({ "new-token": 3 });

  TokenCount.inc("another-token");

  expect(TokenCount.records).toEqual({ "new-token": 3, "another-token": 1 });
});
