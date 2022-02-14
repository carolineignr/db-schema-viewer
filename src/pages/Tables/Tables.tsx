import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

export const Tables = (): ReactElement => {
	const params = useParams();

  return <div>Tables</div>;
};

export default Tables;
