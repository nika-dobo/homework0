// 2)შექმენი ფუნქცია, რომელიც იღებს არგუმენტად სტუდენტების სახელების სიას და სტუდენტის სახელს და ამ სიას ბოლოში ამატებს სტუდენტის სახელს.

function student(students, newStudent) {
  students.push(newStudent);

  console.log(newStudent);
}

student(["Nika", "Luka", "Ana"], "gio");


