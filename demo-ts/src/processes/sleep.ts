export function sleep(millis: number): Promise<void> {
	return new Promise<void>((resolve) => {
		setTimeout(resolve, millis);
	});
}

export function sleepInNode(millis: number): Promise<void> {
	return new Promise<void>((resolve) => {
		setTimeout(resolve, millis).unref();
	});
}
