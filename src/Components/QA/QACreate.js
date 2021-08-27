import React from 'react';
import Button from "../Layouts/Widget/Button";
import axios from 'axios';
import {connect} from 'react-redux';
import {addQuestion} from './../../Redux/Actions';

class QACreate extends React.PureComponent{

   state = {
      title: '',
      body: '',
   }

   onTitleChange = (e) => {
      this.setState({title: e.target.value});
   }

   onBodyChange = (e) => {
      this.setState({body: e.target.value});
   }

   storeQuestion = () => {

      let d = new Date();
      let today = new Date().toLocaleDateString('fa-IR');
      
      const question = {
         "title": this.state.title,
         "slug": this.state.title.replace(/ /g,"_"),
         "avatar": "https://i.pravatar.cc/50",
         "time": d.getHours() + ':' + d.getMinutes(),
         "date": today,
         "commentCount": 0,
         "description": this.state.body,
         "body": this.state.body
      }

      const headers = {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      }

      axios.post('http://localhost:3000/questions', JSON.stringify(question), {headers})

      .then(response => {
         this.setState({
            title: '',
            body: ''
         });

         this.props.dispatch(addQuestion(response.data));

         this.props.closeModal();

      })

      .catch(error => console.log(error));

   }

   render() {
      return(
         <div className='shadow-box bg-mainLightestColor font-Shabnam text-sm'>

            {/* header of the card */}
            <div className='flex flex-row-reverse items-center justify-between bg-white py-2 px-4 rounded-md shadow-nav h-12'>
               <div className='flex flex-row-reverse items-center'>
                  <h2 className='rtl-direction font-bold'>ایجاد سوال جدید</h2>
               </div>
               <div className='flex flex-row-reverse items-center text-mainGrayDarkerColor p-3 cursor-pointer' onClick={this.props.closeModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
               </div>
            </div>

            {/* body of the card */}
            <div className='text-sm px-4 py-4 rtl-direction leading-6'>
               <p className='mt-2 text-xs text-mainGrayDarkerColor'>موضوع</p>
               <input
                  value={this.state.title}
                  onChange={this.onTitleChange}
                  type='text'
                  className='w-full border border-secondaryBorderColor rounded-md py-2 px-4 mt-3 font-light focus:outline-none'
                  placeholder='متن سوال ...'
               />
               <p className='mt-4 text-xs text-mainGrayDarkerColor'>متن سوال</p>
               <textarea
                  value={this.state.body}
                  onChange={this.onBodyChange}
                  className='w-full border border-secondaryBorderColor rounded-md py-2 px-4 mt-3 font-light focus:outline-none'
                  rows={5}
                  placeholder='موضوع سوال'
               ></textarea>
            </div>

            {/* footer of the card */}
            <div className='px-4 pt-2 pb-4 w-max flex '>
               <Button func={this.storeQuestion} bgHoverColor='hover:bg-green-700' bgColor='bg-mainGreenColor'> 
                  <span>ایجاد سوال</span>
               </Button>
               <span className='w-4'></span>
               <Button func={this.props.closeModal} bgColor='bg-mainLightestColor' bgHoverColor='hover:bg-gray-100' color='text-mainGreenColor' hColor='text-mainGreenColor'> 
                  <span>انصراف</span>
               </Button>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => (console.log(state));

export default connect(mapStateToProps)(QACreate);