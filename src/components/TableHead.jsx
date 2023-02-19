import React from 'react'

const TableHead = () => {
  return (
    <thead className="table-head">
        <tr>
            <th></th>
            <th id="time">Time</th>
            <th id="destination">Destination</th>
            <th id="flight">Flight</th>
            <th id="gate">Gate</th>
            <th id="remarks">Remarks</th>
        </tr>
    </thead>
  )
}

export default TableHead