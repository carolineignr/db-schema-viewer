/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

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
    setState({ ...state, isActive: !state.isActive });
    props.onClick(props.table);
  }

  return (
    <mesh {...props} ref={mesh} onClick={onClickTable}>
      <boxBufferGeometry args={[1, 1, 0.2]} />
      <meshStandardMaterial color={state.isActive ? 'green' : 'white'} />
    </mesh>
  );
};

export default Table;
