import React, { useState } from 'react';

function LoginForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearForm = () => setForm({ email: '', password: '', fullName: '', age: '' });

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <button onClick={clearForm}>Clear</button>
      <h3>Entered Data:</h3>
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
      <p>Full Name: {form.fullName}</p>
      <p>Age: {form.age}</p>
    </div>
  );
}

export default LoginForm;
