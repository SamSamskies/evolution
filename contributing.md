1. Fork the repository to your personal Github. Forking is basically an easy way to make a duplicate of the repository to your own account.
2. Now that you have forked the repository to your account, go to the repository in your account, then click on the clone button and hit the copy to clipboard icon.
3. Now, open a terminal on your local machine and clone the forked repository by doing: git clone <copied url>
4. For example: git clone https://github.com/itfibonacci/evolution.git
5. Create a branch in git inside your local machine: git checkout -b <branch-name> - creates a new branch and switches to that branch in one command. 
6. Contribute to the project in any way you would like. There are no rules. You can add animations, fetch data from apis, etc. 
7. Stage your changes first by executing in the main directory of your cloned project - 'git add .'. Commit those changes by doing : git commit -m "Added <your-name> to contributors list" . “-m” tells git that you are committing the changes with a message to tell people what the commit is about.
8. Push those changes to the forked repository on Github via: git push origin <your-branch-name> replacing “<your-branch-name> with the name of the branch you created earlier.
