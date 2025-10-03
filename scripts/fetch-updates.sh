#!/bin/bash

# Fetch updates for all LLM.txt sources
# This script reads sources.json and downloads the latest versions

echo "🔄 Fetching LLM.txt updates..."

# Create llm-files directory if it doesn't exist
mkdir -p llm-files

# Read sources from sources.json and fetch each one
# This is a basic implementation - you can enhance it with:
# - Parallel downloads
# - Error handling
# - Checksums/validation
# - Automatic git commits

# Example for AG-UI
echo "📥 Fetching AG-UI documentation..."
mkdir -p llm-files/ag-ui
curl -s "https://docs.ag-ui.com/llms-full.txt" -o llm-files/ag-ui/llms-full.txt
echo "  ✓ Saved to llm-files/ag-ui/llms-full.txt"

# Example for LangGraph
echo "📥 Fetching LangGraph documentation..."
mkdir -p llm-files/langgraph
curl -s "https://langchain-ai.github.io/langgraph/llms.txt" -o llm-files/langgraph/llms.txt
echo "  ✓ Saved to llm-files/langgraph/llms.txt"

echo ""
echo "✅ All updates fetched successfully!"
echo "💡 Review changes with: git diff llm-files/"
echo "📝 Commit with: git add llm-files/ && git commit -m 'Update LLM.txt files'"
