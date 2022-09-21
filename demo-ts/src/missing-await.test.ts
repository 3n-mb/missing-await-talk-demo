import { bar } from "./missing-await"

test(`bar() throws`, () => {
	expect(bar()).toThrow();
});