import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortBy: string;
}

const UserTable = async ({ sortBy }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  let users: User[] = await res.json();
  if (sortBy === 'name') {
    users = sort(users).asc([u => u.name]);
  } else if (sortBy === 'email') {
    users = sort(users).asc([u => u.email]);
  }
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortBy=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortBy=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
