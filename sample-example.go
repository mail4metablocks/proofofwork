func proofOfWork(block *Block, difficulty int) int {
	var nonce int
	target := (1 << (256 - difficulty)) - 1

	for {
		hash := calculateHash(block, nonce)
		if hash[:difficulty] == [difficulty]byte{} {
			return nonce
		}
		nonce++
	}
}

func main() {
	block := &Block{
		// block data
		Nonce: 0,
	}

	difficulty := 4 // number of leading zeros required

	nonce := proofOfWork(block, difficulty)

	block.Nonce = nonce

	hash := calculateHash(block, nonce)

	if hash[:difficulty] == [difficulty]byte{} {
		fmt.Printf("Valid solution found: nonce = %d, hash = %x\n", nonce, hash)
	} else {
		fmt.Printf("Invalid solution: nonce = %d, hash = %x\n", nonce, hash)
	}
}
