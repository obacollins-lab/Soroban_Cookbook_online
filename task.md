# Documentation: Designing Robust Custom Types in Contracts

## Session Manifest
You are an expert technical writer and smart contract engineer. You write clear, authoritative guides for intermediate developers that balance conceptual depth with practical, copy-pasteable examples. You favor explicit trade-off analysis over dogmatic rules. You must follow the **Plan → Review → Execute** workflow.

## Global Constraints
- **NEVER** push to `main` directly. Branch: `docs/contract-types-guide`.
- **NEVER** commit generated assets or draft files outside the final guide location.
- Match existing documentation style (tone, formatting, code block conventions, heading hierarchy).
- All code examples must compile against the project's current contract SDK version.
- Cite or link to relevant source files where patterns are already used in the codebase.
- Run documentation linters (markdownlint, Vale, or project equivalents) before finalizing.

## Mandatory Workflow
1. **Discover**: Read the issue, existing contract type definitions, serialization utilities, and current developer guides.
2. **Propose**: Post a detailed outline and **STOP** for maintainer review.
3. **Execute**: Only after receiving explicit "approved" or "LGTM".
4. **Validate**: Verify all code examples compile; paste a summary of the validation.
5. **Deliver**: Open a PR with `Closes #<issue-number>` and full verification steps.

---

## Issue Context
- **Type**: Documentation
- **Area**: Developer Guides / Smart Contracts
- **Complexity**: Medium
- **Impact**: Contract reliability and developer onboarding quality

### Objective
Write a comprehensive guide that teaches intermediate developers how to design robust custom types and data structures in contracts.

### Scope
- **Modeling strategies**: How to translate domain concepts into contract storage types.
- **Serialization implications**: How type choices affect contract size, gas costs, and cross-contract call compatibility.
- **Common patterns**: Practical `struct` and `enum` designs with examples.
- **Validation**: Defensive type design and input sanitization at the boundary.
- **Migration considerations**: How to evolve types without breaking existing contract state.

### Audience
Intermediate developers who understand basic contract syntax but need guidance on designing maintainable, efficient data layers.

---

## Plan Requirements (Post This First)

Before writing, present a detailed outline covering:

1. **Guide Structure**
   - Proposed table of contents with heading hierarchy (H2 sections, H3 subsections).
   - Estimated length and reading time.
   - Placement in the documentation tree (file path, sidebar position).

2. **Code Examples Inventory**
   - List of every code example you will include (e.g., "Basic struct with derives," "Enum with state machine pattern," "Nested type with manual serialization").
   - For each, note whether it already exists in the codebase or must be drafted fresh.

3. **Modeling Strategies**
   - How you will explain the storage-vs-memory distinction.
   - How you will demonstrate mapping domain entities to contract types (value objects, aggregates, state machines).

4. **Serialization Deep Dive**
   - How type choices affect XDR/contract serialization size.
   - When to use derived vs. manual `Serialize`/`Deserialize` implementations.
   - How to handle backward-compatible schema evolution (versioned enums, optional fields, migration wrappers).

5. **Struct/Enum Patterns**
   - Common patterns you will cover (newtype wrappers for safety, state-machine enums, error types, config structs).
   - For each pattern: when to use it, when to avoid it, and a minimal example.

6. **Validation & Boundaries**
   - How to validate at construction time vs. at entry points.
   - How to design types that make illegal states unrepresentable.
   - Examples of `RegexValidator`-equivalent patterns or numeric range types.

7. **Migration Considerations**
   - How to handle type changes when contract state is immutable.
   - Strategies: versioned state wrappers, lazy migration, explicit state upgrade functions.
   - Trade-offs between storage cost and migration complexity.

8. **Validation Strategy (Docs)**
   - How you will ensure code examples compile (inline Rust tests, CI job, or manual `cargo check`).
   - How you will verify external links and cross-references.
   - Target readability score or linting rules.

---

## Execution Rules

After plan approval:

- [ ] Draft the guide with clear conceptual explanations suitable for intermediate users.
- [ ] Provide practical code examples for every pattern discussed; ensure they compile.
- [ ] Document trade-offs explicitly (e.g., storage cost vs. readability, strict types vs. flexibility).
- [ ] Cover modeling strategies, serialization implications, struct/enum patterns, validation, and migration.
- [ ] Include a "Common Pitfalls" or "Anti-patterns" sidebar section if space permits.
- [ ] Do not introduce placeholder sections; all headings must have substantive content.
- [ ] Do not couple unrelated concepts into this PR.
- [ ] PR description must include:
  - `Closes #<issue-number>`
  - Table of contents of the final guide
  - Validation steps confirming code examples compile
  - Any new dependencies or dev-dependencies added for example validation

## Suggested Validation

Run these and include a summary in the PR:

```bash
# If examples are in Rust doc tests or inline
cargo test --doc
cargo check

# Or if examples are in a separate examples/ directory
cargo build --examples

# Documentation linting
vale docs/
# or
markdownlint docs/
```

For manual review:
- Read the guide as an intermediate developer and verify each example is copy-pasteable.
- Verify all cross-references to existing contract source files are accurate.
- Confirm no broken internal links or missing headings.

## Acceptance Criteria
- [ ] Concepts are clearly explained with examples.
- [ ] Trade-offs and best practices are documented.
- [ ] Guide is suitable for intermediate users (assumes basic contract knowledge, explains design rationale).
- [ ] All code examples compile against the current SDK version.
- [ ] Implementation is complete and merge-ready (no placeholder sections).
- [ ] Reviewer can verify behavior without guesswork.

## Commit Message
```
docs: Add guide for designing robust custom contract types

- Covers modeling strategies and storage-serialization trade-offs
- Provides common struct, enum, and validation patterns with examples
- Includes state migration and schema evolution considerations
- Targets intermediate developers with copy-pasteable code samples
- Validates all examples compile against current contract SDK

Closes #<issue-number>
```

---

## Context Discovery Checklist
Before proposing your plan, confirm you have read:
- [ ] Existing contract source files defining custom types, structs, and enums.
- [ ] Current developer guides or README sections on type design or storage.
- [ ] Serialization utilities or derive macros used in the project (e.g., `soroban-sdk` types, custom XDR).
- [ ] Any existing migration patterns or versioned state examples in the codebase.
- [ ] Documentation style guide or template (heading conventions, code block labels, tone).
- [ ] CI configuration for documentation or example compilation checks.