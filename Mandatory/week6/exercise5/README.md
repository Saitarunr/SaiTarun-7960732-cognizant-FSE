# Exercise 5 — Clean Up and Push Back to Remote

## Objectives
- Clean up local work and push it back to the remote repository

This is the wrap-up step after Exercise 4's conflict resolution. It requires your
actual GitLab remote (set up in Exercise 1), so run these on your own machine inside
the `GitDemo` folder.

---

### 1. Verify master is in a clean state

```bash
git status
```
Expected:
```
On branch master
nothing to commit, working tree clean
```
If this shows anything else, finish committing or stashing your changes before continuing.

### 2. List all available branches

```bash
git branch -a
```
By this point in the series, `GitNewBranch` and `GitWork` have already been deleted
locally (Exercises 3 & 4), so you should only see `master`:
```
* master
```

### 3. Pull the remote repository into master

```bash
git pull origin master
```
This fetches and merges any changes that exist on GitLab but not locally yet — for
example, if you made any edits directly in the GitLab web UI, or if a teammate pushed
changes. If your local and remote are already in sync, Git will simply report
`Already up to date.`

### 4. Push the pending changes from Exercises 3 & 4 up to the remote

```bash
git push origin master
```
This uploads all the local commits made since your last push — the branch merge from
Exercise 3, and the conflict-resolution merge from Exercise 4 — to your GitLab
`GitDemo` project.

### 5. Confirm the changes reflect on the remote

Open your `GitDemo` project on GitLab in the browser and check:
- The **commit history** shows all the merge commits from Exercises 3 & 4
  (e.g. "Merge GitNewBranch into master", "Resolve merge conflict in hello.xml...")
- The **file list** shows `welcome.txt`, `feature.txt`, `hello.xml`, and `.gitignore`
- `error.log` and the `log/` folder from Exercise 2 do **not** appear (correctly ignored)

If all of that matches, your local and remote repositories are fully in sync and this
lab series is complete.
