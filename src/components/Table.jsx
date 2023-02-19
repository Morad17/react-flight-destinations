import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'

const Table = () => {
  return (
    <table className="table">
        <TableHead />
        <TableBody />
    </table>
  )
}

export default Table