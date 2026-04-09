// შექმენით map სადაც გექნება მინიმუმ 5 key value წყვილი

// შენი დავალებაა:

// დაამატო ახალი წყვილი map ში, 

// შეცვალო უკვე არსებული მნიშნვნელობა map ში

// ამოშალო ერთ ერთი წყვილი mep იდან

// შეამოწმე არის თუ არა "name" key შენს მეპში 

// გაიგო რამდენი ცალი ელემენტი ინახება map ში

// ,
// ბოლოს გამოიტანე ყველა key ცალ ცალკე თით ხაზზე

// გამოიტანე ყველა value ცალ ცალკე თითო ხაზზე

// მოგიწევთ დაშალოთ ობიექტი და გადაატაროთ for of/ forEach  


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