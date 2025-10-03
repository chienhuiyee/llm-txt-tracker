# Setup Guide

This guide will help you set up and use the LLM.txt Tracker repository.

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/llm-txt-tracker.git
cd llm-txt-tracker
```

### 2. Install Dependencies (Optional)

If you want to use the Node.js fetch script:

```bash
# No dependencies required for the basic scripts
# The fetch-updates.js uses only Node.js built-ins
```

### 3. Make Scripts Executable

```bash
chmod +x scripts/fetch-updates.sh
chmod +x scripts/fetch-updates.js
```

## Usage

### Fetching Updates

#### Using Bash (Linux/Mac):

```bash
./scripts/fetch-updates.sh
```

#### Using Node.js (Cross-platform):

```bash
node scripts/fetch-updates.js
```

This will:
1. Read all sources from `sources.json`
2. Download each LLM.txt file
3. Save them in `llm-files/[source-id]/`
4. Display a summary of what was downloaded

### Viewing Sources

All tracked sources are listed in `sources.json`. You can view them with:

```bash
cat sources.json | jq '.sources'
```

Or simply open the file in your editor.

### Adding New Sources

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions on adding new sources.

Quick steps:
1. Edit `sources.json` to add your source
2. Run the fetch script to download the file
3. Create metadata file in `llm-files/your-source/metadata.json`
4. Update README.md
5. Commit and push

## Repository Structure

```
llm-txt-tracker/
├── README.md              # Main documentation
├── CONTRIBUTING.md        # Contribution guidelines
├── LICENSE               # MIT License
├── sources.json          # Registry of all sources
├── llm-files/           # Downloaded LLM.txt files
│   ├── ag-ui/           # AG-UI documentation
│   │   ├── llms-full.txt
│   │   └── metadata.json
│   └── langgraph/       # LangGraph documentation
│       ├── llms.txt
│       └── metadata.json
└── scripts/             # Utility scripts
    ├── fetch-updates.sh # Bash version
    └── fetch-updates.js # Node.js version
```

## Git Workflow

### First Time Setup

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: LLM.txt Tracker setup"

# Add remote (replace with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/llm-txt-tracker.git

# Push to GitHub
git push -u origin main
```

### Updating Files

```bash
# Fetch latest versions
./scripts/fetch-updates.sh

# Review changes
git diff llm-files/

# Stage and commit
git add llm-files/ sources.json
git commit -m "Update LLM.txt files - $(date +%Y-%m-%d)"

# Push to GitHub
git push
```

## Automation (Optional)

### GitHub Actions

You can set up automatic updates with GitHub Actions:

1. Create `.github/workflows/update-llm-files.yml`
2. Configure to run the fetch script on a schedule
3. Automatically commit and push changes

Example workflow (basic):

```yaml
name: Update LLM.txt Files
on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly on Sunday
  workflow_dispatch:  # Manual trigger

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Fetch updates
        run: ./scripts/fetch-updates.sh
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add llm-files/
          git commit -m "Auto-update LLM.txt files" || echo "No changes"
          git push
```

## Troubleshooting

### Script Permission Denied

```bash
chmod +x scripts/fetch-updates.sh
chmod +x scripts/fetch-updates.js
```

### Download Fails

- Check your internet connection
- Verify the URL in `sources.json` is correct
- Some sites may require specific user agents or headers

### Git Issues

```bash
# If you need to force push (use carefully)
git push --force origin main

# If you want to start fresh
rm -rf .git
git init
```

## Next Steps

- ⭐ Star the repository on GitHub
- 📢 Share it with others who might find it useful
- 🤝 Contribute new sources (see CONTRIBUTING.md)
- 🐛 Report issues or suggest improvements

## Need Help?

- Open an issue on GitHub
- Check the README.md for more information
- Review CONTRIBUTING.md for contribution guidelines
