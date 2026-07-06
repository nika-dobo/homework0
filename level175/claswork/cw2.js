// შექმენით ასინქრონული ფუიქნცია რომელიც წამოიღებს აიპიაიდან ინფორმაციას(ნახეთ რამე api დავალებიდან ან ნებსიმიერი) შენი დავალებაა რომ ეკრანზე გამოიტანო ეიპიაიდან რაიმე ტექსტი . გამოიყენე awync await

// ასევე გამოიყენე try catch finallt ბლოკი

async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }
}

getPost();
