
declare function foo(): void;
declare function baz(): void;

export async function bar(): Promise<number> {
	throw 42;
}


export async function main(): Promise<void> {
	foo();
	try {
		await bar();
	} catch (err) {
		baz();
		console.log(err);
	}
}

