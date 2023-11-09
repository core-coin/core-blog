---
title: Mining Tutorial
author: Core Foundation
date: 2022-05-08
lang: en-US
categories:
  - IoT
tags:
  - core
  - blockchain
  - mining
  - iot
  - computing
image: /img/blog/mining-mining-core-coin.png
---
![Mining Tutorial](/img/blog/mining-mining-core-coin.png "Mining Tutorial")

If you have decided to participate in the Core Blockchain Network by mining Core Coins (XCB), but don’t exactly know how to start, you have come to the right place. In this article, we will teach you how to download and adjust the mining software.

<!--truncate-->

Once you have successfully prepared your mining device, make sure to follow these few easy steps:

## Step 1: Download a Crypto Wallet

Before you start acquiring crypto, you need a place to put it. Core provides a few options for storing your Core Coins, either through downloading the **go-core client**, or the **ICAN address generator**.

Once you acquire your private key, it is of utmost importance to remember it or keep it somewhere safe. If you lose your key, you lose your funds.

### Download Go Core - Recommended for Developers

1. Download Go-Core.
1. Unzip the file.
1. Open the Terminal.
1. Type folder location of the CoreMiner or the so-called `cd ~/Downloads` etc.
1. Change the rights with the command `chmod +x gocore`
1. Run `./gocore` in the Terminal.
1. Write down your password.
1. You can find your wallet address under “The public address of the key,” and your private and public keys encrypted in a file that has automatically been saved on your computer. You can find it at the address stated in your terminal.

### Download ICAN Address Generator - Recommended for Basic User

1. Download the ICAN address generator.
1. Unzip the file.
1. Open the Terminal.
1. Type folder location of the CoreMiner or the so-called `cd ~/Downloads` etc.
1. Change the rights with the command `chmod +x wallet-generator`
1. Write down `./wallet-generator` or run the file.
1. Your Private Key, Public Key, and Wallet address have been generated.

**Always remember to backup your private key!**

## Step 2: Download the Mining Software

If you want to mine, you need software to do it for you. You can download the CoreMiner mining software from [CatchthatRabbit repository](https://github.com/catchthatrabbit/coreminer/releases).

The CoreMiner is a fast and open-source miner with excellent hardware support, 0% fees, and the following parameters:

- OS: Ubuntu, Raspbian
- Supported CPUs: AMD, Intel, ARM
- Fee: 0%

To configure the mining, simply run the script `bash ./mine.sh` and follow the instructions.

1. Download CoreMiner.
1. Unzip the file.
1. Open the Terminal.
1. Type folder location of the CoreMiner or the so-called `cd ~/Downloads` etc.
1. Change the rights with the command `chmod +x mine.sh`
1. Execute command `bash ./mine.sh`
1. Approve the security policies.
1. Follow the instructions from the screen.

## Step 3: Choose Your Server

There are two general geo-locations to choose from:

- Europe
- Asia

1. Select the mining pool.
1. Enter your wallet address and make sure it’s the correct one.
1. Choose any name of your choice for your mining device.
1. We recommend an additional backup pool, enter `yes`; `y`.
1. Select the region again.
1. You can select more backup pools, but it is up to you how many you choose.
1. Once you have decided you have enough backup pools, enter `no`; `n`.
1. Start mining now? Enter `yes`; `y`.

**MINING STARTS!**

## Step 4: Go to the Dashboard and Check Your Progress

At this [website](https://catchthatrabbit.com), you can monitor the performance of your mining device in real-time and check how many rewards it has gained by participating in the network, or more precisely, confirming transactions.

1. Enter [catchthatrabbit.com](https://catchthatrabbit.com) in your browser.
1. Click on Miners.
1. Enter your wallet address.

or

1. Enter URL `wallet`.ctr.watch

Now you can see all the devices linked to your wallet and all the necessary data about them, such as Computing Information and General Stats.

In the Computing Information section, you can find how many of your devices are online, what your hash rate is, or how many blocks you have found. In General Stats you will find information on your immature or pending balances, total payments, or total paid.

At the bottom of the page, you will find extra information on the latest activity of your miners.

## And You Are All Set…

Congratulations! You have successfully set up your Core Blockchain Mining Device. The work is done and all you need to do now is sit back, relax, and watch your Core Coins amount.

We want to thank you for becoming a part of the Core Community and helping the network grow and get safer by participating in it.

We wish you a strong yield and bountiful rewards!
