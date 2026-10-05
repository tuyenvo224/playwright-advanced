// utils/csv-reader.ts
import fs from 'fs';
import path from 'path';

export function readCSV(filePath: string) {
    try {
        const content = fs.readFileSync(path.resolve(filePath), 'utf-8');
        const [header, ...rows] = content.trim().split('\n');
        const keys = header.split(',');

        return rows.map(row => {
            const values = row.split(',');
            return Object.fromEntries(keys.map((k, i) => [k.trim(), values[i].trim()]));
        });
    } catch (e) {
        console.log(e);
        return [];
    }
}
