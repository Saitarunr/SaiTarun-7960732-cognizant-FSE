# Exercise 4 — Merge Conflict Resolution

## Objectives
- Resolve a merge conflict when both master and a branch modify the same content

This exercise continues in the `GitDemo` repository from Exercises 1–3.

---

### 1. Verify master is clean

```bash
git status
```
```
On branch master
nothing to commit, working tree clean
```

### 2. Create branch `GitWork`, add `hello.xml`

```bash
git checkout -b GitWork
```
```xml
<config>
  <version>1.0</version>
</config>
```
```bash
git add hello.xml
git commit -m "Add hello.xml on GitWork branch"
```

### 3. Update `hello.xml` content on `GitWork`, observe status, commit

```bash
git status   # shows "modified: hello.xml"
git add hello.xml
git commit -m "Update hello.xml on GitWork branch"
```
Content on `GitWork` after this commit:
```xml
<config>
  <version>2.0</version>
  <branchNote>Updated on GitWork branch</branchNote>
</config>
```

### 4. Switch to master, add a *different* `hello.xml`

```bash
git checkout master
```
```xml
<config>
  <version>3.0</version>
  <masterNote>Updated directly on master</masterNote>
</config>
```
```bash
git add hello.xml
git commit -m "Add different hello.xml content on master"
```

Now both `master` and `GitWork` have a `hello.xml` with different content — a classic
setup for a conflict.

### 5. Observe the divergent log

```bash
git log --oneline --graph --decorate --all
```
### ✅ Actual output
```
* 928fc8b (HEAD -> master) Add different hello.xml content on master
| * d72aa56 (GitWork) Update hello.xml on GitWork branch
| * 0a7cc98 Add hello.xml on GitWork branch
|/
*   f5091ec Merge GitNewBranch into master
...
```

### 6. Check differences with `git diff`

```bash
git diff master GitWork -- hello.xml
```
### ✅ Actual output
```diff
--- a/hello.xml
+++ b/hello.xml
@@ -1,4 +1,4 @@
 <config>
-  <version>3.0</version>
-  <masterNote>Updated directly on master</masterNote>
+  <version>2.0</version>
+  <branchNote>Updated on GitWork branch</branchNote>
 </config>
```

### 7. Visual diff with P4Merge

```bash
git difftool master GitWork -- hello.xml
```
(Requires P4Merge configured as in Exercise 3 — shows the same diff side-by-side visually.)

### 8. Merge `GitWork` into master — triggers the conflict

```bash
git merge GitWork -m "Merge GitWork into master"
```
### ✅ Actual output
```
Auto-merging hello.xml
CONFLICT (add/add): Merge conflict in hello.xml
Automatic merge failed; fix conflicts and then commit the result.
```

`git status` at this point:
```
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
	both added:      hello.xml
```

### 9. Observe Git's conflict markers in the file

```bash
cat hello.xml
```
### ✅ Actual output
```xml
<config>
<<<<<<< HEAD
  <version>3.0</version>
  <masterNote>Updated directly on master</masterNote>
=======
  <version>2.0</version>
  <branchNote>Updated on GitWork branch</branchNote>
>>>>>>> GitWork
</config>
```
Everything between `<<<<<<< HEAD` and `=======` is master's version; everything between
`=======` and `>>>>>>> GitWork` is the branch's version.

### 10. Resolve with a 3-way merge (manually combine both sides)

Edit `hello.xml`, remove the conflict markers, and keep whatever combination makes
sense — here, both notes were kept:
```xml
<config>
  <version>3.0</version>
  <masterNote>Updated directly on master</masterNote>
  <branchNote>Updated on GitWork branch</branchNote>
</config>
```
> In practice you'd do this resolution inside P4Merge's 3-way merge view, which shows
> **base / local / remote** panes side by side and lets you pick lines visually instead
> of hand-editing markers.

### 11. Stage the resolution and complete the merge commit

```bash
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml: keep both master and GitWork changes"
git status
```
### ✅ Actual output
```
[master d35d2e7] Resolve merge conflict in hello.xml: keep both master and GitWork changes

On branch master
nothing to commit, working tree clean
```

### 12. Clean up merge backup files with `.gitignore`

Some merge tools leave `.orig` / `.bak` backup files behind. Ignore them:
```bash
git status              # shows hello.xml.bak, hello.xml.orig as untracked
echo "*.orig" >> .gitignore
echo "*.bak" >> .gitignore
git status              # backup files no longer listed
git add .gitignore
git commit -m "Ignore merge backup files (.orig, .bak)"
```

### 13. List all branches, delete the merged branch, view final log

```bash
git branch -a
git branch -d GitWork
git log --oneline --graph --decorate
```
### ✅ Actual output
```
Deleted branch GitWork (was d72aa56).

* 5c8a6b7 (HEAD -> master) Ignore merge backup files (.orig, .bak)
*   d35d2e7 Resolve merge conflict in hello.xml: keep both master and GitWork changes
|\
| * d72aa56 Update hello.xml on GitWork branch
| * 0a7cc98 Add hello.xml on GitWork branch
* | 928fc8b Add different hello.xml content on master
|/
*   f5091ec Merge GitNewBranch into master
...
```
The graph clearly shows both `master`'s and `GitWork`'s independent commits, joining
at the conflict-resolution merge commit `d35d2e7`.
