const anchor = require("@coral-xyz/anchor");

describe("gzedao", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  it("Is initialized!", async () => {
    // Add your test here.
    const program = anchor.workspace.Gzedao;
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
