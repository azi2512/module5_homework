let map = new Map();

map.set("apple", "green");
map.set("strawberry", "red");

for(let keys of map.keys()) {
  console.log(`Ключ — ${keys}, значение — `+ map.get(keys));
}