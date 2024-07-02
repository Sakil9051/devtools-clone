import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { setFilter, setSelectedRequest } from '../store/requestSlice';

const NetworkMonitor = () => {
  const dispatch = useDispatch();
  const { list, filter } = useSelector((state) => state.requests);

  const filteredRequests = list.filter(req => filter === 'all' || req.type === filter);

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'url' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Type', accessor: 'type' },
      { Header: 'Size', accessor: 'size' },
      { Header: 'Time', accessor: 'time' },
      { Header: 'Initiator', accessor: 'initiator' },
    ],
    []
  );

  const data = React.useMemo(() => filteredRequests, [filteredRequests]);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Network Requests</h2>
      <div className="mb-4">
        <label>Filter:</label>
        <select value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} className="ml-2 p-1 border">
          <option value="all">All</option>
          <option value="xhr">Fetch/XHR</option>
          <option value="doc">Doc</option>
          <option value="css">CSS</option>
          <option value="js">JS</option>
          <option value="font">Font</option>
          <option value="img">Img</option>
          <option value="media">Media</option>
          <option value="manifest">Manifest</option>
          <option value="ws">Ws</option>
          <option value="wasm">Wasm</option>
          <option value="other">Other</option>
        </select>
      </div>
      <table {...getTableProps()} className="min-w-full bg-white">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="px-4 py-2 border">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => dispatch(setSelectedRequest(row.original))} className="cursor-pointer">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="px-4 py-2 border">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NetworkMonitor;
