export const addQuestion = data => ({
   type : 'ADD_QUESTION',
   data: data,
})

export const changeHeaderTitle = title => ({
   type: 'CHANGE_HEADER_TITLE',
   title: title
})

export const getQuestions = data => ({
   type: 'GET_QUESTIONS',
   questions: data
})