export const SortData = ({Component, list, propName}) => {
  const strategy = {
    month: item => ({ [propName]: new Date(item.date).toLocaleString('en', { month: 'short' }), amount: item.amount }),
    year: item => ({ [propName]: new Date(item.date).getFullYear(), amount: item.amount }),
  };

  const newList = propName === 'date' ? list.sort((a, b) => new Date(b.date) - new Date(a.date)) : list.map(item => strategy[propName](item))

  return (
    <Component list={newList} />
  )
}
