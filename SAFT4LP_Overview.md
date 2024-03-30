# SAFT for Liquidity Providers (SAFT4LP) Implementation Plan

## Overview

This document details the strategy and technical considerations for the implementation of the SAFT4LP smart contract, designed to incentivize Liquidity Providers (LPs) on the Solana blockchain.

## Token Allocation Strategy

- **Initial Minting**: All 1.6 trillion tokens will be minted upfront, with 90% allocated to the community wallet and the remaining 10% to the development wallet.
- **LP Allocation**: 10% of the development wallet's tokens are designated for LPs as an incentive for providing liquidity.

## LP Contribution Tiers and Dynamic Lock-Up Periods

- LPs will be incentivized to lock up a minimum of 5 SOL to a maximum of 20 SOL.
- The lock-up period dynamically adjusts based on the amount of SOL committed:
    - 5 SOL for a 6-month lock-up.
    - 10 SOL for a 4-month lock-up.
    - 20 SOL for a 3-month lock-up.
- These tiers aim to encourage higher contributions by offering shorter lock-up periods for larger amounts.

## Process From Interest to LP Participation

1. **LP Portal Registration**: Potential LPs register their interest through an LP portal, agreeing to the SAFT terms and specifying their SOL contribution.
2. **Lock-Up and Token Allocation**:
    - The LP locks up the specified SOL amount in the liquidity pool via the portal.
    - Based on the SOL contribution, the smart contract automatically assigns the LP to the appropriate tier and initiates the lock-up period starting from the project's launch date.
3. **`GeozeLP` Token Issuance**:
    - LPs receive `GeozeLP` tokens equivalent to their SOL contribution's value in project tokens, locked for the duration determined by their contribution tier.
    - The `GeozeLP` tokens are minted by the smart contract and allocated to the LP's wallet.

## Lockup and Vesting Periods

- **Lockup Start**: The lockup for all LP tokens begins on the project's launch date, 2024.4.24, providing a uniform start for all participants.
- **Vesting Schedule**: Post-lockup, LPs can convert a maximum of 10% of their `GeozeLP` tokens into actual tokens per week.

## Technical Solutions

- **`GeozeLP` Token**: A separate `GeozeLP` token will be minted to represent the right to claim the actual tokens post-lockup.
- **LP Wallet**: An LP wallet will be managed by the smart contract, storing the LPs' funds and governing access based on the lockup and vesting terms.

(continued in the same structure as previously outlined...)
