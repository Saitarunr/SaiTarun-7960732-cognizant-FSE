# Week 6 — Git Fundamentals

Five hands-on exercises covering Git from setup through conflict resolution.

| # | Exercise | Covers |
|---|----------|--------|
| 1 | `exercise1/` | Git configuration, Notepad++ as default editor, first commit, connecting to a GitLab remote |
| 2 | `exercise2/` | `.gitignore` — ignoring `.log` files and a `log/` folder |
| 3 | `exercise3/` | Branching, diffing, merging, GitLab merge requests |
| 4 | `exercise4/` | Resolving a real merge conflict (3-way merge), `.gitignore` for backup files |
| 5 | `exercise5/` | Final clean-up: `git pull` + `git push` back to the remote |

## How this was built

Exercises 2, 3, and 4 were actually executed end-to-end in a real Git repository
(`GitDemo`) to capture genuine command output — branches were created, a real merge
conflict was triggered and resolved by hand, and the resulting commit graphs were
recorded. That real output is embedded in each exercise's `README.md` under
"✅ Actual output" so you can compare it against what you see when you run the same
commands yourself.

Exercises 1 and 5 include steps that are specific to your own machine and GitLab
account (installing Notepad++, signing up for GitLab, pushing to your personal
remote) — those are written as precise command sequences to follow rather than
something that could be pre-executed here.

`exercise5/final-repo-snapshot/` contains the plain end-state files
(`welcome.txt`, `feature.txt`, `hello.xml`, `.gitignore`) from the demo repo, with no
`.git` folder included, so you can drop them into your own repo if you want to compare
your working directory to the finished state.

## Running this yourself

1. Open **Git Bash** (or your terminal of choice).
2. Work through `exercise1/README.md` first — it sets up Git config, Notepad++, and
   your GitLab `GitDemo` project.
3. Continue in order through `exercise2` → `exercise5`, running the commands shown
   in each README inside the same `GitDemo` folder you created in Exercise 1.
