# Token count

This package helps to count related tokens when iterating through data.


Example:
```
import TokenCounter from "token-counter"

const tokenCounter = new TokenCounter();

tokenCounter.inc("new-token")

console.log(tokenCounter) // {"new-token": 1}

tokenCounter.inc("new-token", 2)

console.log(tokenCounter) // {"new-token": 3}

tokenCounter.inc("another-token")

console.log(tokenCounter) // {"new-token": 3, "another-token": 3}

```