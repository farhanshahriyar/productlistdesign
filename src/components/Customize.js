import React from 'react'


const Customize = () => {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-2'>
          <div className="select">
            <select defaultValue={''} name="format" id="format">
                <option value={''} disabled>Choose a Category</option>
                <option value="hoodie">Hoodie</option>
                <option value="panjabi">Panjabi</option>
                <option value="tshirt">TShirt</option>
                <option value="shirt">Shirt</option>
            </select>
          </div>
        </div>
        <div className='col-7'>
        <div className="select">
            <select defaultValue={''} name="format" id="format">
                <option value={''} disabled>Choose a Size</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
            </select>
          </div>
        </div>
      </div>
      <div className='col float-end'>
          <div className='add-to-cart'>
              <button>Add To Cart</button>
          </div>
        </div>
     
          
    </div>
    </>
  )
}

export default Customize