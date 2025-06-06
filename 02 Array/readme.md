
---

## 📚 TypeScript Array Guide

### ✅ **1. Declaring Arrays**

```ts
let fruits: string[] = ["apple", "banana", "cherry"];
let scores: Array<number> = [95, 88, 76];
```

---

### ✅ **2. Accessing Elements**

```ts
console.log(fruits[0]); // "apple"
```

---

### ✅ **3. Modifying Arrays**

```ts
fruits.push("mango");      // Add to end
fruits.pop();              // Remove from end
fruits.unshift("grape");   // Add to start
fruits.shift();            // Remove from start
```

---

### ✅ **4. Iterating Over Arrays**

```ts
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### ✅ **5. Common Array Methods**

| Method       | Description                         | Example                               |
| ------------ | ----------------------------------- | ------------------------------------- |
| `push()`     | Add item to end                     | `fruits.push("orange")`               |
| `pop()`      | Remove last item                    | `fruits.pop()`                        |
| `shift()`    | Remove first item                   | `fruits.shift()`                      |
| `unshift()`  | Add item to beginning               | `fruits.unshift("grape")`             |
| `splice()`   | Add/remove at specific index        | `fruits.splice(1, 1, "kiwi")`         |
| `slice()`    | Extract a portion                   | `fruits.slice(0, 2)`                  |
| `indexOf()`  | Get index of an item                | `fruits.indexOf("banana")`            |
| `includes()` | Check if item exists                | `fruits.includes("apple")`            |
| `map()`      | Create new array via transformation | `fruits.map(f => f.toUpperCase())`    |
| `filter()`   | Filter items by condition           | `fruits.filter(f => f !== "banana")`  |
| `forEach()`  | Run function for each item          | `fruits.forEach(f => console.log(f))` |
| `join()`     | Join all items into a string        | `fruits.join(", ")`                   |

---

### ✅ **6. Array of Objects Example**

```ts
type Student = {
  name: string;
  age: number;
};

let students: Student[] = [
  { name: "Ram", age: 20 },
  { name: "Sita", age: 21 },
];
```

---

### 📌 Notes:

* Type safety helps avoid mistakes (e.g., `string[]` won't allow `number`)
* Prefer using methods like `map`, `filter` for clean functional-style code.

---

