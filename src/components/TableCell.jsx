import React from 'react'

const TableCell = ({word}) => {



  return (
    <td>{Array.from(word).map((letter, _index)=> (
        <div className="">{letter}</div>
    ))}</td>
  )
}

export default TableCell