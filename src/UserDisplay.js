import React from 'react';
import { useRootContext } from './RootContext';

const UserDisplay = () => {
  const { user } = useRootContext();

  return (
    <div>{user}</div>
  )
};

export default UserDisplay;