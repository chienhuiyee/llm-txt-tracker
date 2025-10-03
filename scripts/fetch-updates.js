#!/usr/bin/env node

/**
 * Fetch LLM.txt files from all sources defined in sources.json
 * Alternative to fetch-updates.sh for cross-platform compatibility
 */

const fs = require('fs').promises;
const path = require('path');
const https = require('https');

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  console.log('🔄 Fetching LLM.txt updates...\n');

  try {
    // Read sources.json
    const sourcesPath = path.join(__dirname, '..', 'sources.json');
    const sourcesData = await fs.readFile(sourcesPath, 'utf8');
    const { sources } = JSON.parse(sourcesData);

    // Create llm-files directory if it doesn't exist
    const llmFilesDir = path.join(__dirname, '..', 'llm-files');
    await fs.mkdir(llmFilesDir, { recursive: true });

    // Fetch each source
    for (const source of sources) {
      console.log(`📥 Fetching ${source.name}...`);
      
      try {
        // Create source directory
        const sourceDir = path.join(llmFilesDir, source.id);
        await fs.mkdir(sourceDir, { recursive: true });

        // Fetch the file
        const content = await fetchUrl(source.url);
        
        // Determine filename from URL
        const filename = source.url.split('/').pop() || 'llms.txt';
        const filePath = path.join(sourceDir, filename);
        
        // Save the file
        await fs.writeFile(filePath, content, 'utf8');
        
        console.log(`  ✓ Saved to llm-files/${source.id}/${filename}\n`);
      } catch (error) {
        console.error(`  ✗ Error fetching ${source.name}:`, error.message, '\n');
      }
    }

    console.log('✅ All updates fetched successfully!');
    console.log('💡 Review changes with: git diff llm-files/');
    console.log('📝 Commit with: git add llm-files/ && git commit -m "Update LLM.txt files"');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
