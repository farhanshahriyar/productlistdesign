import React from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Customize = () => {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-2'>
          <div class="select">
            <select name="format" id="format">
                <option selected disabled>Choose a Category</option>
                <option value="hoodie">Hoodie</option>
                <option value="panjabi">Panjabi</option>
                <option value="tshirt">TShirt</option>
                <option value="shirt">Shirt</option>
            </select>
          </div>
        </div>
        <div className='col-7'>
        <div class="select">
            <select name="format" id="format">
                <option selected disabled>Choose a Size</option>
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
     
          {/* <InputGroup className="p-10 mb-1">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup> */}
    </div>
    </>
  )
}

export default Customize