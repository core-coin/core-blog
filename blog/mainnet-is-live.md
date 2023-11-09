---
title: Core Blockchain Mainnet is Live
author: Core Foundation
date: 2022-05-07
lang: en-US
categories:
  - Blockchain
tags:
  - core
  - blockchain
  - mainnet
image: /img/blog/mainnet-is-live.png
---
![Mainnet is Live](/img/blog/mainnet-is-live.png "Mainnet is Live")

> It always seems impossible until it's done.
— Nelson Mandela

The year is 2014, the world realizes that combating climate change is inevitable, Scotland votes to stay in the UK, the first-ever probe lands on a comet, Vitalik Buterin announces Ethereum at the Bitcoin conference in Miami, and a trio of visionaries meets for the first time to conceptualize what would ultimately become the biggest breakthrough in the field of decentralized technology.

<!--truncate-->

Michael and Ockert Loubser, and Rastislav Vašička were all captivated by blockchain technology, even though Bitcoin and other cryptocurrencies were only on the brink of picking up the winds of the mainstream.

Back then, they knew already that the world was dealing with something extraordinary and the possibilities were limitless. And so they decided to take the technology further and explore all these possibilities. They had a vision of growing one of the most sophisticated blockchain developers' teams to date, and so they set out on a long and unwinding journey, with one ultimate goal — to build a blockchain that will serve everyone, regardless of their location.

Although the road had many turns and challenges, eight years later, Michael, Okkie, Rasti, and the Core team are proud to present a revolution in decentralized technology — the Core Blockchain — the fastest, most secure, scalable, and affordable blockchain that can reach everyone in the world. It is finally here! **We are live!**

But before we dive headfirst into presenting all the technicalities and features, we want to look back at the most important milestones that we have achieved throughout these past few years. Below you’ll find a story map of how we got to where we are now:

[![Core Blockchain Timeline](/img/blog/core-blockchain-web4-core-blockchain-timeline.png)](/img/blog/core-blockchain-web4-core-blockchain-timeline.png)

## The ED448 Encryption Technology Allows the Core Blockchain Network to Execute Transactions with the Highest Security Standards

The Core Blockchain Network uses the ED448-Goldilocks encryption method, making it the only blockchain to date to have implemented such a high level of encryption.

### Security rationale

Despite the fact that elliptic curves are generally considered to be much more secure than your regular encryption methods, they are no stranger to cyberattacks. That is where the ED448 curve emerges victorious.

The **ED448 curve’s 224 bits** operate on such a high level of security, that the common attacks on the regular Elliptic curve’s 128 bits have a minuscule impact on it. Such attacks include:

- Brute force (submitting an overload of passwords and paraphrases)
- Quantum computer
- A mathematical breakthrough
- Complex multiplication or a certain field shape
- Loose security bound of the protocol, allowing the attacker to break it with only a tiny fraction of the work of solving the discrete log problem, enabling an attack on curves that were previously out of reach, but only in that protocol
- Security bugs or security architects over-engineering a system

Some of these attacks can be mitigated by using a bigger curve. Therefore, we have decided to implement the **ED448**, which represents the best trade-off between performance and field size to date.

### Possible Prime Shapes

- Random primes
- Mersenne primes
- Crandall primes $(2^k-c)$
- Special Montgomery primes $(2^kc-1)$
- Granger-Moss primes $(\Phi_n(k))$
- Solinas primes $(2^k-2^l \pm \dotsm \pm 1)$

### The Goldilocks Prime

In this case, the creator Mika Hamburg chose the Solinas trinomial prime $p \coloneqq 2^{448} - 2^{224} - 1$.
The name "Goldilocks" originates from the golden ratio $\phi \equiv 2^{224}$. Because $224 = 32 \cdot 7 = 28 \cdot 8 = 56 \cdot 4$, this prime supports fast arithmetic in radix $2^{28}$ or $2^{32}$ (on 32-bit machines) or $2^{56}$ (on 64-bit machines).

With 16, 28-bit limbs it works well on vector units such as NEON. Furthermore, radix-264 implementations are available with greater efficiency than most of the NIST primes.

#### Karatsuba

The main advantage of a golden-ratio prime is the fast Karatsuba multiplication. Let $\phi = 2^{224}$ as above.

Then:

$$(a+b \phi) \cdot (c+d \phi)$$

$$= ac + (ad + bc) \phi + bd \phi^2$$

$$\equiv (ac + bd) + (ad + bc + bd) \phi \space \space \space (\bmod \space p)$$

$$= (ac + bd) + ((a+b)(c+d)-ac) \phi$$

If you are interested in learning more about the **Curve coefficients**, or the implementation itself, including **Key generation**, **Signing, Verification**, and **ECDH**, you can visit the **[official DEV portal.](https://dev.coreblockchain.net)**

## Core Blockchain Finds Use in a Wide Range of Industries

Core Blockchain provides an unprecedented level of security and availability. Therefore, it is to be expected that the network will find a wide scale of utilization and adoption worldwide. We will provide some examples of possible uses of the blockchain in many areas of the industry.

To start with, the Core Blockchain is providing the foundation for the world’s most decentralized and compliant **digital identity**, allowing digital attributes to be connected to an entire blockchain-based ecosystem. It further provides users with the most secure login system in the world to date.

Continuing, let us take a look at **finance and payments**. Core Blockchain offers a secure service of financial transactions, sending and receiving encrypted messages, regardless of any borders. The Ylem Smart Contracts also provide network transfers and value digitization.

Talking about digitization, you can protect any of your assets against inflation by tokenizing them. Whether it is securities or bonds, **asset tokenization** allows you to safely store them in your wallet. There is not a thing of value that the Core Blockchain cannot digitize.

One of the key characteristics of the Core Blockchain is its interoperability with **other blockchains**. Any solidity-based smart contract can seamlessly be migrated onto the Core Blockchain to take advantage of not only the affordability, speed, and security, but also the reach of an all-inclusive network rapidly growing. Migrating a smart contract onto the Core Blockchain could be as fast as 20 minutes.

Even **governments** can make use of the Core Blockchain to ensure data safety on a country-wide scale. One of the possible uses of the blockchain is creating voting tokens at times of referendum, elections, and opinion polls, preventing fraud and double voting, and allowing for transparency.

**Healthcare and wellness** represent yet another very important area of our everyday lives that deserves our focus. Core Blockchain is able to protect and automatize medical data in an ever-so-slightly digitized world. The healthcare industry can benefit from deploying Core Blockchain in disease monitoring during medical emergencies.

Core Blockchain will also help find the new frontiers in **aerospace**. Sharing aircraft history, maintenance, and operations data through encrypted messages will provide an ideal tool for this industry.

**Renewable energy, waste, and grid management** are fields that need no introduction. Thanks to its green and eco-conscious nature, the Core Blockchain protects the environment through its Proof-of-Distributed-Efficiency (PoDE) computing algorithm, using zero-waste energy with the principles of LIFO (Last-In-First-Out).

The blockchain should also greatly enhance the sector of **GIScience** (Geographic information science), exchanging geographic information in real-time.

When it comes to **mass media**, the Core Blockchain could find great utilization in the indie film industry financing and monetizing content on a token basis.

Using Core Blockchain in the **supply chain** industry can help in monitoring and tracking any goods using Blockchain-based verified information and reduce the length of the chain by eliminating 3rd parties. The food industry, for example, can find great help in this technology, with tracking a food-related virus, for example. Core Blockchain will be deployed in a farm-to-fork project as well as in a transparent and traceable network for textile manufacturing, such as wool and natural beauty products and farmaceuticals.

**Education** is one of the pillars of a prosperous society. Core Blockchain can provide learning facilitation through knowledge acquisition, and enhance skills, values, beliefs, and habits. Core Blockchain will be deployed in the evaluation and measuring of effective tuition as well as resource management and optimization in schools.

Core Blockchain can serve as an Autonomous Pod Data Transport (APDT) in the **defense & security** sector, connecting several devices all over the world. The application of the technology will provide significant benefits in the field of unmanned device management and deployment, such as drones in intelligence services, and general military operations.

Last but not least, Core Blockchain architecture allows for mesh network deployment, providing a layer that not only includes connectivity through the internet but also connectivity through multiple other **telecommunications** sources, such as wifi, Bluetooth, fiber connection, radiofrequency, satellites, laser transmission, even GPRS and 0G. Although Core Blockchain, at this stage, is limited to mesh-style connectivity, using the internet, wifi, and Bluetooth, it is in the planning to have full mesh services deployed allowing the Core Blockchain to be completely borderless, reaching everyone.

## For developers

Core Blockchain creates an opportunity for every developer to participate in the creation and expansion of this new ecosystem. To simplify their work, extensive documentation has been made available to the public.

It contains all the necessary information on cryptography, and development modules, explains the Core tech stack, but also tackles advanced topics concerning more complex applications and use cases.

If you want to become a part of the Core open source community, feel free to connect, create new topics, add new content, and provide your suggestions on what could help the network run more smoothly or prove to be useful.

You can find all the documentation on the **[Dev Core Blockchain](https://dev.coreblockchain.net/)** portal and you can make any adjustments on the **[GItHub Core Blockchain.](https://github.com/core-coin)**

Similarly, you have the possibility to **[draft a Core Improvement Proposal](https://github.com/core-coin/cip/issues/new)** (CIP), which will detail suggestions for advancing improvements on the network or adding new features, and submit it on the **[official CIP portal](https://cip.coreblockchain.net/)**.

### Create your own CRC token

The Ylem Smart Contract Platform enables any company or an individual to create their own CRC token on the Core Blockchain. This functionality thus opens up countless opportunities for both inventors and investors. Not only does it provide you the possibility to create your own token but also to build your own DeFi app, on which you will use the CRC token.

How can you create your CRC token?

You can develop the CRC Smart Contract through the Ylem programming language. You will find all the necessary information and **[developer documentation](https://dev.coreblockchain.net/)** at the **[CIP portal](https://cip.coreblockchain.net/)**.

At the moment, Core Blockchain provides access for the developers to the **[Ylem Smart Contract Complier](https://github.com/core-coin/ylem)**, and in the near future, we are also preparing a developer support platform, which will not only include the Smart Contract Compiler but also a Test Platform and a Development Ecosystem.

### Help Us Find a Vulnerability and Be Rewarded

Core Blockchain's goal is to connect with experienced and responsible security researchers around the globe to further secure the blockchain environment.

That is why we have created a reward system for those who discover a bug. The researcher who finds it is entitled to a generous portion of the Core Coin (XCB) cryptocurrency, the amount of which depends on the degree of severity of the vulnerability reported.

We calculate rewards according to the OWASP risk rating model based on Impact and Likelihood.

| **Impact**   | **Severity**    | **Severity**    | **Severity**    |
|--------------|-----------------|-----------------|-----------------|
| **High**     | Moderate //S3// | High //S4//     | Critical //S5// |
| **Moderate** | Low //S2//      | Moderate //S3// | High //S4//     |
| **Low**      | Note //S1//     | Low //S2//      | Moderate //S3// |
|              | **Low**         | **Medium**      | **High**        |
|              | **Likelihood**  | **Likelihood**  | **Likelihood**  |

To make sure that the vulnerability you may have found is really harmful to Core Blockchain, read the **[Eligibility page](https://dev.coreblockchain.net/report/bug/)** where these bugs are reported.

## The ICAN Facilitates the Communication and Processing of the Transactions

We are introducing a standard for crypto addresses — ICAN — with HRP and checksum, similar to what is commonly facilitated with financial transactions. ICAN stands for International Crypto Account Number.

### Crypto Address consists of

- Crypto Identifier - CID (HRP)
- Checksum
- BCAN - Account address (Hexadecimal)

### Crypto Identifier (CID)

The Crypto Identifier (human-readable part) uniquely identifies the network. This part must contain 2 Hexadecimal characters. Currently Unassigned and Deleted ISO 3166-1 alpha-2 codes (opens new window) are available.

### Checksum

2 digits are calculated with modulo 97 from BCAN.

**Why did we choose modulo 97 (IBAN format)?**

- The possibility to catch ~99% of mistakes
- Easy to process/calculate
- Well known by financial institutions

**Calculation steps:**

1. Replace letters with numbers
1. Calculate the remainder of the Account number when divided by 97
1. Subtract the result from 98
1. If one number is returned, prefix it with "0"

### BCAN

BCAN (Basic Crypto Account Number) uniquely identifies the address and/or the identity of the owner. It contains 40 characters (20 bytes) of Blockchain address.

### Network classification

ISO 3166-1 alpha-2 codes.

Learn more about tickers, address structure, human and machine representation, or even implementations on the **[Core Improvement Proposal](https://cip.coreblockchain.net/cips/cip-100/)**.

## Ylem Smart Contract

Ylem is a statically-typed curly-brace programming language designed for developing smart contracts that run on the Core Virtual Machine. Smart contracts are programs that are executed inside a peer-to-peer network where nobody has special authority over the execution, and thus they allow to implement tokens of value, ownership, voting, and other kinds of logic.

## HD Wallets

A hierarchical deterministic wallet (or shortly HD wallet) is a modern type of cryptocurrency wallet that derives private keys from a seed. Unlike a legacy non-deterministic wallet, an HD wallet combines the flexibility of use, interoperability, and enhanced privacy with the advantage of a one-time backup.

Core Blockchain is the only programmable blockchain with this improved security and advanced cryptography that has implemented HD wallets.

## Core Coin and Mining

The mining of Core Coin (XCB) — Core Blockchain's native currency — is perhaps the most unique feature that defines the network. The Core Blockchain comes with a completely new mining algorithm, called the Proof of Distributed Efficiency (PoDE). It is historically the first time that a blockchain implements such a mechanism.

Distributed Efficiency relies on the fact that transactions are confirmed on a network in any location while using waste energy, grid energy, or any other form of energy production, or any of their combinations. Thus, it becomes environmentally friendly and self-sustainable.

A prime example of hardware that can function on PoDE is IoT devices that greatly benefit from using solar panels, power banks, battery packs, waste energy, and regenerative energy. Such technology is perfect for decentralized network environments and utilization possibilities, such as Smart Cities, home IoT devices, cars, trucks, yachts, planes, and others.

Implemented in order to enable the network to run while using only a small amount of energy, the unique Core Blockchain Network CryptOre algorithm is the reason why this is all possible.

**If you are convinced that you want to experience it and try it for yourself, download the mining software today and start participating in Core Blockchain.**

## You Are Welcome to Discuss Core Blockchain on the Core Talk Forum

Along with the Core Blockchain itself, we are happy to present the **[Core Talk Forum](https://coretalk.space/)** where you will be able to share your thoughts and comments on the network, as well as suggest improvements and present new ideas.

The basic principle of the Core Blockchain is that it is the people’s network. Therefore, we are thrilled that the Core Talk Forum will contribute to creating new communities, friendships, and projects.

We are happy that we can offer our community a place to unwind and socialize, bonding over this new exciting technology. Because at the end of the day, human beings are the only thing that truly matters.
