# Create-SPL-Tokens-On-Solana-with-Metaplex
Creating an SPL (Solana Program Library) Token on Solana with Metaplex involves using the Metaplex platform, which is designed to simplify the process of creating and managing tokens on the Solana blockchain. Here's a step-by-step description of the process

Before running the script, ensure you have Node.js installed on your machine. You can download it from https://nodejs.org/.



# Setup

### Clone the repository:
```bash
git clone <this repo url>
```

### Navigate to the folder:
```bash
cd Create-SPL-Token-on-Solana-with-Metaplex
```

### Install dependencies:

```bash
npm i @solana/web3.js @metaplex-foundation/umi @metaplex-foundation/mpl-token-metadata @metaplex-foundation/umi-bundle-defaults @metaplex-foundation/mpl-candy-machine bs58
```

if error use 
--force

# Create Wallet first

## Usage

```bash
node createwallet.js
```
After creating a wallet, please note that the private key must be saved

# Create Token 

## Usage

```bash
node createtoken.js
```

## Explanation

Replace 'NAME_YOUR_TOKEN', 'SYMBOL', and "https://your_image.png" with the desired token name, symbol, and URI for the metadata.

``` javascript
  const metadata = {
    name: 'NAME_YOUR_TOKEN',
    symbol: 'SYMBOL',
    uri: "https://your_image.png"
  };
```
