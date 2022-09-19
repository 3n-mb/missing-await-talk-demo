
declare function foo(): void;
declare function baz(): void;

async function bar(): Promise<number> {
	throw 42;
}

foo();
try {
	bar();
} catch (err) {
	baz();
	console.log(err);
}
