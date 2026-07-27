Exercise 2 - .gitignore

Objectives:
- understand what .gitignore does
- use it to keep .log files and a log folder out of the repo

continuing in the same GitDemo repo from exercise 1.

--- creating stuff that should get ignored ---

    mkdir log
    echo "log entry 1" > log/app.log
    echo "some other log" > error.log

ran git status to see how git currently treats these:

On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	error.log
	log/

nothing added to commit but untracked files present (use "git add" to track)

so right now both error.log and the whole log/ folder would get picked up if I did
git add . - which is exactly what I don't want.

--- making the .gitignore ---

    echo "*.log" >> .gitignore
    echo "log/" >> .gitignore

file looks like:
*.log
log/

*.log ignores anything ending in .log anywhere. log/ ignores that whole folder.

--- checking it actually worked ---

    git status

On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore

nothing added to commit but untracked files present (use "git add" to track)

error.log and log/ are gone from the list now, only .gitignore itself shows up (makes
sense, that's a new file I haven't committed). files still physically sit on disk,
git's just not tracking them anymore, which is the point.

--- committing the .gitignore ---

    git add .gitignore
    git commit -m "Add .gitignore to ignore .log files and log folder"
    git status

[master f1d3720] Add .gitignore to ignore .log files and log folder
 1 file changed, 2 insertions(+)
 create mode 100644 .gitignore

On branch master
nothing to commit, working tree clean

clean tree, done with this one.
