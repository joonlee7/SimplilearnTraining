class MyArray<T> {

    private arr: T[] = [];

    addItem(item: T) {
        this.arr.push(item);
    }

    getItems(): T[] {
        return this.arr;
    }

    removeItem(item: T) {
        let i = this.arr.indexOf(item);
        if (i > -1) {
            this.arr.splice(i, 1)
        }
    }
}

var arr1 = new MyArray<number>();
arr1.addItem(10);
arr1.addItem(20);
arr1.addItem(30);
arr1.addItem(40);
arr1.addItem(50);
arr1.addItem(60);
arr1.addItem(69);

var arr2 = new MyArray<string>();
arr2.addItem("Joon");

console.log(arr1.getItems());
console.log(arr2.getItems());