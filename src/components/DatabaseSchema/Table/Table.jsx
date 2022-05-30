/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/flex';

export const Table = (props) => {
  const [active, setActive] = useState(false);
  const mesh = useRef();
  const rotation = 0.01;
  const { onClick, table, position } = props;
  // const loader = new FontLoader();

  useFrame(() => {
    mesh.current.rotation.x += rotation;
    mesh.current.rotation.y += rotation;
  });

  function handleClick() {
    setActive(!active);
    onClick(table);
  }

  // loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

  //   const geometry = new TextGeometry( 'Hello', {
  //     font: font,
  //     size: 80,
  //     height: 5,
  //     curveSegments: 12,
  //     bevelEnabled: true,
  //     bevelThickness: 10,
  //     bevelSize: 8,
  //     bevelOffset: 0,
  //     bevelSegments: 5
  //   } );
  // } );

  return (
    <Box margin={1}>
      <mesh onClick={handleClick} ref={mesh} position={position}>
        <boxBufferGeometry args={[1, 1, 0.2]} />
        <meshStandardMaterial color={active ? 'orange' : 'white'} />
        teste
      </mesh>
    </Box>
  );
};

export default Table;
