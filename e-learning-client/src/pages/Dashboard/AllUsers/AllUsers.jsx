import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  // Get users from the database
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch("https://e-learning-app-i5dn.onrender.com/users");
      const data = await res.json();
      return data;
    },
  });

  // Make admin
  const makeAdmin = (id) => {
    fetch(`https://e-learning-app-i5dn.onrender.com/users/admin/${id}`, {
      method: "PUT",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful");
          refetch();
        }
      });
  };

  return (
    <div className="shadow rounded" style={{ background: "#fff" }}>
      <h2
        className="fs-2 fw-bold text-center py-4"
        style={{ fontFamily: "Merriweather" }}
      >
        All Users
      </h2>
      {/* Show all users as a table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        {/* show user from the database */}
        {users.map((user) => (
          <tbody key={user._id}>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user?.role !== "admin" && (
                  <Button onClick={() => makeAdmin(user._id)}>Admin</Button>
                )}{" "}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default AllUsers;
