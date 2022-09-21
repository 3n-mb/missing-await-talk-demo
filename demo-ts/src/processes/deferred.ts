export interface Deferred<T> {
	promise: Promise<T>;
	resolve: (result?: T|PromiseLike<T>) => void;
	reject: (err: any) => void;
}

export function defer<T>(): Deferred<T> {
	const d = <Deferred<T>> {};
	d.promise = new Promise<T>((resolve, reject) => {
		d.resolve = resolve as Deferred<T>['resolve'];
		d.reject = reject;
	});
	Object.freeze(d);
	return d;
}


Object.freeze(exports);