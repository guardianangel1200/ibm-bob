# GitHub Setup Guide

## Connecting Your Local Code to GitHub

Your repository already exists at: `https://github.com/vaibhav998/ibm-bob.git`

### Step 1: Check Current Git Status

Open a terminal in the `ibm-bob` directory and run:

```bash
cd /Users/hamzasyed/Downloads/ibm-bob
git status
```

This will tell you if the directory is already a git repository.

### Step 2: Initialize Git (if needed)

If you see "not a git repository", initialize it:

```bash
git init
```

### Step 3: Connect to Remote Repository

Add the remote repository:

```bash
git remote add origin https://github.com/vaibhav998/ibm-bob.git
```

If you get an error that "origin already exists", update it:

```bash
git remote set-url origin https://github.com/vaibhav998/ibm-bob.git
```

### Step 4: Check Remote Connection

Verify the remote is set correctly:

```bash
git remote -v
```

You should see:
```
origin  https://github.com/vaibhav998/ibm-bob.git (fetch)
origin  https://github.com/vaibhav998/ibm-bob.git (push)
```

### Step 5: Pull Latest Changes (if any)

```bash
git pull origin main
```

Or if the branch is named `master`:

```bash
git pull origin master
```

### Step 6: Stage Your Changes

Add all files:

```bash
git add .
```

Or add specific files:

```bash
git add northstar_dashboard/
git add BOBATHON_WINNING_PLAN.md
```

### Step 7: Commit Your Changes

```bash
git commit -m "Add Bobathon winning strategy and planning documents"
```

### Step 8: Push to GitHub

```bash
git push origin main
```

Or if using master branch:

```bash
git push origin master
```

If this is your first push and the branch doesn't exist yet:

```bash
git push -u origin main
```

### Step 9: Verify on GitHub

Visit `https://github.com/vaibhav998/ibm-bob` in your browser to see your code!

---

## Troubleshooting

### Authentication Issues

If you get authentication errors, you may need to:

1. **Use Personal Access Token (PAT):**
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate a new token with `repo` permissions
   - Use the token as your password when pushing

2. **Or use SSH:**
   ```bash
   git remote set-url origin git@github.com:vaibhav998/ibm-bob.git
   ```

### Branch Name Issues

If you're unsure of the branch name:

```bash
git branch
```

To create and switch to main branch:

```bash
git checkout -b main
```

---

## Quick Reference

```bash
# Navigate to project
cd /Users/hamzasyed/Downloads/ibm-bob

# Check status
git status

# Add remote (if needed)
git remote add origin https://github.com/vaibhav998/ibm-bob.git

# Stage changes
git add .

# Commit
git commit -m "Your message here"

# Push
git push origin main
```

---

## For Bobathon Submission

Remember, for the actual Bobathon submission, you'll need to:

1. Fork `https://github.ibm.com/code-assistant/Austin-Bobathon`
2. Clone your fork
3. Create a branch: `<TeamName>-<RegistrantLastName>`
4. Add your submission to `Submissions/<TeamName>/`
5. Create a Pull Request

See `BOBATHON_WINNING_PLAN.md` for complete submission instructions.