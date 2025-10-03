# LLM.txt Tracker 🤖

A curated collection of LLM.txt files from various sources across the web. These files contain documentation and information formatted specifically for Large Language Models to consume.

## What are LLM.txt files?

LLM.txt files are specially formatted documentation files designed to be easily consumed by AI models and agents. They provide structured information about APIs, frameworks, and tools in a format optimized for LLM comprehension.

## Repository Structure

```
llm-txt-tracker/
├── README.md              # This file
├── sources.json           # Registry of all tracked LLM.txt sources
├── llm-files/            # Downloaded LLM.txt files
│   ├── ag-ui/
│   └── langgraph/
└── scripts/              # Utility scripts
    └── fetch-updates.sh  # Script to fetch latest versions
```

## Tracked Sources

| Source | URL | Description | Last Updated |
|--------|-----|-------------|--------------|
| AG-UI | https://docs.ag-ui.com/llms-full.txt | Agent User Interaction Protocol documentation | - |
| LangGraph | https://langchain-ai.github.io/langgraph/llms.txt | LangGraph framework documentation | - |

## Usage

### Viewing Files

All downloaded LLM.txt files are stored in the `llm-files/` directory, organized by source.

### Adding New Sources

1. Edit `sources.json` to add new URL
2. Run `./scripts/fetch-updates.sh` to download
3. Commit and push changes

### Updating Files

```bash
./scripts/fetch-updates.sh
```

## Contributing

Found a new LLM.txt file? Please submit a pull request!

1. Fork this repository
2. Add the URL to `sources.json`
3. Run the fetch script
4. Create a pull request with your changes

## License

This repository is for educational and reference purposes. Individual LLM.txt files are subject to their original sources' licenses.

## Resources

- [LLM.txt Specification](https://llmstxt.org/) (if exists)
- [AG-UI Documentation](https://docs.ag-ui.com/)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
