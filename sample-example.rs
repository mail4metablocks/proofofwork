fn proof_of_work(block: &Block, difficulty: u32) -> u32 {
    let mut nonce = 0;
    let target = (1 << (256 - difficulty)) - 1;

    loop {
        let hash = calculate_hash(&block, nonce);
        if hash[0..difficulty] == [0; difficulty] {
            return nonce;
        }
        nonce += 1;
    }
}

fn main() {
    let block = Block {
        // block data
        nonce: 0,
    };

    let difficulty = 4; // number of leading zeros required

    let nonce = proof_of_work(&block, difficulty);

    block.nonce = nonce;

    let hash = calculate_hash(&block, nonce);

    if hash[0..difficulty] == [0; difficulty] {
        println!("Valid solution found: nonce = {}, hash = {:x}", nonce, hash);
    } else {
        println!("Invalid solution: nonce = {}, hash = {:x}", nonce, hash);
    }
}
