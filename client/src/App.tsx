import { useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client/react";
import { GET_ALL_USERS, ADD_USER } from "./graphql/queries/query";

type UserType = {
  _id: string;
  firstName: string;
  email: string;
  password: string;
  role: string;
};

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const [getUsers, { loading: qLoading, error: qError, data }] = useLazyQuery<{
    users: UserType[];
  }>(GET_ALL_USERS);

  const [addUser, { loading: mLoading, error: mError }] = useMutation<
    { createUser: UserType },
    { firstName: string; email: string; password: string }
  >(ADD_USER);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addUser({ variables: { ...formData } });
      setFormData({ firstName: "", email: "", password: "" });
      alert("User added successfully!");
    } catch (err) {
      console.error("Mutation error:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <div>
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={mLoading}>
          {mLoading ? "Adding..." : "Add User"}
        </button>
      </form>

      <hr />

      <h1>Users</h1>
      <button onClick={() => getUsers()}>Load Users</button>

      {qLoading && <p>Loading users...</p>}
      {qError && <p>Error: {qError.message}</p>}
      {mError && (
        <p style={{ color: "red" }}>Mutation Error: {mError.message}</p>
      )}

      {data?.users.map((user) => (
        <p key={user._id}>
          <strong>{user.firstName}</strong> - {user.email}
          {user.role === "admin" && " (Admin)"}
        </p>
      ))}
    </div>
  );
}

export default App;
