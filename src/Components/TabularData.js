import React from "react";
import data from '../data/data.json';

function TabularData ({theme}) {

    const salesItemData = data.salesItemsData;

    return (
        <>
            <h5>Top Popular Sale Items</h5>
            <table className={`table ${theme ? 'text-light' : 'text-dark'}`}>
                <thead>
                    <tr>
                        <th scope="col">Item Category</th>
                        <th scope="col">APSD</th>
                        <th scope="col">UPSD</th>
                        <th scope="col">SKU Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                    {salesItemData.map((itemData) => (
                        <tr key={itemData.id}>
                            <td scope="row">{itemData.itemCategory}</td>
                            <td>{itemData.APSD}</td>
                            <td>{itemData.UPSD}</td>
                            <td>
                                <div className="progress bg-danger">
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: itemData.skuStock + '%'}} aria-valuenow={itemData.skuStock} aria-valuemin="0" aria-valuemax="150">{itemData.skuStock}</div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {/* </tr> */}
                </tbody>
            </table>
        </>
    );
}

export default TabularData;