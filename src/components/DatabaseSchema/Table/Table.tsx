import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export const Table = (props: any): React.ReactElement => {
  const [active, setActive] = useState(false);
  const mesh: React.MutableRefObject<any> = useRef();
  const rotation = 0.01;
  const { onClick, table, position } = props;

  useFrame(() => {
    mesh.current.rotation.x += rotation;
    mesh.current.rotation.y += rotation;
  });

  function handleClick(): void {
    setActive(!active);
    onClick(table);
  }

  return (
    <mesh position={position} onClick={handleClick} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 0.2]} />
      <meshStandardMaterial color={active ? 'orange' : 'white'} />
    </mesh>
  );
};

export default Table;
