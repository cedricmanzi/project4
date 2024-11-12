import React from "react";

function Buble() {
    const handleParentClick = (event) => {
        alert('parent clicked');

    };
    const handleChildClick = (event) => {
        alert('Child clicked');
        event.stopPropagation();
    
    };
    return (
        <div onClick={handleParentClick}>
            <div onClick={handleChildClick}>

                <button>onClick={handleParentClick}Click Me</button>
            </div>
        </div>
    );
}
export default Buble;