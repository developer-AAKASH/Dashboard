import React from "react";

function SimpleTableData ({theme, data}) {
    return (
        <>
            <h5 className={`table ${theme ? 'text-light' : 'text-dark'}`}>Today's Weather - 8&#8451;</h5>
            <h6 className={`table ${theme ? 'text-light' : 'text-muted'}`}>People always buy below items in this weather</h6>
            <table className={`table ${theme ? 'text-light' : 'text-dark'}`}>
                <thead>
                    <tr>
                        <th scope="col">Item Category</th>
                        <th scope="col">Stock Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => (
                        <tr key={data.id}>
                            <td scope="row">{data.itemCategory}</td>
                            <td className={data.stockStatus ? 'text-success' : 'text-danger'}>
                                {data.stockStatus ? 'Instock' : 'Out of stock'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default SimpleTableData;