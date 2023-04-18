class Obseravable {
	constructor() {
		this.subscribers = [];
	}
	subscribe(fn) {
		this.subscribers.push(fn);
	}
	unsubscribe(fn) {
		this.subscribers = this.subscribers.filter((item) =>item !== fn);
	}

	broadcast(data) {
		for(let i = 0; i < this.subscribers.length; i++){
			this.subscribers[i](data);
		}
	}
}
const observer =new Obseravable();

const fn = (data) => { //function - callback
	console.log("Callback was executed with data", data);
};

observer.subscribe(fn);

observer.broadcast("Hello from the observable");


function createObserable () {
	return {
		subscribers : [],
		subscribe(fn) {
			this.subscribers.push(fn);
		},
		unsubscribe(fn) {
			this.subscribers = this.subscribers.filter((item) =>item !== fn);
		},
	
		broadcast(data) {
			for(let i = 0; i < this.subscribers.length; i++){
				this.subscribers[i](data);
			}
		},
	};
}
const observer1 = createObserable();
observer.subscribers;
observer1.subscribers;
