const {
    percentAmount,
    generateSigner,
    signerIdentity,
    createSignerFromKeypair,
  } = require('@metaplex-foundation/umi');
  const {
    TokenStandard,
    createAndMint,
  } = require('@metaplex-foundation/mpl-token-metadata');
  const { createUmi } = require('@metaplex-foundation/umi-bundle-defaults');
  const { mplCandyMachine } = require('@metaplex-foundation/mpl-candy-machine');
  const web3 = require('@solana/web3.js');
  const secret = require('./guideSecret.json');
  
  const umi = createUmi('https://api.devnet.solana.com'); // Set RPC on Mainnet Or Devnet
  
  const userWallet = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secret));
  const userWalletSigner = createSignerFromKeypair(umi, userWallet);
  
  const metadata = {
    name: 'TEST TOKEN 3',
    symbol: 'TEST3',
    uri: "https://your_image.png"
  };
  
  const mint = generateSigner(umi);
  umi.use(signerIdentity(userWalletSigner));
  umi.use(mplCandyMachine());
  
  createAndMint(umi, {
    mint,
    authority: umi.identity,
    name: metadata.name,
    symbol: metadata.symbol,
    uri: metadata.uri,
    sellerFeeBasisPoints: percentAmount(0),
    decimals: 8,
    amount: 1000000_00000000,
    tokenOwner: userWallet.publicKey,
    tokenStandard: TokenStandard.Fungible,
  })
    .sendAndConfirm(umi)
    .then(() => {
      console.log('Successfully minted 1 million tokens (', mint.publicKey, ')');
    });
  