import './App.css'
import { useEffect } from "react";
import { useItems } from './hooks/useItems'

function App() {

  const { inventory, selectedItems, toggleItem, deleteItem } = useItems()

  useEffect(() => {
    console.log("selectedItems", selectedItems)
  }, [selectedItems])


  return (
    <>
      {
        inventory.map(items => (
          <div key={items.id}>
            <div onClick={() => toggleItem(items.id)}>
              <span>{items.name} ({items.quantity})</span>
            </div>
          </div>
        ))
      }
      <br />
      <h1> Cart </h1>

      {
        selectedItems.map(item => (
          <div key={item.id}>
            <div onClick={() => deleteItem(item.id)}>
              <span>{item.name} ({item.quantity})</span>
            </div>

          </div>
        ))
      }
    </>
  )
}

export default App
