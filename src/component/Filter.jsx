import React from 'react'
// import Product from './Product'
// import Products from './Products'
// import maxwidth from '../images/max-width_header.jpg'
// import "../Styles/Color.css"


// import Productapi from './Productapi'
// import Product from '../Compomnents/Product'
import "../Style/Filter.scss"


function Filter() {
    return (
        // <div className='container'>
        //     <div class="aem-Grid aem-Grid--12">
        //         <div class="aem-GridColumn aem-GridColumn--default--3">
        <div className='filterone'>
            <div className='filter'>
                <h6>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6>Attribute</h6>
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Women</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Men</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Smart gear</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Accessories</label> <br />
                {/* <img src={maxwidth}/> */}
                <hr />
            </div>
            <div>
                <p>Colours</p>
                <div class="colors">
                    <button class="square"></button><br />
                    <button class="square1"></button><br />
                    <button class="square2"></button><br />
                    <button class="square3"></button><br />
                </div>

                <div class="colors1">
                    <button class="square5"></button><br />
                    <button class="square6"></button><br />
                    <button class="square7"></button><br />
                    <button class="square8"></button>
                </div>
            </div>
            <hr />
            <div>
                <h6>Attribute</h6>
                <input type="checkbox" id="option" name="option" value="option" />
                <label>S</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>M</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>L</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>XL</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>XXL</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>XXXL</label> <br />

                <hr />
            </div>
        </div>

    )
}

export default Filter