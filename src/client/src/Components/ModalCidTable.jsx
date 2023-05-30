import React from 'react'

export const ModalCidTable = ({data}) => {
  return (
    <>
      <table className="table table-sm table-dark table-borderless table-striped table-hover">
        <tbody>
          <tr>
            <th className="w-10">CID</th>
            <th className="flex-fill">Descrição</th>
          </tr>
        </tbody>
        <tbody className="table-group-divider">
          {data.map(item => (
          <tr key={item.Cid10} >
            <td>{item.idCid}</td>
            <td>{item.descr}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
