import React from 'react';
import { useParams } from 'react-router-dom';

export const Tables = (): React.ReactElement => {
  const params = useParams();

  return <div>Tables</div>;
};

export default Tables;
