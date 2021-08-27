let initialState = {
   headerTitle: 'لیست سوالات'
}

const config = (preState = initialState, action) => {
   switch(action.type) {
      case('CHANGE_HEADER_TITLE'):
         return {
            headerTitle: action.title
         }
      default:
         return preState;
   }
}

export default config;