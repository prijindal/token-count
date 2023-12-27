# Token count

This package helps to count related tokens when iterating through data.


Example:
```
import TokenCount from "token-count"

const TokenCount = new TokenCount();

TokenCount.inc("new-token")

console.log(TokenCount) // {"new-token": 1}

TokenCount.inc("new-token", 2)

console.log(TokenCount) // {"new-token": 3}

TokenCount.inc("another-token")

console.log(TokenCount) // {"new-token": 3, "another-token": 3}

```