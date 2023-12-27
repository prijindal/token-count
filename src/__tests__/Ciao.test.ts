import TokenCounter from "../index";
test("ciao", () => {
  const tokenCounter = new TokenCounter();

  tokenCounter.inc("new-token");

  expect(tokenCounter.records).toEqual({ "new-token": 1 });

  tokenCounter.inc("new-token", 2);

  expect(tokenCounter.records).toEqual({ "new-token": 3 });

  tokenCounter.inc("another-token");

  expect(tokenCounter.records).toEqual({ "new-token": 3, "another-token": 1 });
});
