# Contributing to LLM.txt Tracker

Thank you for your interest in contributing! This guide will help you add new LLM.txt sources to our collection.

## How to Contribute

### Adding a New Source

1. **Find an LLM.txt file** - Look for documentation sites that provide LLM.txt files
2. **Fork this repository**
3. **Add the source** to `sources.json`:

```json
{
  "id": "unique-id",
  "name": "Source Name",
  "url": "https://example.com/llms.txt",
  "description": "Brief description of what this source provides",
  "category": "Framework|Protocol|Library|Tool",
  "tags": ["relevant", "tags"],
  "added": "YYYY-MM-DD",
  "lastChecked": null,
  "status": "active"
}
```

4. **Create a directory** under `llm-files/your-source-id/`
5. **Download the file** and save it in your directory
6. **Create a metadata file** `llm-files/your-source-id/metadata.json`:

```json
{
  "source": "your-source-id",
  "url": "https://example.com/llms.txt",
  "fetchedAt": "YYYY-MM-DD",
  "fileSize": "~XXkB",
  "sections": ["List", "of", "main", "sections"],
  "description": "Brief overview of contents"
}
```

7. **Update the README** table with your new source
8. **Create a pull request** with a clear description

### Source Quality Guidelines

Good LLM.txt sources should:

- ✅ Be actively maintained
- ✅ Provide comprehensive documentation
- ✅ Be from reputable/official sources
- ✅ Have stable URLs that won't break
- ✅ Contain useful information for LLMs

### Code of Conduct

- Be respectful and constructive
- Focus on the value the source provides
- Credit original authors/sources appropriately
- Report broken links or issues promptly

## Questions?

Open an issue if you:
- Need help adding a source
- Found a broken link
- Have suggestions for improvements
- Want to discuss source selection criteria

Thank you for helping make this resource better! 🙏
