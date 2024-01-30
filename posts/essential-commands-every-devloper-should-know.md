---
title: "Essential Commands Every developer should know"
subtitle: "Essential Commands Every developer should know"
date: "30-01-2024"
slug: "essential-commands-every-developer-should"
---

## Introduction

As a developer, mastering version control is crucial for efficient and collaborative software development. Git, a distributed version control system, has become the industry standard, empowering developers to track changes, collaborate seamlessly, and maintain a clean and organized codebase. In this blog post, we'll explore 15 essential Git commands that every developer should have in their toolkit.

### 1. `git init`: Initializing a Repository

The first step is version control. Use `git init` to initialize a new Git repository in your project directory.

![git_INIT](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yaz44uscquomg83dm3ao.png)

### 2. `git add`: Staging Changes

Add changes to the staging area before committing with `git add`. This command prepares files for the next commit.

![git_Add](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jjol7o0xfxk34x0d0o8z.png)

`git add .` will add all the files to the staging area. But make sure to add `node_modules` in the `.gitignore` file.

The `.gitignore` file specifies that which files or folder going to stage area.

### 3. `git commit`: Committing Changes

After staging changes, use `git commit` to permanently save them to the repository with a meaningful commit message.

To save the commit with meaningful message add -m after git commit like this `git commit -m "Your_Message_Here"`

![git_Commit](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wu4eywgv7lxzfshq823k.png)

### 4. `git status`: Checking Repository Status

Stay informed about the state of your repository using `git status`. It shows which files have been modified, added, or are ready for commit.

![git_status](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pi5nd90c3jxqexfgfe6o.png)

### 5. `git log`: Viewing Commit History

Explore the commit history of your repository with `git log`. It displays commit messages, authors, and timestamps.

![gitlog](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7c0pczp9j19531csdo9m.png)

### 6. `git branch`: Managing Branches

Create, list, or delete branches using `git branch`. This command is crucial for parallel development and feature isolation.

![git_branch](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ovhjrccc5o94xdwp3h1u.png)
Create New Branch:
![git_branch1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l9i6ixyxfemcx5o58d5e.png)
Check if the branch is successfully created or not:
![git_branch2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cg7h6zyja7sxb7ooapid.png)

### 7. `git checkout`: Switching Branches

Move between branches effortlessly with `git checkout "your_branch_name"`. Useful for testing features or fixing bugs in different branches.

![git_checkout](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f7x2apn4mjid5xrle1bf.png)

### 8. `git merge`: Merging Changes

Combine changes from one branch into another using `git merge "your_branch_name"`. This is essential for integrating new features into the main branch.

After creating **new branch** make sure to commit those changes before merging with the root branch.

![git_merge](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6g9czmku2bymtmuhwmsz.png)

### 9. `git remote`: Managing Remote Repositories

Handle connections to remote repositories with `git remote`. Add, rename, or remove remotes as needed.

Create a new repository on GitHub and connect that repo using URL.

![github_url](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zgbar6ann63msm1xr08m.png)

Add the URL to your command `git remote add "your_origin_name" "your_repo_url"`.

![git_remote](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4ld2iw0j7o2bcib04yxf.png)

### 10. `git push`: Uploading Changes to Remote

Share your local changes with the remote repository using `git push "name_of_remote_origin" "branch_name"`. This is crucial for collaborative development.

![git_push](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mswjzyl8h9iy83igqfqw.png)

### 11. `git pull`: Fetching and Merging Changes

Update your local repository with changes from the remote using `git pull "remote_repo_url"`. It fetches and merges changes in one command.

If the remote repo has some changes that your local repo doesn't have then you need to execute this command `git pull "remote_repo_url"`.

This only happens when 2 or more people are working on the same repo if you need to fetch other people's change then you need to execute this command.

![git_pull](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8jklrxafi0kpnle9pkce.png)

### 12. `git clone`: Cloning Repositories

Start a new project by cloning an existing repository with `git clone "repo_url"`. It downloads the repository to your local machine.

![git_clone](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i6tudv2wh8wa2ghriprc.png)

## Conclusion

By mastering these 12 essential Git commands, you'll have a solid foundation for effective version control. Whether you're a junior developer or a seasoned pro, integrating these commands into your workflow will enhance collaboration, streamline development, and keep your codebase organized. Happy coding!

[LinkedIn](https://www.linkedin.com/in/prathamesh0407/)
[GitHub](https://github.com/PrathameshhW/)
[Medium](https://medium.com/@prathameshj0407)
