import React, { useState } from "react";
import { useAddListItemsMutation } from "../../slices/listItemsSlice";

function AddListItemForm({ myListId }) {
  const [inputValue, setInputValue] = useState("");
  const [addListItem] = useAddListItemsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Split the input by commas and remove any whitespace
    const items = inputValue
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

    try {
      // Add each item separately
      for (const item of items) {
        await addListItem({ myListId, itemName: item });
      }
      setInputValue(""); // Clear the input after click
      alert("Items added successfully");
    } catch (error) {
      console.error("Failed to add items:", error);
      alert("An error occurred while adding items");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="listItemInput">Add Items (comma separated):</label>
      <input
        type="text"
        id="listItemInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter items separated by commas"
      />
      <button type="submit" className="add-items-button">
        Add Items
      </button>
    </form>
  );
}

export default AddListItemForm;