import React, { useCallback } from 'react'
import {  useTable } from 'react-table'

type Column={
    Header:string;
    accessor:string
}

type Props<D extends object> = {
  columns: Column[]
  data: any[]
}

export const Table = <D extends object>({ columns, data }: Props<D>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
    }
  )

  return (
   
      <table
        {...getTableProps}
        className={'w-full min-w-full divide-y divide-gray-200'}
      >
        <thead className={'bg-gray-50 '}>
          {headerGroups.map((headerGroup) => {
            const { key, ...restProps } = headerGroup.getHeaderGroupProps()

            return (
              <tr key={key} {...restProps}>
                {headerGroup.headers.map((column) => {
                  const { key: headerKey, ...headerRestProps } =
                    column.getHeaderProps()

                  return (
                    <th
                      key={headerKey}
                      {...headerRestProps}
                      className={
                        'px-6 py-3 text-[12px] text-center font-medium uppercase tracking-wider text-gray-500'
                      }
                    >
                      {column.render('Header')}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody {...getTableBodyProps()} className='text-center text-[12px] p-3'>
          {rows.map((row:any, index:any) => {
            prepareRow(row)
            const { key:someKey, ...restProps } = row.getRowProps()     
            return (
              <tr
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                key={someKey}
                {...restProps}
              >
                {row.cells.map((cell:any) => {
                  const { key: cellKey } = cell.getCellProps()

                  return (
                    <td key={cellKey} {...cell.getCellProps()} className='p-4'>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
  )
}
