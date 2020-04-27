const decreaseItem = (currentList, newItem) => {
  const item = currentList.find((i) => i.id === newItem.id);
  const index = currentList.indexOf(item);
  if (item.quantity === 1) currentList.splice(index, 1);
  else {
    item.quantity -= 1;
    currentList.splice(index, 1, item);
  }

  return [...currentList];
};

export default decreaseItem;
