
---

# 📗 TypeScript `Set` CheatSheet

---

## 🔹 What is a `Set`?

* A **collection of unique values** (no duplicates).
* Maintains **insertion order**.
* Can store any type: primitives or objects.

---

## ✅ Basic Syntax

```ts
let numbers: Set<number> = new Set([1, 2, 3]);
let names = new Set<string>();
```

---

## 🔧 Common Methods

| Method          | Description              | Example                                 |
| --------------- | ------------------------ | --------------------------------------- |
| `add(value)`    | Adds a value to the set  | `numbers.add(4);`                       |
| `delete(value)` | Removes a value          | `numbers.delete(2);`                    |
| `has(value)`    | Checks if value exists   | `numbers.has(3); // true`               |
| `clear()`       | Removes all values       | `numbers.clear();`                      |
| `size`          | Returns number of values | `console.log(numbers.size);`            |
| `forEach()`     | Iterate over values      | `numbers.forEach(n => console.log(n));` |

---

## 🔄 Convert Set ↔ Array

```ts
const arr = [1, 2, 3, 3];
const uniqueSet = new Set(arr);       // Set {1, 2, 3}
const uniqueArr = [...uniqueSet];     // [1, 2, 3]
```

---

## ⚠️ Notes

* `Set` stores **unique** items only.
* Equality for objects is by **reference**, not deep equality.
* Useful for filtering duplicates or fast membership checks.

---

## 🧩 Example: Remove duplicates from array

```ts
const fruits = ["apple", "banana", "apple", "orange"];
const uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits); // ["apple", "banana", "orange"]
```

---

