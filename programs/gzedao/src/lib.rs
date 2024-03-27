use anchor_lang::prelude::*;

declare_id!("Fg6S..."); // Replace with your actual program ID.

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
