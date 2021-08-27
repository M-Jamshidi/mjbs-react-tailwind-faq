import React, {Component} from 'react';
import Button from '../Layouts/Widget/Button';
import QA from './QA';
import Loading from '../Layouts/Widget/Loading';
import axios from 'axios';

class QAList extends Component {

   state = {
      questions: [],
      loading: true
   }

   componentDidMount() {

      // we must to show the loading as first step
      this.setState({loading: true});

      // now we have to get the data from the api
      axios.get('http://localhost:3000/questions?_sort=id&_order=desc')

         .then(response => {
            console.log('we get the first data for all questions. this is for the test. delete it for production version');
            this.setState({
               questions: response.data,

               // turn off the loading
               loading: false
            })
         })
         
         .catch(error => console.log('error', error));

   }

   render() {

      // list of the questions
      let {questions, loading} = this.state;

      return(
         <>
            {
               loading
               ? <Loading />
               : questions.map(item => 
                  <QA key={item.id} data={item}>
                     <Button link={`question/${item.slug}`} bColor='border-mainGreenColor' color='text-mainGreenColor'> 
                        <span>مشاهده جزئیات</span>
                     </Button>
                  </QA>
               )
            }
         </>
      )
   }

}

export default QAList;