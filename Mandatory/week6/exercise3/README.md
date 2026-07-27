# Exercise 3 — Branching and Merging

## Objectives
- Explain branching and merging
- Create a branch request and a merge request in GitLab
- Create a branch, make changes, and merge it back into master

This exercise continues in the `GitDemo` repository from Exercises 1 & 2.

---

## Branching

### 1. Create a new branch

```bash
git branch GitNewBranch
```

### 2. List all local and remote branches, note the `*` on the current branch

```bash
git branch -a
```
### ✅ Actual output
```
  GitNewBranch
* master
```
The `*` marks `master` as the branch you're currently on — `GitNewBranch` exists but
you haven't switched to it yet.

### 3. Switch to the new branch and add a file

```bash
git checkout GitNewBranch
echo "This file was added on the feature branch" > feature.txt
```

### 4. Commit the change on the branch

```bash
git add feature.txt
git commit -m "Add feature.txt on GitNewBranch"
```

### 5. Check status

```bash
git status
```
### ✅ Actual output
```
Switched to branch 'GitNewBranch'
[GitNewBranch f497ca1] Add feature.txt on GitNewBranch
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt

On branch GitNewBranch
nothing to commit, working tree clean
```

---

## Merging

### 1. Switch back to master

```bash
git checkout master
```

> To make this a realistic merge (not just a fast-forward), master also picked up its
> own commit in the meantime:
> ```bash
> echo "Master-only update" >> welcome.txt
> git add welcome.txt
> git commit -m "Update welcome.txt on master"
> ```
> This means master and `GitNewBranch` have now **diverged** — exactly the scenario a
> real merge/merge-request handles.

### 2. List differences between master and the branch (command line)

```bash
git diff master GitNewBranch
```
### ✅ Actual output
```
diff --git a/feature.txt b/feature.txt
new file mode 100644
--- /dev/null
+++ b/feature.txt
@@ -0,0 +1 @@
+This file was added on the feature branch
diff --git a/welcome.txt b/welcome.txt
--- a/welcome.txt
+++ b/welcome.txt
@@ -1,2 +1 @@
 Welcome to Git
-Master-only update
```

### 3. Visual diff with P4Merge (Windows tool)

> This requires P4Merge installed on your machine. Configure it once with:
> ```bash
> git config --global diff.tool p4merge
> git config --global difftool.p4merge.cmd "p4merge \$LOCAL \$REMOTE"
> ```
> Then launch the visual diff with:
> ```bash
> git difftool master GitNewBranch
> ```

### 4. Merge the branch into master

```bash
git merge GitNewBranch -m "Merge GitNewBranch into master"
```
### ✅ Actual output
```
Merge made by the 'ort' strategy.
 feature.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt
```

### 5. Observe the log after merging

```bash
git log --oneline --graph --decorate --all
```
### ✅ Actual output
```
*   f5091ec (HEAD -> master) Merge GitNewBranch into master
|\
| * f497ca1 (GitNewBranch) Add feature.txt on GitNewBranch
* | b7a1002 Update welcome.txt on master
|/
* f1d3720 Add .gitignore to ignore .log files and log folder
* e8484d1 Added welcome.txt with initial content
```
You can clearly see the branch diverge from master, then rejoin at the merge commit
`f5091ec`.

### 6. Delete the branch after merging, and confirm status

```bash
git branch -d GitNewBranch
git status
git branch -a
```
### ✅ Actual output
```
Deleted branch GitNewBranch (was f497ca1).

On branch master
nothing to commit, working tree clean

* master
```
`GitNewBranch` is gone (Git only allows `-d` to delete a branch that's fully merged,
protecting you from losing unmerged work), and `master` now contains everything from
both histories.

---

## In GitLab: Branch & Merge Requests

The command-line steps above are what a **Merge Request (MR)** in GitLab does under
the hood. To do the same thing through GitLab's UI instead of the CLI:

1. Push `GitNewBranch` to GitLab: `git push origin GitNewBranch`
2. On GitLab, go to your project → **Merge Requests** → **New merge request**
3. Select `GitNewBranch` as the source and `master` as the target
4. Review the diff GitLab shows you, add a description, and click **Merge**
5. Optionally check "Delete source branch" so GitLab cleans up `GitNewBranch` for you
   on the remote after merging.
