import { readFile, writeFile } from "fs/promises";

type FileExc = Error & { code: string; };

export async function incrementCounterInFile(file: string): Promise<number> {
	try {
		const str = await readFile(file, { encoding: 'utf8' });
		let counter = JSON.parse(str);
		counter += 1;
		await writeFile(file, JSON.stringify(counter));
		return counter;
	} catch (err) {
		if ((err as FileExc).code !== 'ENOENT') {
			throw err;
		}
		const initCounterValue = 1;
		await writeFile(file, JSON.stringify(initCounterValue));
		return initCounterValue;
	}
}