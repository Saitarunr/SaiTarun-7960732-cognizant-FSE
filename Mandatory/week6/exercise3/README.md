Exercise 3 - Branching and merging

Objectives:
- understand branching/merging
- do a branch request and merge request in GitLab
- actually make a branch, change stuff, merge it back

still using GitDemo from before.

--- branching ---

made a new branch:

    git branch GitNewBranch

listed everything to see it:

    git branch -a

  GitNewBranch
* master

the * shows master is still the one I'm on, GitNewBranch exists but I haven't
switched yet.

switched over and added a file:

    git checkout GitNewBranch
    echo "This file was added on the feature branch" > feature.txt

committed:

    git add feature.txt
    git commit -m "Add feature.txt on GitNewBranch"

status check:

Switched to branch 'GitNewBranch'
[GitNewBranch f497ca1] Add feature.txt on GitNewBranch
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt

On branch GitNewBranch
nothing to commit, working tree clean

--- merging ---

switched back to master:

    git checkout master

to make this a real merge and not just a fast-forward, added a commit to master too
so the two branches actually diverge:

    echo "Master-only update" >> welcome.txt
    git add welcome.txt
    git commit -m "Update welcome.txt on master"

checked the diff between the two branches first:

    git diff master GitNewBranch

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

for a visual version of this you'd use P4Merge (windows tool), set up once with:

    git config --global diff.tool p4merge
    git config --global difftool.p4merge.cmd "p4merge $LOCAL $REMOTE"

then:

    git difftool master GitNewBranch

merged it:

    git merge GitNewBranch -m "Merge GitNewBranch into master"

Merge made by the 'ort' strategy.
 feature.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt

checked the log after:

    git log --oneline --graph --decorate --all

*   f5091ec (HEAD -> master) Merge GitNewBranch into master
|\
| * f497ca1 (GitNewBranch) Add feature.txt on GitNewBranch
* | b7a1002 Update welcome.txt on master
|/
* f1d3720 Add .gitignore to ignore .log files and log folder
* e8484d1 Added welcome.txt with initial content

you can see the branch split off and come back together at the merge commit.

deleted the branch since it's merged, checked status:

    git branch -d GitNewBranch
    git status
    git branch -a

Deleted branch GitNewBranch (was f497ca1).

On branch master
nothing to commit, working tree clean

* master

--- doing this through GitLab instead ---

what I just did with commands is basically what a Merge Request does on GitLab:

1. push the branch: git push origin GitNewBranch
2. go to the project on gitlab -> Merge Requests -> New merge request
3. pick GitNewBranch as source, master as target
4. look over the diff gitlab shows, write a description, hit Merge
5. can tick "delete source branch" so it cleans up the remote branch automatically
