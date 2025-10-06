// 6)დაწერე ფუნქცია, რომელიც იღებს სტუდენტების სახელების სიას და აბრუნებს(ითვლის) რამდენი სახელი იწყება ასო „გ“-ზე.

function func(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i][0] == "გ") {
      sum++;
    }
  }
  console.log(sum);
}

func(["გიორგი", "ნიკა", "გვანცა", "ანა"]);