import { useState } from "react";

function Hw6() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email);
    setSubmittedPassword(password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">შესვლა</button>
      </form>

      {submittedEmail && (
        <div>
          <p>{submittedEmail}</p>
          <p>{submittedPassword}</p>
        </div>
      )}
    </div>
  );
}

export default Hw6;
