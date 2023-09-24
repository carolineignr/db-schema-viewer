import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../utils/types';
import TableComparison from '../../views/TableComparison/TableComparison';
import styles from './Tabs.module.scss';

const Tabs = (): React.ReactElement => {
  const [currentTab, setCurrentTab] = useState('1');
  const currentState = useSelector((state: ReduxState) => state);
  const { selectedTables } = currentState;
  const schemaName1 = selectedTables[0].columns[0].rawInfo.table_catalog;
  const tableName1 = selectedTables[0].name;
  const schemaName2 = selectedTables[1].columns[0].rawInfo.table_catalog;
  const tableName2 = selectedTables[1].name;

  const tabs = [
    {
      id: 1,
      tabTitle: `${schemaName1} - ${tableName1}`,
      title: 'Title 1',
      content: <TableComparison table={selectedTables[0]} />,
    },
    {
      id: 2,
      tabTitle: `${schemaName2} - ${tableName2}`,
      title: 'Title 2',
      content: <TableComparison table={selectedTables[1]} />,
    },
  ];

  const handleTabClick = (tabID: number): void => {
    setCurrentTab(`${tabID}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            id={`button-tab-${tab.id}`}
            disabled={currentTab === `${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {tabs.map((tab) => (
          <div id={`content-tab-${tab.id}`}>
            {currentTab === `${tab.id}` && (
              <div>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
