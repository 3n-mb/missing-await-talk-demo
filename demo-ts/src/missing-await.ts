
declare function foo(): void;
declare function baz(): void;

async function bar(): Promise<number> {
	throw 42;
}


export async function main(): Promise<void> {
	foo();
	try {
		bar();
	} catch (err) {
		baz();
		console.log(err);
	}
}

