# Commands Used

## 1. Checking whether Java is installed

Before starting the project, I verified that Java was installed correctly on my system.

```bash
java -version
```

---

## 2. Checking the Maven installation

Since this project uses Maven for dependency management and testing, I checked if Maven was installed properly.

```bash
mvn -version
```

---

## 3. Moving to the project directory

I opened the terminal and navigated to the JUnit project folder.

```bash
cd JUnit_Basic
```

---

## 4. Cleaning the project

Before building the project, I removed any previously generated files to avoid conflicts.

```bash
mvn clean
```

---

## 5. Compiling the source code

Next, I compiled the Java source files to make sure there were no compilation errors.

```bash
mvn compile
```

---

## 6. Running the JUnit test cases

After compiling successfully, I executed all the test cases written in the project.

```bash
mvn test
```

---

## 7. Cleaning and testing together

Whenever I made changes to the code, I used this command to clean the project and immediately run all the tests again.

```bash
mvn clean test
```

---

## 8. Packaging the project

Once everything worked correctly, I packaged the project into a JAR file. Maven automatically runs all the tests before creating the package.

```bash
mvn package
```

---

## 9. Viewing the project structure

To verify that all files and folders were organized correctly, I displayed the project structure.

```bash
tree
```

If the `tree` command was not available, I installed it using:

```bash
brew install tree
```

---

## 10. Initializing the Git repository

To start version control for the project, I initialized a Git repository.

```bash
git init
```

---

## 11. Checking the repository status

Before committing, I checked which files had been modified or added.

```bash
git status
```

---

## 12. Adding project files

I staged all the project files so they were ready to be committed.

```bash
git add .
```

---

## 13. Creating a commit

After reviewing the changes, I created a commit with a meaningful message.

```bash
git commit -m "Completed JUnit Basic Testing Exercise"
```

---

## 14. Connecting the local project to GitHub

I linked my local repository with the GitHub repository.

```bash
git remote add origin <repository-url>
```

---

## 15. Uploading the project to GitHub

Finally, I pushed the project to the main branch on GitHub.

```bash
git branch -M main
git push -u origin main
```
