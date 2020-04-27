export const addItems = (currentList, newItem) => {
  const item = currentList.find((l) => l.id === newItem.id);
  if (!item) {
    newItem.quantity = 1;
    currentList.push(newItem);
    return [...currentList];
  } else {
    item.quantity += 1;
    const index = currentList.indexOf(item);
    currentList.splice(index, 1, item);
    return [...currentList];
  }
};
