import { actionTypes } from "./actionTypes";

export const initialState = {
  courses: [],
  cart: [],
  bookmark: [],
  checkout: [],
  subTotal: 0,
  checkoutTotal: 0,
  loading: false,
  sorting_value: ""
};

export const courseReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.FETCHING_END:
      return {
        ...state,
        courses: action.payload,
        loading: false,
      }

    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        subTotal: parseInt(state.subTotal) + parseInt(action.price)
      };

    case actionTypes.REMOVE_CART:
        return{
            ...state,
            cart: state.cart.filter(course => course._id !== action.payload),
            subTotal: parseInt(state.subTotal) - parseInt(action.price)
        }

    case actionTypes.ADD_TO_BOOKMARK:
        return{
            ...state,
            bookmark: [...state.bookmark, action.payload]
        }

    case actionTypes.REMOVE_BOOKMARK:
        return{
            ...state,
            bookmark: state.bookmark.filter(course => course._id !== action.payload)
        }

    case actionTypes.CHECKOUT:
      let newCheckout;
      let tempCheckout = [...state.checkout];
      newCheckout = tempCheckout.concat(action.payload)
      return {
        ...state, 
        checkout: newCheckout,
        checkoutTotal: parseInt(state.checkoutTotal) + parseInt(state.subTotal),
        cart: [],
        subTotal: 0
      }

    case actionTypes.SORTING_VALUE:
      return {
        ...state,
        sorting_value: action.payload
      }

    case actionTypes.SORTING_COURSE:
      let newSortData;
      let tempSortCourse = [...action.payload]

      if(state.sorting_value === "lowHigh"){
        const sortingCourse = (a,b) => {
          return a.price - b.price;
        }
        newSortData = tempSortCourse.sort(sortingCourse);
      }
      if(state.sorting_value === "HighLow"){
        const sortingCourse = (a,b) => {
          return b.price - a.price;
        }
        newSortData = tempSortCourse.sort(sortingCourse);
      }


      if(state.sorting_value === 'atoz'){
        newSortData = tempSortCourse.sort((a,b) => a.title.localeCompare(b.title))
      }

      if(state.sorting_value === 'ztoa'){
        newSortData = tempSortCourse.sort((a,b) => b.title.localeCompare(a.title))
      }

      return {
        ...state,
        courses: newSortData 
      }

    default:
      break;
  }
};
