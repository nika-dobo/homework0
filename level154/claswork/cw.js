const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
map.set("country", "USA");
map.set("job", "Engineer");

console.log(map);

map.set("name", "gio");
console.log(map);

map.delete("name");
console.log(map);

console.log(map.has("name"));

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}  