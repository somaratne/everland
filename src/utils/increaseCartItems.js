const increaseItem = (currentList, newItem) => {
  const item = currentList.find((i) => i.id === newItem.id);
  item.quantity += 1;
  const index = currentList.indexOf(item);
  currentList.splice(index, 1, item);
  return [...currentList];
};

export default increaseItem;
