class TokenCounter {
  records: Record<string, number> = {};

  constructor(initRecords: Record<string, number> = {}) {
    this.records = initRecords || {};
  }

  private ensureExist = (token: string) => {
    if (this.records[token] == null) {
      this.records[token] = 0;
    }
  };

  exist = (token: string): boolean => {
    return this.records[token] != null;
  };

  inc = (token: string, value = 1) => {
    this.ensureExist(token);
    this.records[token] += value;
  };

  dec = (token: string, value = 1) => {
    this.ensureExist(token);
    this.records[token] -= value;
  };

  remove = (token: string) => {
    if (this.records[token] != null) {
      delete this.records[token];
    }
  };

  public toString = (): string => {
    return JSON.stringify(this.records);
  };
}

export default TokenCounter;
