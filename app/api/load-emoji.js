import path from 'path';
import { promises as fs } from 'fs';

export async function loadEmoji() {
    return JSON.parse(await fs.readFile(path.join(process.cwd(), '/')
        + 'emoji-list.json', 'utf8'));
}