# Security Specification

## Data Invariants
- An Avatar cannot exist without a valid User ID that belongs to the user.

## The "Dirty Dozen" Payloads
(Example: Attempting to create an avatar with another user's ID)
{ "userId": "attacker_id", "modelUrl": "...", "createdAt": "..." }

## Test Runner
(Placeholder for firestore.rules.test.ts)
