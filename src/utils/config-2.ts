import * as fs from 'node:fs';
import * as path from 'node:path';

export function getConfig(configFile: string, caseID: string) {
    const env = process.env.ENV || 'dev'; // fallback
    const raw = fs.readFileSync(path.resolve(`src/data/${configFile}-${env}.json`), 'utf-8');
    const testDataJson = JSON.parse(raw);
    return testDataJson[caseID];
}
