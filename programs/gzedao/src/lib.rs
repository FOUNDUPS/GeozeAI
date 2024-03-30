use anchor_lang::prelude::*;

declare_id!("BPFLoader1111111111111111111111111111111111"); // Replace with your actual program ID after deployment

#[program]
pub mod gzedao {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        // Initialization logic here
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {
    // Define accounts here
}
