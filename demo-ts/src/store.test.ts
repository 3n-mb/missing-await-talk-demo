import { unlink } from "fs/promises";
import { incrementCounterInFile } from "./store";

const counterFile = `test-counter.json`;

afterEach(async () => {
	try {
		await unlink(counterFile);
	} catch (err) {
		// eslint-disable no-empty
	}
});

test(`incrementCounterInFile() has orderly counter`, async () => {
	const counts: Promise<number>[] = [];
	for (let i=1; i<=10; i+=1) {
		counts.push(incrementCounterInFile(counterFile));
	}
	for (let i=1; i<=10; i+=1) {
		expect(await Promise.all(counts)).toContain(i);
	}
});