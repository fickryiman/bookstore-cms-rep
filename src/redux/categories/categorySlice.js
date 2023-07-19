const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = [], action) => {
  const { type } = action;

  switch (type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
export { checkStatus };
