// ==========================================
// რა არის JSON.parse() ?
// ==========================================
// JSON (JavaScript Object Notation) არის ტექსტური ფორმატი მონაცემების შესანახად.
// ხშირად სერვერიდან ან localStorage-დან მონაცემები მოდის ტექსტის (String) სახით.
// JSON.parse() იღებს ამ ტექსტს (სტრინგს) და გადააქცევს მას ნამდვილ JavaScript-ის ობიექტად ან მასივად, 
// რათა შევძლოთ მასთან მუშაობა (მაგ: წავიკითხოთ properties, გავუშვათ ციკლი და ა.შ.).

// 1. გვაქვს JSON ფორმატის ტექსტი (სტრინგი). დააკვირდი, რომ მთლიანი მონაცემი ბრჭყალებშია ჩასმული.
const jsonString = '{"name": "ნიკა", "age": 20, "isStudent": true, "skills": ["HTML", "CSS", "JS"]}';

console.log("1. ორიგინალი ტექსტი (ტიპი: " + typeof jsonString + "):");
console.log(jsonString);

// თუ ვცდით ტექსტიდან სახელის ამოღებას პირდაპირ, არ გამოვა, რადგან ის უბრალოდ ტექსტია და არა ობიექტი:
console.log("სახელი სტრინგიდან წაკითხვის მცდელობისას:", jsonString.name); // დაიბეჭდება: undefined


// 2. ვიყენებთ JSON.parse() მეთოდს
const userObject = JSON.parse(jsonString);

console.log("\n2. გადაკეთებული ობიექტი (ტიპი: " + typeof userObject + "):");
console.log(userObject);

// ახლა უკვე შეგვიძლია მონაცემების მარტივად ამოღება, როგორც ჩვეულებრივი ობიექტიდან:
console.log("სახელი ობიექტიდან:", userObject.name);
console.log("ასაკი ობიექტიდან:", userObject.age);
console.log("პირველი უნარი:", userObject.skills[0]);


// ==========================================
// პრაქტიკული მაგალითი ეკრანზე გამოსატანად
// ==========================================
// მოვძებნოთ ელემენტი HTML-ში
const outputDiv = document.getElementById('output');

if(outputDiv) {
    // მონაცემებს ეკრანზე გამოვიტანთ უკვე გადაკეთებული userObject-დან
    outputDiv.innerHTML = `
        <h3>მომხმარებლის ინფორმაცია (ამოღებული JSON-დან):</h3>
        <p><strong>სახელი:</strong> ${userObject.name}</p>
        <p><strong>ასაკი:</strong> ${userObject.age}</p>
        <p><strong>სტუდენტია?:</strong> ${userObject.isStudent ? "კი" : "არა"}</p>
        <p><strong>უნარები:</strong> ${userObject.skills.join(", ")}</p>
    `;
}
