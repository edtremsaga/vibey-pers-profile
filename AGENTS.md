# Codex Rules for vibey pers profile

## Working Autonomy

A user request to perform work authorizes the routine, reversible steps needed to complete it. Briefly explain the intended changes, then proceed without waiting for another confirmation.

Within the agreed scope, proceed with:
- Reading files and inspecting repository metadata, status, history, and diffs.
- Editing source, configuration, documentation, and project assets.
- Creating files and folders needed for the request.
- Running local previews, linting, builds, type checks, and appropriate tests.
- Reviewing results and fixing issues introduced by the current task.
- Read-only troubleshooting and stopping specific commands started for the task.

Keep the user informed of meaningful progress and blockers. Ask questions only when missing information materially affects the result and cannot reasonably be inferred.

## Preserve Existing Work

- Preserve unrelated edits and untracked files.
- Do not delete files or directories, discard changes, or run destructive cleanup without explicit approval. This includes generated files, caches, build artifacts, and Git metadata.
- Do not reset, clean, stash, restore, switch branches, rebase, merge, or otherwise replace or hide existing work without explicit approval.
- Ordinary edits to files within the user's requested scope are authorized; this does not authorize discarding unrelated content or changes.

## Repository Identity and Freshness

Before editing an existing project, verify the canonical folder, remote URL, current branch, HEAD, and working-tree status. Fetch remote refs when available and check the relationship to the intended remote branch.

- Do not choose another clone, checkout, branch, or worktree without authorization.
- If a remote check fails, report the limitation once. Request one approval to continue with the current local state if that exception has not already been authorized; do not repeatedly request it during the same task unless material circumstances change.
- If local and remote history differ unexpectedly, report the discrepancy and stop before implementation or synchronization until the user approves a concrete next step. Expected task-created commits awaiting an authorized push are not an unexpected discrepancy.
- A stale cached remote-tracking ref is not evidence of divergence when a direct remote check has verified the actual remote state. Explain that distinction when relevant.
- Never automatically reconcile divergent history or overwrite remote work.

## Troubleshooting

Investigate failures using focused, read-only checks without additional approval. Stop specific hung commands started for the task and report useful findings.

Do not use deletion, cache cleanup, dependency changes outside the agreed scope, Git repairs, or changes to account or system settings as unapproved troubleshooting shortcuts. Ask before a repair that removes, moves, replaces, or materially alters existing work or repository metadata, or requires a different checkout.

For OneDrive or other synchronization issues, preserve the checkout and diagnose the cause before proposing repairs.

## Publishing and External Actions

- Commit, push, deploy, publish, or create a pull request only when explicitly authorized by the user. Authorization for one does not automatically authorize the others.
- Once an action is authorized, complete its routine prerequisites and execute it without asking again unless its scope changes or a new material risk appears.
- If the user requests local visual review before publishing, wait for that review and explicit publishing authorization.
- Ask before sending messages, changing third-party account settings, making purchases, incurring charges, exposing private information, or granting new access unless the specific action is already explicitly authorized.

## Approval Behavior

- Do not ask for approval for routine tool use when the underlying action is already authorized.
- Carry the user's authorization and preferences forward within the task.
- Bundle related consequential actions into one concrete, reviewable approval request.
- Explain exactly what requires approval, why, and which instruction or permission boundary requires it.
- Mandatory tool or platform permission prompts may still occur; do not bypass them or claim they can be disabled by this file.

## Project Scope

- Project: vibey pers profile.
- Do not add features outside the agreed scope.
- Missing data means "not documented", not an error.

## Policy Scope

This project workflow replaces the previous blanket requirement to explain and wait before every code change. It permits routine requested work while preserving explicit approval for publishing, destructive actions, and consequential exceptions. Other applicable safety instructions remain in effect.
