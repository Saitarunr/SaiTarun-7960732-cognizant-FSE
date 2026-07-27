# Exercise 2 — .gitignore

## Objectives
- Explain `.gitignore`
- Ignore unwanted files (`.log` files and a `log/` folder) using `.gitignore`

This exercise builds on the `GitDemo` repository from Exercise 1.

---

## Step 1: Create files that should be ignored

```bash
mkdir log
echo "log entry 1" > log/app.log
echo "some other log" > error.log
```

## Step 2: Confirm Git currently sees them as untracked

```bash
git status
```

### ✅ Actual output
```
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	error.log
	log/

nothing added to commit but untracked files present (use "git add" to track)
```

Right now, both `error.log` and the `log/` folder would show up if you ran `git add .`
— which is what we want to prevent.

## Step 3: Create a `.gitignore` file

```bash
echo "*.log" >> .gitignore
echo "log/" >> .gitignore
```

`.gitignore` content:
```
*.log
log/
```

- `*.log` ignores any file ending in `.log`, anywhere in the repo.
- `log/` ignores the entire `log` folder and everything inside it.

## Step 4: Verify git status now ignores those files/folders

```bash
git status
```

### ✅ Actual output
```
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore

nothing added to commit but untracked files present (use "git add" to track)
```

Notice `error.log` and `log/` **no longer appear** in the untracked files list — only
`.gitignore` itself shows up (since it's a new file we haven't committed yet). This
confirms the ignore rules are working correctly at all three levels: the **working
directory** (files still physically exist there), the **staging area** (they can't be
accidentally `git add`ed), and the eventual **local repository** (they'll never be
committed).

## Step 5: Commit the `.gitignore` file

```bash
git add .gitignore
git commit -m "Add .gitignore to ignore .log files and log folder"
git status
```

### ✅ Actual output
```
[master f1d3720] Add .gitignore to ignore .log files and log folder
 1 file changed, 2 insertions(+)
 create mode 100644 .gitignore

On branch master
nothing to commit, working tree clean
```

The working tree is clean — `error.log` and `log/` still exist on disk but Git no
longer tracks or reports them, exactly as intended.
