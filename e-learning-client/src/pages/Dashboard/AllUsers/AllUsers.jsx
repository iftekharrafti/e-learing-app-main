import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { toast } from "react-hot-toast";

const AllUsers = () => {
    const {data: users=[], refetch} = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            return data;
        }
    })

    const makeAdmin = (id) =>{
      fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PUT',
        headers: {
        }
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0){
          toast.success('Make admin successful')
          refetch();
        }
      })
    }

    return (
        <div className="shadow rounded" style={{background: "#fff"}}>
            <h2 className="fs-2 fw-bold text-center py-4">My courses</h2>
            <Table striped bordered hover responsive  >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                  </tr>
                </thead>
                {users.map((user) => (
                  <tbody key={user._id}>
                    <tr>
                      <td>
                      {user.name}
                      </td>
                      <td>{user.email}</td>
                      <td>
                        {user?.role !== 'admin' && <Button onClick={() => makeAdmin(user._id)}>
                          Admin
                        </Button>}
                        {" "}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
        </div>
    );
};

export default AllUsers;