# Proof of work

Proof of work is a concept used in many cryptocurrencies as a way to secure the network and confirm transactions. It involves solving a computational problem that is difficult to perform but easy to verify.

In a proof of work system, miners compete to solve a mathematical puzzle by guessing a number, called a nonce. When a miner finds a solution, they present it to the rest of the network along with the transactions they want to confirm. Other miners verify the solution and, if it is correct, add the block of transactions to the blockchain.

The difficulty of the puzzle is adjusted so that it takes an average of a certain amount of time to find a solution. This helps to ensure that the network remains secure and that transactions are processed in a timely manner.

Proof of work is just one of many approaches to achieving consensus in a decentralized network. It has been successful in securing the networks of many cryptocurrencies, but it has also been criticized for its high energy consumption and potential for centralization.

### Example of how proof of work is used in the Bitcoin network:

A new transaction is broadcast to the network and collected into a block.
Miners on the network compete to find a solution to a mathematical puzzle that allows them to claim the block reward (currently 12.5 bitcoins) and any transaction fees associated with the transactions in the block.
To find a solution, miners must generate a hash of the block that is lower than a target value. This requires them to try different nonces (random numbers) until they find one that produces a valid hash.
Once a miner finds a valid solution, they broadcast it to the network and other miners verify the solution. If the solution is correct, the block is added to the blockchain and the miner who found the solution is rewarded with the block reward and transaction fees.
In this example, the mathematical puzzle that miners are trying to solve is finding a nonce that produces a hash of the block with a certain number of leading zeros. The difficulty of the puzzle is adjusted so that it takes an average of about 10 minutes to find a solution. This helps to ensure that the network remains secure and that transactions are processed in a timely manner.
