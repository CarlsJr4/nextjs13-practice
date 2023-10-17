import React from 'react';
import UserTable from './UserTable';

interface Props {
  searchParams: { sortBy: string };
}

const UsersPage = async ({ searchParams: { sortBy } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortBy={sortBy} />
    </>
  );
};

export default UsersPage;
