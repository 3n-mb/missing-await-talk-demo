function foo() {
	console.log(`foo`);
}

function baz() {
	console.log(`baz`);
}

async function bar() {
	throw 42;
}

function main() {
	foo();
	try {
		bar();
	} catch (err) {
		baz();
		console.log(err);
	}
}

main();
