import { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [surename, setSurename] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setSurename(e.target.surename.value);
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input type="text" name="name" />
        <input type="text" name="surename" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">submit</button>
      </form>

      <p>
        {name} / {surename} / {email} / {password}
      </p>
    </>
  );
}

export default App;
