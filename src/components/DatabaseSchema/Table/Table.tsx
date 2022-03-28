/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { Html } from '@react-three/drei';

import styles from './Table.module.scss';

export const Table = (props: any): React.ReactElement => {
  const [state, setState] = useState({ isHovered: false, isActive: false });
  const rotation = 0.01;
  const mesh: React.MutableRefObject<any> = useRef();

  useFrame(() => {
    mesh.current.rotation.x += rotation;
    mesh.current.rotation.y += rotation;
  });

  function onClickTable(): void {
    props.onClickTable(props.table.name);
    setState({ ...state, isActive: !state.isActive });
  }

  return (
    <mesh {...props} ref={mesh} onClick={onClickTable}>
      <boxBufferGeometry args={[1, 1, 0.2]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Table;
