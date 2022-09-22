import { bar } from "./missing-await"

test(`bar() throws`, async () => {
	try {
		await bar();
		fail(`should throw`);
	} catch (err) {
		expect(err).toBeDefined();
	}
});