import React, { useState } from "react";

function DynamicList() {
    const [items, setItems] = useState([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ]);

    const handleClick = (item) => {
        console.log("Item clicked:", item);
    };

    const addItem = () => {
        const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
        setItems([...items, newItem]);
    };

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={() => handleClick(item)}>
                        {item.name}
                    </li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}

export default DynamicList;
