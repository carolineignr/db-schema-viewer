/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/flex';
import { Html } from '@react-three/drei';

export const Table = (props) => {
  const [active, setActive] = useState(false);
  const mesh = useRef();
  const rotation = 0.01;
  const { onClick, table, position, textPosition } = props;

  useFrame(() => {
    mesh.current.rotation.x += rotation;
    mesh.current.rotation.y += rotation;
  });

  function handleClick(e) {
    console.log(e);
    setActive(!active);
    onClick(table);
  }

  return (
    <>
      <Box margin={3}>
        <mesh onClick={handleClick} ref={mesh} position={position}>
          <boxBufferGeometry args={[1, 1, 0.3]} />
          <meshToonMaterial color={active ? 'white' : 'black'} />
        </mesh>
        <Html position={textPosition} zIndexRange={[0, 1]}>
          {table.name}
        </Html>
      </Box>
    </>
  );
};

export default Table;
