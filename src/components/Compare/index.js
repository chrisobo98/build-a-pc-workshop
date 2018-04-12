import React from 'react'

const Compare = ({products}) =>

  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th></th>
            {products.map(products =>
              <th key={products.id}>
                {products.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Price</th>
            {products.map(products =>
              <td key={products.id} className="text-center">{products.price}</td>
            )}
          </tr>
          <tr className="colors">
            <th scope="row">Colors</th>
            {products.map(products =>
              <td key={products.id}>
                {products.colors.map((color, index) =>
                  <span key={index} className={"bg-" + color}></span>
                )}
              </td>
            )}
          </tr>
          <tr className="condition">
            <th scope="row">Condition</th>
            {products.map(products =>
              <td key={products.id} className={products.condition === "Used" ? "bg-red" : "bg-green"}>
                {products.condition}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>

export default Compare
