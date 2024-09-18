---
title: An introduction to 0G transactions
author: Rastislav Vašička
date: 2024-09-18
lang: en-US
categories:
  - Guide
tags:
  - core
  - blockchain
  - 0g
  - transactions
  - guide
image: /img/blog/nodes-and-their-role.png
---
![0G Transactions](/img/blog/0g-transactions.png "0G Transactions")

In today’s day and age, nearly 100% of all data is transmitted over digital networks, primarily the Internet. The shift from 0G to the internet age marks a nearly total transformation in how data is transmitted globally. But what about those 0.01% of cases where you urgently need to get information through but have no internet connectivity?

<!--truncate-->

Well, before the introduction of GPRS, 2G, 3G, and 4G mobile data networks, the signaling and transmission of information was mostly done via 0G. 0G transmission refers to early mobile communication systems that used basic cellular networks to transmit data between devices.

## The benefits of 0G transactions

Though a 5G or 4G connection is almost a given in the world we live in today, the key word here is ‘almost’. That is because even in well-developed areas, coverage limitations and cost constraints play a huge role in your ability to reliably send and receive data. On the other hand, while lacking in a lot of areas, 0G transactions have their own benefits when compared to modern digital transactions, namely:

Wider coverage area: 0G systems rely on analog signals, which allows them to cover large areas with fewer base stations, especially useful in remote or rural regions.
Simplicity and maintenance: These systems are simpler to implement and maintain compared to modern digital networks, making them more accessible in certain situations.

To illustrate the feasibility of 0G transactions on blockchain, imagine enjoying wine in a cellar where there’s no internet connectivity and wanting to pay via crypto. This is possible using [TxMS](https://github.com/bchainhub/txms.js), which operates without data connections.

## The capabilities of 0G transactions

Core Blockchain’s TxMS can handle any data in hexadecimal format, as described in the [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) process. This means any transaction you want to be recorded on the blockchain’s ledger can be recorded with zero internet connectivity. This is primarily beneficial in rural areas, areas with shoddy connectivity, or even emergency cases where you urgently need to get information through to the blockchain’s ledger. To test and try out TxMS technology and explore its possible use cases and implementations more thoroughly, you can either utilize the [Core Blockchain endpoints](https://txms.info) or set up your own [TxMS server](https://github.com/DataLayerHost/txms-server).

## So, here’s how you can try this out

### Step 1: Create and Sign a Core Blockchain Transaction

First, you need to create and sign a Core Blockchain transaction.

If you don't have the `go-core` client installed, you can [download it here](https://github.com/core-coin/go-core/releases) for your platform.

Once downloaded, make the file executable by navigating to the directory containing `gocore` and running the following command:

```bash
chmod +x gocore
```

You can now run the client with:

```bash
./gocore --verbosity 2 --nat any console
```

This opens an interactive console where you can execute commands.

### Step 2: Create a New Account

To sign transactions, you need an account. You can either create a new account or import an existing one (UTC file). For now, let’s create a new account:

```js
personal.newAccount("your_passphrase")
```

Replace `your_passphrase` with something you will remember! If you'd rather not use a passphrase, simply omit it. The UTC file will be stored in `~/Library/Core/keystore/` (on Mac).

### Step 3: Check Sync Status (Optional)

You may not be fully synchronized with the Core Blockchain, which is not strictly required but can be helpful. Use the following command to check your sync status:

```js
xcb.syncing
```

If you're synchronized, this command returns `false`. Synchronization consumes bandwidth and computing power, so you might want to leave it running when you're not actively using it.

### Step 4: Create and Prepare a Transaction

To get the nonce for your account (which should be `0` for the first transaction), run:

```js
web3.xcb.getTransactionCount("cb…")
```

Make sure your client is synchronized to get the correct nonce.

Now, compose your first transaction:

```js
var tx = {nonce: '0x0', energy: 21000, energyPrice: 1000000000, from: "cb…", to: "cb…", value: web3.toOre(1)}
```

Here's a breakdown of the fields:

- `nonce`: The transaction count (in hexadecimal format).
- `energy`: The computational effort required, 21000 is standard for simple transfers.
- `energyPrice`: The amount of Core you're willing to pay per unit of energy (measured in 'nucle' from [Core denomination table](https://github.com/core-coin/core-denomination/blob/master/units.json)).
- `from`: The sender's ICAN address.
- `to`: The recipient's ICAN address.
- `value`: The amount of Core to send, using the helper function `web3.toOre`.

### Step 5: Sign the Transaction

Before signing, you'll need to unlock your account:

```js
personal.unlockAccount("cb…")
```

You'll be prompted for your passphrase (or just press Enter if you didn't set one). The account will remain unlocked for 300 seconds (5 minutes).

Next, sign the transaction and store it in the `txSigned` variable:

```js
var txSigned = xcb.signTransaction(tx)
```

### Step 6: Prepare the Raw Transaction for TxMS

To prepare the raw transaction, print it with:

```js
txSigned.raw
```

Copy the raw transaction, as you'll need it for the next step.

That is all what we need from Core console now. Keep it running for synchronization or shut down using the command `Ctrl + D`.

### Step 7: Install TxMS

If you haven't already installed TxMS, you'll need [Node.js](https://nodejs.org) installed. I recommend using [nvm](https://github.com/nvm-sh/nvm) for Mac users. Once you've finished installing Node.js, proceed to the next step.

Install the TxMS library globally:

```bash
npm i -g txms.js
```

After installation, restart your terminal and verify that `txms` is recognized by typing command for opening help context:

```bash
txms -h
```

### Step 8: Encode the Transaction with TxMS

To encode your transaction with TxMS, run:

```bash
txms -e=rawtransaction
```

Replace `rawtransaction` with the transaction data you copied earlier. TxMS will return the encoded message. You can also use the `-dl` parameter to download the encrypted message to your working directory as `.txms.txt`.

### Step 9: Send the TxMS Message via SMS

Now, copy the encoded message and send it via SMS. The message will typically split into 2-3 SMS messages, but MMS is also supported.

Make sure the TxMS service is [running](https://txms.info) before sending the message to the appropriate number:

- Mainnet: +12019715152
- Testnet (Devín): +12014835939

### Step 10: Confirm the Transaction on the Blockchain

After about 10 seconds, the transaction should appear on the Blockchain. You can verify it using [Blockindex](https://blockindex.net) by entering the sender or recipient address.

Congratulations! You've just completed your first TxMS transaction. If you encounter issues, feel free to ask for help on our [Discord](https://discord.gg/YkA8ydkZ), or open a thread in the [forum](https://discord.com/channels/469227792538533888/1285602978836774953).

## You’re all set

While modern digital networks dominate today's data transmission, 0G transactions offer a unique, low-tech solution for situations where internet connectivity is limited or unavailable. Through innovative platforms like Core Blockchain’s TxMS, the potential of 0G transactions can extend beyond voice communication to secure, blockchain-based transfers, all without relying on internet access. Whether you're in a rural area, a remote location, or facing connectivity issues, 0G technology provides an alternative for conducting transactions and recording data, proving that even old methods can be adapted for modern needs.

We would be happy to hear about new use cases and your ideas for applying the technology. Don't hesitate to [reach out to us](https://discord.com/channels/469227792538533888/1285602978836774953).
