const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const { execSync } = require('child_process')

/** Obteniendo version */
const pathname = join(__dirname)
const packageJson = JSON.parse(readFileSync(join(pathname, 'package.json'), 'utf-8'))

/** Obteniendo commit */
const commitHash = execSync('git rev-parse HEAD').toString().trim()

/** Escribiendo datos */
const buildManifestPath = join(pathname, 'dist/build_manifest.json')
const output = JSON.stringify({
	version: packageJson.version,
	commit: commitHash
}, null, 2)
console.log('Creating file build_manifest.json', output)
writeFileSync(buildManifestPath, output)
