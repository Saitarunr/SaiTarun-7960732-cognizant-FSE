Exercise 4 - Resolving a merge conflict

Objective: handle it when master and a branch both change the same content.

continuing in GitDemo.

first checked master was clean:

    git status

On branch master
nothing to commit, working tree clean

made a new branch and added a file:

    git checkout -b GitWork

hello.xml:
<config>
  <version>1.0</version>
</config>

    git add hello.xml
    git commit -m "Add hello.xml on GitWork branch"

updated the file on that same branch:

    git status   -> shows modified: hello.xml
    git add hello.xml
    git commit -m "Update hello.xml on GitWork branch"

content on GitWork after this:
<config>
  <version>2.0</version>
  <branchNote>Updated on GitWork branch</branchNote>
</config>

switched to master and added a DIFFERENT version of hello.xml there on purpose, to
set up a real conflict:

    git checkout master

<config>
  <version>3.0</version>
  <masterNote>Updated directly on master</masterNote>
</config>

    git add hello.xml
    git commit -m "Add different hello.xml content on master"

now master and GitWork both have hello.xml but with different content - this is
where a conflict is going to happen.

checked the log to see the split:

    git log --oneline --graph --decorate --all

* 928fc8b (HEAD -> master) Add different hello.xml content on master
| * d72aa56 (GitWork) Update hello.xml on GitWork branch
| * 0a7cc98 Add hello.xml on GitWork branch
|/
*   f5091ec Merge GitNewBranch into master
...

diffed the two versions:

    git diff master GitWork -- hello.xml

--- a/hello.xml
+++ b/hello.xml
@@ -1,4 +1,4 @@
 <config>
-  <version>3.0</version>
-  <masterNote>Updated directly on master</masterNote>
+  <version>2.0</version>
+  <branchNote>Updated on GitWork branch</branchNote>
 </config>

visual version with p4merge:

    git difftool master GitWork -- hello.xml

now the merge attempt:

    git merge GitWork -m "Merge GitWork into master"

Auto-merging hello.xml
CONFLICT (add/add): Merge conflict in hello.xml
Automatic merge failed; fix conflicts and then commit the result.

git status at this point:

On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
	both added:      hello.xml

opened hello.xml to see what git left in there:

<config>
<<<<<<< HEAD
  <version>3.0</version>
  <masterNote>Updated directly on master</masterNote>
=======
  <version>2.0</version>
  <branchNote>Updated on GitWork branch</branchNote>
>>>>>>> GitWork
</config>

everything between <<<<<<< HEAD and ======= is master's side, everything between
======= and >>>>>>> GitWork is the branch's side.

resolved by hand - just kept both notes since neither was wrong, just different:

<config>
  <version>3.0</version>
  <masterNote>Updated directly on master</masterNote>
  <branchNote>Updated on GitWork branch</branchNote>
</config>

(if using p4merge for this it shows a proper 3-way view with base/local/remote panes
instead of raw markers, easier to work with honestly)

staged and finished the merge commit:

    git add hello.xml
    git commit -m "Resolve merge conflict in hello.xml: keep both master and GitWork changes"
    git status

[master d35d2e7] Resolve merge conflict in hello.xml: keep both master and GitWork changes

On branch master
nothing to commit, working tree clean

some merge tools leave backup files (.orig / .bak) lying around after a conflict, so
cleaned that up too with .gitignore:

    git status   -> shows hello.xml.bak, hello.xml.orig as untracked
    echo "*.orig" >> .gitignore
    echo "*.bak" >> .gitignore
    git status   -> backup files gone from the list
    git add .gitignore
    git commit -m "Ignore merge backup files (.orig, .bak)"

last step, listed branches, deleted the merged one, checked the final log:

    git branch -a
    git branch -d GitWork
    git log --oneline --graph --decorate

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

graph shows both sides' commits joining up at the conflict resolution commit.
