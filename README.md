
LBTWallet is a free, open-source, client-side tool for easily & securely interacting with the LBT network. As one of the leading providers of LBT services, LBTWallet equips users with an easy-to-understand and accessible suite of tools for their needs.

#### Features

- Create new wallets completely client side.
- Access your wallet via unencrypted private key, keystore files.
- Easily send LBT, check balance by address, check transaction status.
- Supports URI Strings on Send LBT Page.
    - address=[address]
    - amount=[number]
    - data=[hex data]
    - gasLimit=[number]
    - Example: https://wallet.let.bet/#/send-lbt?amount=10000&address=0xF1e4254627bEFa12E699Fa46742166384708e424&data=736373646&gasLimit=100000

### Users (non-developers)

- You can run LBTWallet on your computer and can create a wallet completely offline.

1. Go to https://github.com/letbetcoin/lbtwallet/releases/latest.
2. Click on lbtwallet-vX.X.zip.
3. Move zip to an airgapped computer.
4. Unzip it and double-click index.html.
5. LBTWallet is now running entirely on your computer.

In case you are not familiar, you need to keep the entire folder in order to run the website, not just index.html. Don't touch or move anything around in the folder. If you are storing a backup of the LBTWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.

As we are constantly updating LBT, we recommend you periodically update your saved version of the repo.


### Developers

If you want to help contribute, here's what you need to know to get it up and running and compiling.

- We use VueJs 2 and bootstrap.
- The development branch is currently the active development branch.
- We use npm for compiling.

**Getting Started**

- Start by running `npm install`.
- Build and run local, run `npm run dev`, it will run in port `8005`.
- Build for production, run `npm run build`.


#### LBTWallet is licensed under The MIT License (MIT).
