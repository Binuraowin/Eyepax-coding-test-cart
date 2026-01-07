import { useState } from "react";

const inventory = [
    { id: 1, name: 'bacon', unitPrice: 10.99, quantity: 10 },
    { id: 2, name: 'eggs', unitPrice: 3.99, quantity: 10 },
    { id: 3, name: 'cheese', unitPrice: 6.99, quantity: 10 },
    { id: 4, name: 'chives', unitPrice: 1.00, quantity: 10 },
    { id: 5, name: 'wine', unitPrice: 11.99, quantity: 10 },
    { id: 6, name: 'brandy', unitPrice: 17.55, quantity: 10 },
    { id: 7, name: 'bananas', unitPrice: 0.69, quantity: 10 },
    { id: 8, name: 'ham', unitPrice: 2.69, quantity: 10 },
    { id: 9, name: 'tomatoes', unitPrice: 3.26, quantity: 10 },
    { id: 10, name: 'tissue', unitPrice: 8.45, quantity: 10 },
];


export const useItems = () => {
    const [selectedItems, setSelectedItems] = useState([])
    const [inventoryItems, setInventoryItems] = useState(inventory)

    const toggleItem = (id) => {
        const item = inventoryItems.find(item => item.id === id);
        if (!item || item.quantity <= 0) {
            alert("Out of stock!");
            return;
        }
        setInventoryItems(inventoryItems.map(invItem =>
            invItem.id === id ? { ...invItem, quantity: invItem.quantity - 1 } : invItem
        ));

        const existingItem = selectedItems.find(cartItem => cartItem.id === id);

        if (existingItem) {
            setSelectedItems(selectedItems.map(cartItem =>
                cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
        }
    }


    const deleteItem = (id) => {
        const cartItem = selectedItems.find(item => item.id === id);
        if (!cartItem) return;

        setInventoryItems(inventoryItems.map(invItem =>
            invItem.id === id ? { ...invItem, quantity: invItem.quantity + cartItem.quantity } : invItem
        ));
        setSelectedItems(selectedItems.filter((item) => item.id !== id));
    }

    const fetchItems = () => {
        return selectedItems
    }

    return {
        inventory: inventoryItems,
        selectedItems,
        toggleItem,
        fetchItems,
        deleteItem
    }
}


