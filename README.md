# Foundational-Security-Concepts
Learn how to use cryptographic hashing to verify file integrity. While file permissions can prevent unauthorized users from modifying a file, they don't protect against accidental changes by an authorized user or more sophisticated attacks.

A hash function creates a unique digital fingerprint (a fixed-length string of characters) for a file. Even a one-bit change in the file will produce a completely different hash, making it an excellent tool for detecting tampering. We will use the sha256sum command, a standard and secure hashing tool in Linux.
