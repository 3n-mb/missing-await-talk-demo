function foo() {
	console.log(`foo`);
}

function baz() {
	console.log(`baz`);
}

async function bar() {
	throw 42;
}

async function main() {
	foo();
	try {
		await bar();
	} catch (err) {
		baz();
		console.log(err);
	}
}

main().catch(() => {
	// eslint-disable no-empty
});
