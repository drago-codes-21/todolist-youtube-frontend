import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      Register
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Enter strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};
export default Register;
// password => sarthak123 => edqeouwlnedwqedwqjwqejwq
// user :{
//     name : string
//     email : email
//     password string
//     todos : []
//     id :
// }
