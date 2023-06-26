import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import People from './people';
import INN from './inn';
import Start from './startdate';
import End from './enddate';

const Grid = ({ rowData }) => {
  const gridRef = useRef();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'Проект', filter: true, width: 130 },
    { field: 'Очередь', filter: true, width: 130 },
    { field: 'Вид работ', filter: true, width: 130 },
    { field: 'Секция', filter: true, width: 100 },
    { field: 'Этаж', filter: true, width: 110 },
    { field: 'Этап Работы', filter: true, width: 140 },
    { field: 'Комплекс работ', filter: true, width: 170 },
    { field: 'Работа', filter: true, width: 130 },
    { field: 'Исполнитель', filter: true, cellRenderer: 'peopleRenderer'|| undefined, width: 140 }, 
    { field: 'ИНН', filter: true, cellRenderer: 'innRenderer', width: 130 }, 
    { field: 'Дата назначения', filter: true, cellRenderer: 'startRenderer', width: 170 }, 
    { field: 'Дата снятия', filter: true, cellRenderer: 'endRenderer', width: 150  }, 
  ]);
  const defaultColDef = useMemo(() => ({
    sortable: true
  }), []);

  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);

  return (
    <div className="table-container">
      <div className="ag-theme-alpine" style={{ width: "91vw", height: 500 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onCellClicked={cellClickedListener}
          frameworkComponents={{
            peopleRenderer: People,
            innRenderer: INN,
            startRenderer: Start,
            endRenderer: End,
          }}
        />
      </div>
    </div>
    
  );
};

export default Grid;





