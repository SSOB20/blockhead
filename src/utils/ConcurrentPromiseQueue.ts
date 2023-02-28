type QueueItem<T> = {
	asyncFunction: () => Promise<T>;
	resolve: (value: T) => void;
	reject: (reason: any) => void;
};

export class ConcurrentPromiseQueue {
	queue: QueueItem<any>[] = [];
	countQueued: number = 0;

	constructor(public maxConcurrent: number = 3) {}

	public enqueue<T>(asyncFunction: () => Promise<T>) {
		return new Promise<T>((resolve, reject) => {
			this.queue.push({ asyncFunction, resolve, reject });

			this.dequeue();
		});
	}

	private dequeue() {
		while (this.queue.length && this.countQueued < this.maxConcurrent) {
			const { asyncFunction, resolve, reject } = this.queue.shift()!;

			this.countQueued++;

			asyncFunction()
				.then((value) => {
					this.countQueued--;
					resolve(value);
					this.dequeue();
				})
				.catch((value) => {
					this.countQueued--;
					reject(value);
					this.dequeue();
				});
		}
	}
}
