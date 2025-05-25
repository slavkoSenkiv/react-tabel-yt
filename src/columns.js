import EditableCell from './components/EditableCell';
import StatusCell from './components/StatusCell';
import DateCell from './components/DateCell';

/**
 * Returns column definitions for the table.
 * @param {Function} updateData - Function used to update the data for a given row and column.
 */

export function getColumns(updateData) {
  return [
    {
      id: 'task',
      accessorFn: (row) => row.task,
      header: 'Task',
      size: 225,
      cell: EditableCell,
      enableColumnFilter: true,
      filterFn: 'includeString',
    },
    {
      id: 'status',
      accessorFn: (row) => row.status ?? null,
      header: 'Status',
      cell: StatusCell,
      enableSorting: true,
      enableColumnFilter: true,
      filterFn: 'equalsString',
    },
    {
      id: 'due',
      accessorFn: (row) => row.due,
      header: 'Due',
      cell: DateCell,
    },
    {
      id: 'notes',
      accessorFn: (row) => row.task,
      header: 'Notes',
      cell: EditableCell,
    },
  ];
}
