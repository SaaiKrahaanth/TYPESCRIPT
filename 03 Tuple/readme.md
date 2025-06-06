
---

# 📘 TypeScript Arrays vs Tuples – Quick Cheatsheet

---

## 🔁 1. **Array vs Tuple – Key Differences**

| Feature  | **Array**                       | **Tuple**                                |
| -------- | ------------------------------- | ---------------------------------------- |
| Type     | Same or union type              | Different types, fixed order             |
| Length   | Dynamic                         | Fixed                                    |
| Use Case | List of similar items           | Structured, fixed data (e.g. name + age) |
| Syntax   | `let a: string[] = ["a", "b"];` | `let a: [string, number] = ["a", 1];`    |

---

## 🧠 2. **Array Syntax**

```ts
let names: string[] = ["Alice", "Bob"];
let scores: Array<number> = [90, 85, 100];
let mixed: (string | number)[] = ["Ram", 99];
```

---

## 🔧 3. **Common Array Methods**

```ts
names.push("Charlie");     // Add
names.pop();               // Remove last
names.shift();             // Remove first
names.unshift("Start");    // Add at start
names.includes("Bob");     // true/false
names.indexOf("Bob");      // 1
names.slice(0, 2);         // Partial copy
names.splice(1, 1, "Dan"); // Replace at index
```

---

## 📦 4. **Tuple Basics**

```ts
let user: [string, number] = ["Krahaanth", 22];
console.log(user[0]); // "Krahaanth"
```

* ✅ You **can edit elements by index**:

```ts
user[0] = "Sai";   // OK
user[1] = 23;      // OK
```

* ⚠️ You **should not use `push()` or `pop()`**, as it breaks tuple safety:

```ts
user.push("extra"); // ⚠️ Technically works but type gets broken
```

---

## 🔒 5. **Readonly Tuple**

```ts
let point: readonly [number, number] = [10, 20];
point[0] = 15; // ❌ Error
point.push(30); // ❌ Error
```

---

## ✅ 6. **When to Use What**

| Use Case                            | Choose           |
| ----------------------------------- | ---------------- |
| List of values (e.g. scores)        | Array            |
| Fixed structure (e.g. \[name, age]) | Tuple            |
| Safe, uneditable data               | `readonly tuple` |

---

## ✨ 7. **Bonus: Tuple with Optional & Rest**

```ts
let t: [string, number?, ...boolean[]];
t = ["A"];
t = ["A", 1, true, false];
```

---

## 📌 Summary Table

| Feature          | Array            | Tuple               |
| ---------------- | ---------------- | ------------------- |
| Length           | Flexible         | Fixed               |
| Index Edit       | ✅ Yes            | ✅ Yes               |
| Push/Pop         | ✅ Yes            | ⚠️ Possible, unsafe |
| Readonly Support | ✅ Via `readonly` | ✅ Recommended       |

---

