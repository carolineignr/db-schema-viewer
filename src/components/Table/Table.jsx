/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/flex';
import { Html } from '@react-three/drei';

export const Table = (props) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const mesh = useRef();
  const rotation = 0.01;
  const { onClick, table, position, textPosition, selectedTables } = props;

  useFrame(() => {
    mesh.current.rotation.x += rotation;
    mesh.current.rotation.y += rotation;
  });

  function activateHover() {
    setHover(true);
  }

  function desactivateHover() {
    setHover(false);
  }

  function handleClick() {
    if (selectedTables.length !== 2) setActive(!active);
    if (active) setActive(false);

    onClick(table);
  }

  return (
    <>
      <Box
        margin={3.5}
        onPointerEnter={() => activateHover()}
        onPointerLeave={() => desactivateHover()}
      >
        <mesh
          onClick={handleClick}
          ref={mesh}
          position={position}
          style={{ cursor: 'pointer', color: 'white' }}
        >
          <boxBufferGeometry args={[1, 1, 0.3]} />
          <meshToonMaterial color={active || hover ? '#f4762d' : 'black'} />
        </mesh>
        <Html position={textPosition} zIndexRange={[0, 1]}>
          {table.name}
        </Html>
      </Box>
    </>
  );
};

export default Table;
