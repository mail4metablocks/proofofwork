function proofOfWork(block: Block, difficulty: number): number {
  let nonce = 0;
  const target = (1 << (256 - difficulty)) - 1;

  while (true) {
    const hash = calculateHash(block, nonce);
    if (hash.slice(0, difficulty) === Array(difficulty).fill(0)) {
      return nonce;
    }
    nonce++;
  }
}

function main() {
  const block = {
    // block data
    nonce: 0,
  };

  const difficulty = 4; // number of leading zeros required

  const nonce = proofOfWork(block, difficulty);

  block.nonce = nonce;

  const hash = calculateHash(block, nonce);

  if (hash.slice(0, difficulty) === Array(difficulty).fill(0)) {
    console.log(`Valid solution found: nonce = ${nonce}, hash = ${hash}`);
  } else {
    console.log(`Invalid solution: nonce = ${nonce}, hash = ${hash}`);
  }
}
