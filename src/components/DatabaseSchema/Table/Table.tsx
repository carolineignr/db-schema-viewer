/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import styles from './Table.module.scss';

export const Table = (props: any): React.ReactElement => {
  const rotation = 0.01;
  const mesh: React.MutableRefObject<any> = useRef();

  useFrame(() => {
    mesh.current.rotation.x += rotation;
    mesh.current.rotation.y += rotation;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 0.2]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Table;
