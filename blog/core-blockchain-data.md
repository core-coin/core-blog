---
title: Synchronizing Core Blockchain Data on an External Drive
author: Rastislav Vašička
date: 2025-01-24
lang: en-US
categories:
  - Guide
tags:
  - core
  - blockchain
  - guide
  - synchronization
  - external-drive
  - data
image: /img/blog/synchronizing-core-blockchain-data.png
---
![Synchronizing Core Blockchain Data on an External Drive](/img/blog/synchronizing-core-blockchain-data.png "Synchronizing Core Blockchain Data on an External Drive")

Synchronizing Core Blockchain data on an external drive is excellent for maintaining portability, managing storage efficiently, or keeping a backup of the blockchain data.

<!--truncate-->

By using an external SSD or hard drive, you can carry your blockchain node anywhere and connect it to any computer to resume syncing or access the data. While this approach provides flexibility, there are also trade-offs to consider. External drives—especially SSDs—can be significantly slower than internal storage like an SD card, which can make syncing up to three times slower. Additionally, you must ensure that syncing resumes whenever the external drive is connected, as the blockchain grows continuously.

If having an external storage of synchronized Core Blockchain data sounds interesting to you, here’s a comprehensive guide on how to store Core Blockchain data on an external drive for *Testnet (Devin)* or *Mainnet*.

## Why Should You Use an External Drive

Advantages:

- **Portability:** Carry your blockchain data anywhere and connect it to another machine to continue syncing.
- **Storage Management:** Offload large blockchain data from your internal storage, which might not have enough space.
- **Backup:** An external drive serves as a secondary storage solution in case of internal drive failure.

Disadvantages:

- **Performance:** External SSDs are slower compared to internal storage (e.g., SD cards or NVMe drives), leading to longer synchronization times.
- **Dependency:** You must always ensure the drive is connected to sync or access the blockchain data.
- **Durability:** Frequent plugging/unplugging can wear out ports and connectors over time.

## How to Set Up Synchronization on an External Drive

1. Prepare the External Drive
   1. Choose the Right File System
      - **macOS** Format the drive as *APFS* or *MacOS Extended (Journaled)*.
      - **Windows** Use *NTFS*.
      - **Linux** Use *ext4*.
      - Avoid exFAT or FAT32, as they do not support features like Unix sockets, which are crucial for blockchain nodes.
   2. Format the Drive
      - **macOS**
        - Open *Disk Utility*.
        - Select your external drive from the sidebar.
        - Click *Erase*.
        - Choose *APFS* or *MacOS Extended (Journaled)* and click *Erase*.
      - **Windows**
        - Open *Disk Management*.
        - Right-click the external drive and choose *Format*.
        - Select *NTFS* and complete the formatting process.
      - **Linux**
        - Use `mkfs.ext4` to format the drive
        - Command: `sudo mkfs.ext4 /dev/sdX`
        - Replace `/dev/sdX` with your external drive identifier.
2. Find the Route to the External Volume
   1. **macOS**
      - Open Terminal and run: `df -h`
      - Look for the external drive under the *Mounted on* column, e.g., `/Volumes/Blockchain`.
      - Commonly it is the name of your disk drive.
   2. **Windows**
      - Open File Explorer and note the drive letter (e.g., `E:\`).
   3. **Linux**
      - Open Terminal and run: `lsblk`
      - Identify your external drive (e.g., `/mnt/blockchain`).
3. Synchronize Blockchain Data
   - Use the following commands to start syncing your blockchain data to the external drive. Replace `/Volumes/Blockchain/Devin` or `/Volumes/Blockchain/Mainnet` with the actual path to your external drive.
   1. **Testnet (Devin)**
      - Command: `./gocore --verbosity 2 --nat any console --datadir /Volumes/Blockchain/Devin --devin`
   2. **Mainnet**
      - Command: `./gocore --verbosity 2 --nat any console --datadir /Volumes/Blockchain/Mainnet`
        - `--datadir` Specifies the location to store blockchain data (your external drive).
        - `--devin` or `--mainnet` Specifies the network to sync.
        - `--verbosity 2` Adjusts the logging level for better visibility.
        - `--nat any` The option tells the node to auto-detect the NAT environment and use any available method to determine its external IP and port.
        - `--console` Launches the interactive JavaScript console for the node.
4. Monitor Synchronization
   - After starting Gocore, you can check the synchronization status using the console command: `xcb.syncing`
     - If synchronization is in progress, the output will display syncing details such as the block height.
     - If synchronization is complete, it will return `false`.
5. Store your SSD in a safe and accessible place
   - Place your synchronized blockchain data in a safe and accessible location, such as a [3D-printed SSD holder](https://www.thingiverse.com/thing:6785406), or simply a sturdy spot where the SSD is not likely to get damaged.

## What You Can Gain from Holding Blockchain Data

1. **Full Node Functionality:** By maintaining a fully synchronized node, you contribute to the decentralization and security of the blockchain.
2. **Access to Historical Data:** A synced node allows you to query historical blockchain data directly from your local storage.
3. **Independence:** Avoid relying on third-party services like public RPC endpoints, ensuring privacy and control.
4. **Portability:** With the data on an external drive, you can easily connect to different machines and continue where you left off.

## Conclusion

Storing Core Blockchain data on an external drive can be a practical solution for those who require flexibility, portability, or additional storage capacity. Although syncing may take longer compared to internal drives, the ability to access your blockchain data from different devices and locations adds significant convenience. With a proper setup and a compatible file system, you can ensure reliable performance and maintain a robust backup of your data.
