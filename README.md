# techspark-hackathon

TIC TechSpark Cup - Project by G5

## Design Mockups

You can view the Figma designs and prototypes here:
[Figma Link](https://www.figma.com/design/AKtYgpb1ICT66U4gnve1rT/TechSpark-Cup-Project-1.0?node-id=0-1&t=Tes4wGO5TX3yPX0f-1)

---

## Table of Contents

1. [How to Fork the Repository](#how-to-fork-the-repository)
2. [How to Clone the Repository](#how-to-clone-the-repository)
3. [How to Set Up the Development Environment](#how-to-set-up-the-development-environment)
4. [How to Make Changes](#how-to-make-changes)
5. [How to Submit a Pull Request](#how-to-submit-a-pull-request)
6. [Branching Strategy](#branching-strategy)

---

## How to Fork the Repository

1. **Fork the Repository**:  
   Go to the repository page on GitHub and click the **Fork** button at the top-right corner of the page. This will create a copy of the repository in your GitHub account.

2. **Clone the Forked Repository**:  
   After forking, clone it to your local machine using the following command:
   ```bash
   git clone https://github.com/dyceszn/techspark-hackathon.git
   ```

---

## How to Clone the Repository

If you don’t need to fork the repository (e.g., you’re part of the main organization), you can directly clone the repository to your local machine:

```bash
git clone https://github.com/dyceszn/techspark-hackathon.git
```

---

## How to Set Up the Development Environment

1. **Navigate to the project directory**:

   ```bash
   cd techspark-hackathon
   ```

2. **Install the dependencies**:
   Since the project uses npm as the package manager, install the dependencies with:

   ```bash
   npm install
   ```

3. **Start the development server**:
   Run the following command to start the development server and see the project live:
   ```bash
   npm run dev
   ```
   The project should now be accessible at `http://localhost:3000` (the port may vary).

---

## How to Make Changes

1. **Create a new feature branch**:

   ```bash
   git checkout -b feature/my-new-feature
   ```

2. **Make changes to the code**:

   - Edit the files according to the feature or bug fix you are working on.
   - For styling, use Tailwind CSS for styling components.
   - Ensure that your code works with React Router (if you’re working with routing).

3. **Commit your changes**:
   Once your changes are complete, commit them with a meaningful message:

   ```bash
   git add .
   git commit -m "Add [feature/bug fix] - [brief description]"
   ```

4. **Push your changes to your fork**:
   ```bash
   git push origin feature/my-new-feature
   ```

---

## How to Submit a Pull Request

1. **Go to your fork**:
   Navigate to your forked repository on GitHub.

2. **Create a Pull Request (PR)**:
   After pushing your changes to your fork, click on the “Pull Requests” tab and create a new pull request.

   - Base repository: Choose the original repository.
   - Base branch: `main` (or whichever branch the team is working on).
   - Head repository: Your forked repository.
   - Head branch: The branch where you made the changes (e.g., `feature/my-new-feature`).

3. **Add a description**:
   In the PR description, explain what changes you made and why.

4. **Submit the PR**:
   Click the “Create Pull Request” button. The team will review your changes and provide feedback.

---

## Branching Strategy

We follow the GitHub Flow branching strategy:

- **Main branch**: Always keep the main branch in a production-ready state.
- **Feature branches**: Create feature branches for every new feature or bug fix. Name the branches in the following format:
  - `feature/[short-description]` (for new features)
  - `bugfix/[short-description]` (for bug fixes)

---

## Additional Notes

- **Regularly sync with the main branch**:

  ```bash
  git fetch origin
  git checkout main
  git pull origin main
  git checkout feature/my-new-feature
  git merge main
  ```

- **Code reviews**:
  After submitting a PR, a team member will review the changes. Make sure to address any feedback and make adjustments if necessary.

---

Thank you for contributing! If you have any questions or need assistance, feel free to ask in the project’s Issues tab or message the group.
