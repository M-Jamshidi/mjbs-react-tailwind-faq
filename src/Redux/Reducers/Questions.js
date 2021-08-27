let initialState = {
   questions: []
}

const questionsData = (preState = initialState, action) => {
   switch(action.type) {
      case('GET_QUESTIONS') :
         return {
            ...preState,
            questions: action.questions,
         };
      case('ADD_QUESTION'): 
         let questions = [
            {
               id: action.data.id,
               title: action.data.title,
               slug: action.data.slug,
               avatar: action.data.avatar,
               time: action.data.time,
               date: action.data.date,
               commentCount: action.data.commandCount,
               description: action.data.description,
               body: action.data.body
            },
            ...preState.questions
         ];

         return {
            ...preState,
            questions: questions
            // questions: questions.map((item)=>{return {...item,commentCount:item.commentCount+1}})
         }
      default:
         return preState;
   }
}

export default questionsData;