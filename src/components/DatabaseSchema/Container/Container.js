import { Flex, Box } from '@react-three/flex';
import Table from '../Table/Table';

export const Container = (props) => {
  function renderTables() {
    return props.tables.map((table) => {
      return (
        <Box>
          <Table table={table} onClickTable={props.onClickTable}/>
        </Box>
      )
    });
  }

  return <Flex>{renderTables()}</Flex>
};
