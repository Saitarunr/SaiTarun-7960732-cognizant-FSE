Exercise 5 - cleanup and push back to remote

Objective: wrap up after the conflict resolution and get everything back onto GitLab.

this one needs the actual GitLab remote from exercise 1, so has to run on my own
machine inside the GitDemo folder.

1. check master is clean

    git status

should say:
On branch master
nothing to commit, working tree clean

if it doesn't, finish committing/stashing before going further.

2. list branches

    git branch -a

by now GitNewBranch and GitWork are both already deleted (from exercises 3 and 4),
so this should just show:
* master

3. pull remote first

    git pull origin master

this grabs anything on gitlab that isn't local yet - e.g. if I edited something
directly on the gitlab website, or someone else pushed. if everything's already in
sync it just says "Already up to date."

4. push everything up

    git push origin master

this sends up all the commits from exercises 3 and 4 that hadn't been pushed yet -
the branch merge and the conflict resolution merge.

5. double check on gitlab

opened the GitDemo project in the browser and checked:
- commit history has the merge commits ("Merge GitNewBranch into master",
  "Resolve merge conflict in hello.xml...")
- file list has welcome.txt, feature.txt, hello.xml, .gitignore
- error.log and the log/ folder from exercise 2 are NOT there (correctly ignored)

all matched up, so local and remote are in sync and this set is done.

(final-repo-snapshot/ folder here just has the plain end-state files - welcome.txt,
feature.txt, hello.xml, .gitignore - no .git folder included, in case it's useful to
compare against)
