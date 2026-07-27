Exercise 1 - Git Config, Notepad++ setup, first commit

Objectives:
- get comfortable with git init, git status, git add, git commit, git push, git pull
- set up git config on my machine
- get notepad++ working as the default editor
- add a file to a repo

Note: signed up for GitLab with my personal email, not my Cognizant login (as instructed).

--- Step 1: Git config ---

first checked git was actually installed:

    git --version

got back a version number so that's fine.

then set my name and email so commits are signed properly:

    git config --global user.name "Sai Tarun"
    git config --global user.email "saitarun@example.com"

checked it stuck:

    git config --list

output showed:
user.name=Sai Tarun
user.email=saitarun@example.com

--- Step 2: notepad++ as default editor ---

tried running notepad++ straight from git bash first:

    notepad++

didn't work - "command not found". means the exe isn't in PATH yet.

fix: Control Panel -> System -> Advanced system settings -> Environment Variables ->
found Path under user variables -> Edit -> New -> pasted in
C:\Program Files\Notepad++

closed git bash and reopened it (needed to do this for the PATH change to actually
take effect), tried again and it opened fine this time.

made an alias so I don't have to type the whole path every time:

    echo 'alias notepad="/c/Program Files/Notepad++/notepad++.exe"' >> ~/.bashrc
    source ~/.bashrc

set it as git's actual default editor:

    git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"

double checked with:

    git config -e

(-e = editor) - this opened notepad++ showing the full global config, confirms it's
wired up correctly.

--- Step 3: add a file to the repo ---

made the folder and initialized:

    mkdir GitDemo
    cd GitDemo
    git init

ls -la showed the hidden .git folder so init worked.

created welcome.txt:

    echo "Welcome to Git" > welcome.txt

confirmed it exists with ls, and checked the content with cat welcome.txt - just
prints "Welcome to Git".

ran git status before adding anything - shows welcome.txt as untracked, git
suggesting to use "git add" to track it.

staged it:

    git add welcome.txt

status again shows it under "Changes to be committed" now.

commit (used git commit with no -m so notepad++ pops up and I can type a longer
message):

    git commit

typed a multi-line message in notepad++, saved, closed - commit went through.

ran git status one more time - "nothing to commit, working tree clean", so we're good.

--- Step 4: connect to GitLab and push ---

signed up on gitlab.com, made a new project called GitDemo. GitLab gives you the
remote URL right after creating it.

    git remote add origin https://gitlab.com/yourusername/GitDemo.git
    git pull origin master
    git push origin master

pulled first just in case GitLab auto-created anything like a README, then pushed.
refreshed the GitLab page after and welcome.txt was there.
