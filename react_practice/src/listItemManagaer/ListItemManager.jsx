
/**
 problem statement

 You are tasked with creating a simple React application called "Item List Manager" that displays a list of items and 
 allows users to add new items to the list. 
 The items will be displayed in an unordered list (<ul>), and there will be an input field along with a button to add new items to this list.
 Detailed Requirements

When the application loads, it should display an empty list.
The input field should accept user text input.
When the button is clicked:
The text from the input field should be added to the list.
The input field should be cleared.
If the input field is empty and the button is clicked, nothing should be added to the list.


Sample Interaction
Initial State

The list is empty.
The input field is empty.
User Action 1

User types "First Item" in the input field.
User clicks "Add Item" button.
The list displays "First Item".
User Action 2

User types "Second Item" in the input field.
User clicks "Add Item" button.
The list displays:
"First Item"
"Second Item"

simply - need to add  items in list , one by one display and after adding input field clears.

 */


import React, { useState } from 'react';

const ListItemManager = () => {
    // Initialize as an empty array
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const addItem = () => {
        if (input.trim() !== '') {
            // Add input to list
            setItems(prevItems => [...prevItems, input]); 
            setInput(''); // Clear input
        }
    };

    return (
        <div>
            <h1>Adding Item into list</h1>
            <input
                type='text'
                placeholder='Enter item'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addItem}>Add item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListItemManager;
