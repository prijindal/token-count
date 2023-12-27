import TokenCount from "../index";
test("ciao", () => {
  const tokenCount = new TokenCount();

  tokenCount.inc("new-token");

  expect(tokenCount.records).toEqual({ "new-token": 1 });

  tokenCount.inc("new-token", 2);

  expect(tokenCount.records).toEqual({ "new-token": 3 });

  tokenCount.inc("another-token");

  expect(tokenCount.records).toEqual({ "new-token": 3, "another-token": 1 });
});
