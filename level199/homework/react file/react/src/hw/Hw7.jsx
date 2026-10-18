import { useState } from "react";

function Hw7() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("პაროლები ერთმანეთს არ ემთხვევა!");
      setShowData(false);
    } else {
      setMessage("");
      setShowData(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">რეგისტრაცია</button>
      </form>

      {message && <p>{message}</p>}

      {showData && (
        <div>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

export default Hw7;
