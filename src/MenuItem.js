
import React from 'react';



// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, count, onAddToCart, onRemoveFromCart }) => {
    

    return (
        <div className="row">
            <div className="col-md-6 col-xs-6">
                <img src={"images/" + imageName} alt={title} width="150" height="150" />
            </div>
            <div className="col-md-6 col-xs-6">
                <h1> {title} </h1>
                <p> {description} </p>
                <div className="row">
                    <div className="col">
                        <p>Price: ${price}</p>
                    </div>
                    <div className="col">
                        <button onClick={onRemoveFromCart} type="button" className="btn btn-primary"> - </button>
                    </div>

                    <div className="col">
                           <p> {count} </p>
                    </div>

                    <div className="col">
                        <button onClick={onAddToCart} type="button" className="btn btn-primary"> + </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MenuItem;
