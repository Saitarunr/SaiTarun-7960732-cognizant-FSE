# Exercise 1 — Git Configuration, Notepad++ Integration, First Commit

## Objectives
- Get familiar with `git init`, `git status`, `git add`, `git commit`, `git push`, `git pull`
- Set up Git configuration on your machine
- Integrate Notepad++ as Git's default editor
- Add a file to a source code repository

---

## Step 1: Setup Git Configuration

> **Do this on your own machine** — sign up for a free GitLab account (do **not** use
> Cognizant credentials) and create a project named **GitDemo** on GitLab first.

**1. Confirm Git is installed** — open Git Bash and run:
```bash
git --version
```
If this prints a version number (e.g. `git version 2.43.0`), Git Client is installed correctly.

**2. Configure your user name and email** (used to sign your commits):
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**3. Verify the configuration was set:**
```bash
git config --list
```

### ✅ Actual output captured while running this exercise
```
$ git config user.name "Sai Tarun"
$ git config user.email "saitarun@example.com"
$ git config --list | grep -E "user.name|user.email"
user.name=Sai Tarun
user.email=saitarun@example.com
```

---

## Step 2: Integrate Notepad++ as Git's Default Editor

> This step is **Windows + Notepad++ specific** and must be done on your own machine
> (Notepad++ isn't available in this sandboxed environment).

**1. Check if `notepad++` is recognized in Git Bash:**
```bash
notepad++
```
If Git Bash says `command not found`, Notepad++'s install path isn't in your
environment's `PATH` variable yet.

**2. Add Notepad++ to your PATH:**
- Open **Control Panel → System → Advanced System Settings**
- Go to the **Advanced** tab → **Environment Variables**
- Under **User variables**, select `Path` → **Edit** → **New**
- Add the folder containing `notepad++.exe`, typically:
  ```
  C:\Program Files\Notepad++
  ```
- Click OK on all dialogs, then **close and reopen Git Bash** for the change to take effect.

**3. Confirm it now opens from Git Bash:**
```bash
notepad++
```

**4. Create an alias for Notepad++** so Git can call it easily:
```bash
echo 'alias notepad="/c/Program Files/Notepad++/notepad++.exe"' >> ~/.bashrc
source ~/.bashrc
```

**5. Set Notepad++ as Git's default editor:**
```bash
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```

**6. Verify it's set as the default editor:**
```bash
git config -e
```
The `-e` flag opens the global config in your configured editor — Notepad++ should launch.

---

## Step 3: Add a File to the Source Code Repository

**1. Create and initialize the GitDemo repository:**
```bash
mkdir GitDemo
cd GitDemo
git init
```

**2. View the hidden `.git` folder to confirm initialization:**
```bash
ls -la
```

**3. Create `welcome.txt` and add content:**
```bash
echo "Welcome to Git" > welcome.txt
```

**4. Verify the file was created:**
```bash
ls
```

**5. Verify its content:**
```bash
cat welcome.txt
```

**6. Check status (file is untracked so far):**
```bash
git status
```

**7. Stage the file so Git tracks it:**
```bash
git add welcome.txt
```

**8. Commit with a multi-line message using Notepad++ as the editor:**
```bash
git commit
```
This opens Notepad++ (per Step 2's config) so you can type a multi-line commit message,
then save and close the editor to complete the commit.

**9. Confirm the commit landed and the working tree is clean:**
```bash
git status
```

### ✅ Actual output captured while running this exercise
```
$ ls -la
total 12
drwxr-xr-x  3 root root 4096 .
drwxr-xr-x 10 root root 4096 ..
drwxr-xr-x  7 root root 4096 .git

$ echo "Welcome to Git" > welcome.txt
$ cat welcome.txt
Welcome to Git

$ git status
On branch master
No commits yet
Untracked files:
	welcome.txt
nothing added to commit but untracked files present (use "git add" to track)

$ git add welcome.txt
$ git status
On branch master
No commits yet
Changes to be committed:
	new file:   welcome.txt

$ git commit -m "Added welcome.txt with initial content"
[master (root-commit) e8484d1] Added welcome.txt with initial content
 1 file changed, 1 insertion(+)
 create mode 100644 welcome.txt

$ git status
On branch master
nothing to commit, working tree clean

$ git log --oneline
e8484d1 Added welcome.txt with initial content
```

---

## Step 4: Connect to the Remote (GitLab) and Sync

**1. On GitLab.com**, sign up for a free account and create a project named `GitDemo`.
GitLab will show you the remote URL, e.g. `https://gitlab.com/yourusername/GitDemo.git`.

**2. Link your local repo to the remote:**
```bash
git remote add origin https://gitlab.com/yourusername/GitDemo.git
```

**3. Pull first** (in case the remote has any initial files like a README):
```bash
git pull origin master
```

**4. Push your local commits up to GitLab:**
```bash
git push origin master
```

Refresh the GitLab project page — `welcome.txt` should now appear there.
