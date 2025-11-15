// 5)გვერდზე იყოს 5 <li>.
// მიწვდი მესამე li ს
// და textContent გააკეთე ცარიელი სტრინგი ანუ ამოშალე მასში მყოფი ტექსტი:

let li = document.getElementsByTagName("li");

for(let i of li){
    i.textContent = ""
}
