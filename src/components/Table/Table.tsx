/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { Html } from '@react-three/drei';

import styles from './Table.module.scss';

export const Table = (props: any): ReactElement => {
  const rotation = 0.01;
  const mesh: any = useRef();
  const [state, setState] = useState({ isHovered: false, isActive: false });

  useFrame(() => {
    mesh.current.rotation.x = rotation;
    mesh.current.rotation.y += rotation;
  });

  function onClickTable(): void {
    props.onClickTable(props.table.name);
    setState({ ...state, isActive: !state.isActive });
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={state.isHovered ? [1.5, 1.5, 0.25] : [1, 1, 0.15]}
      onClick={onClickTable}
      onPointerOver={() => setState({ ...state, isHovered: true })}
      onPointerOut={() => setState({ ...state, isHovered: false })}
    >
      <boxBufferGeometry args={[1, 1, 2]} />
      <meshStandardMaterial color={state.isActive ? '#820263' : '#D90368'} />
      <Html distanceFactor={5}>
        <div className={styles.nameContainer}>{props.table.name}</div>
      </Html>
    </mesh>
  );
};

export default Table;
