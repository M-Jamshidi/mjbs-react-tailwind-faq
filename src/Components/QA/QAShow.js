import React, {Component} from 'react';
import QA from './QA';
import Button from './../Layouts/Widget/Button';
import Loading from '../Layouts/Widget/Loading';
import axios from 'axios';
import {connect} from 'react-redux';
import {changeHeaderTitle} from './../../Redux/Actions';

class QAShow extends Component {
   state = {
      question: {},
      answers: [],
      loading: true,
      textInput: ''
   }

   constructor(props) {
      super(props);
      this.props.dispatch(changeHeaderTitle('جزئیات سوال'));
   }

   componentDidMount() {
      // we must to show the loading as first step
      this.setState({loading: true});

      // now we have to get the data from the api
      let questionSlug = this.props.match.params.qa; 
      axios.get(`http://localhost:3000/questions?slug=${questionSlug}&_embed=answers`)

      .then(response => {
         console.log('we get the desired question with related answers. this is for the test. delete it for production version');

         // seprate the question and the answers from each other
         let answers = response.data[0].answers;
         let question = response.data[0];
         delete question.answers;

         this.setState({
            question : question,
            answers : answers,

            // turn off the loading
            loading: false
         })
      })
      
      .catch(error => console.log('error', error));
      
   }

   onAnswerChange = (e) => {this.setState({textInput: e.target.value})}

   incrementPositiveAnswer(answerId) {
      let answer = this.state.answers.find(x => x.id === answerId);

      axios.patch('http://localhost:3000/answers/' + answerId, {
         positiveAnswer: answer.positiveAnswer + 1
      }, {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      })

      .then(response => {
         this.setState({
            answers: this.state.answers.map(item => {
               if (item.id === answerId) {
                  return {
                     ...item,
                     positiveAnswer: item.positiveAnswer + 1
                  }
               } else {
                  return item
               }
            })
         });
      })

      .catch(error => console.log(error));

   }

   incrementNegativeAnswer(answerId) {
      let answer = this.state.answers.find(x => x.id === answerId);

      axios.patch('http://localhost:3000/answers/' + answerId, {
         negativeAnswer: answer.negativeAnswer + 1
      }, {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      })

      .then(response => {
         this.setState({
            answers: this.state.answers.map(item => {
               if (item.id === answerId) {
                  return {
                     ...item,
                     negativeAnswer: item.negativeAnswer + 1
                  }
               } else {
                  return item
               }
            })
         });
      })

      .catch(error => console.log(error));

   }

   storeAnswer = () => {
      let d = new Date();
      let today = new Date().toLocaleDateString('fa-IR');
      
      const question = {
         "title": 'mojtaba jamshidi',
         "avatar": "https://i.pravatar.cc/50",
         "time": d.getHours() + ':' + d.getMinutes(),
         "date": today,
         "positiveAnswer": 0,
         "negativeAnswer": 0,
         "body": this.state.textInput,
         "questionId": this.state.question.id
      }

      const headers = {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      }

      axios.all([
         axios.post('http://localhost:3000/answers', JSON.stringify(question), {headers}),
         axios.patch('http://localhost:3000/questions/' + this.state.question.id, JSON.stringify({
            commentCount: this.state.question.commentCount + 1
         }), {headers})
      ])

      .then(axios.spread((res1, res2)=> {
         this.setState({
            textInput: '',
            question: {
               ...this.state.question,
               commentCount: this.state.question.commentCount + 1
            },
            answers: [
               res1.data,
               ...this.state.answers
            ]
         });
      }))

      .catch(error => console.log(error));

   }

   render() {
      return (
         <>
            {
               this.state.loading
               ? <Loading />
               : <>
                  <QA data={this.state.question} showDetails='true'/>

                  <div className='mt-8 text-right'>
                     <h2 className="font-Shabnam font-bold text-2xl text-mainDarkColor">
                        پاسخ ها
                     </h2>
                  </div>

                  {
                     this.state.answers.map(item =>
                        <QA key={item.id} data={item} showDetails='true'>
                           <div className='flex'>
                              <Button func={this.incrementNegativeAnswer.bind(this, item.id)} bColor='border-mainBorderColor' hColor='hover:text-mainRedColor' bgHoverColor='hover:bg-gray-100' color='text-mainRedColor'> 
                                 <span className='mr-4'>پاسخ خوب نبود</span>
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.30769 6.46154C4.30769 6.27897 4.36183 6.1005 4.46326 5.9487C4.56469 5.7969 4.70886 5.67859 4.87753 5.60873C5.0462 5.53886 5.2318 5.52058 5.41085 5.5562C5.58991 5.59181 5.75439 5.67973 5.88349 5.80882C6.01258 5.93792 6.10049 6.10239 6.13611 6.28145C6.17173 6.46051 6.15345 6.64611 6.08358 6.81478C6.01372 6.98345 5.8954 7.12762 5.74361 7.22905C5.59181 7.33048 5.41334 7.38461 5.23077 7.38461C4.98596 7.38461 4.75117 7.28736 4.57806 7.11425C4.40495 6.94114 4.30769 6.70635 4.30769 6.46154ZM10.7692 7.38461C10.9518 7.38461 11.1303 7.33048 11.2821 7.22905C11.4339 7.12762 11.5522 6.98345 11.622 6.81478C11.6919 6.64611 11.7102 6.46051 11.6746 6.28145C11.639 6.10239 11.551 5.93792 11.4219 5.80882C11.2929 5.67973 11.1284 5.59181 10.9493 5.5562C10.7703 5.52058 10.5847 5.53886 10.416 5.60873C10.2473 5.67859 10.1032 5.7969 10.0017 5.9487C9.90029 6.1005 9.84616 6.27897 9.84616 6.46154C9.84616 6.70635 9.94341 6.94114 10.1165 7.11425C10.2896 7.28736 10.5244 7.38461 10.7692 7.38461ZM16 8C16 9.58225 15.5308 11.129 14.6518 12.4446C13.7727 13.7602 12.5233 14.7855 11.0615 15.391C9.59966 15.9965 7.99113 16.155 6.43928 15.8463C4.88743 15.5376 3.46197 14.7757 2.34315 13.6569C1.22433 12.538 0.462403 11.1126 0.153721 9.56072C-0.15496 8.00887 0.00346628 6.40034 0.608967 4.93853C1.21447 3.47672 2.23985 2.22729 3.55544 1.34824C4.87103 0.469192 6.41775 0 8 0C10.121 0.00240243 12.1544 0.846028 13.6542 2.3458C15.154 3.84557 15.9976 5.879 16 8ZM14.7692 8C14.7692 6.66117 14.3722 5.35241 13.6284 4.23922C12.8846 3.12602 11.8274 2.25839 10.5905 1.74605C9.35356 1.2337 7.99249 1.09965 6.67939 1.36084C5.36629 1.62203 4.16013 2.26674 3.21343 3.21343C2.26674 4.16012 1.62203 5.36629 1.36084 6.67939C1.09965 7.99249 1.2337 9.35356 1.74605 10.5905C2.2584 11.8274 3.12603 12.8846 4.23922 13.6284C5.35241 14.3722 6.66117 14.7692 8 14.7692C9.79469 14.7672 11.5153 14.0534 12.7843 12.7843C14.0534 11.5153 14.7672 9.79468 14.7692 8ZM11.046 10.4924C10.5786 10.0255 10.0102 9.67227 9.38452 9.46005C8.7589 9.24782 8.09286 9.18227 7.43786 9.26844C6.78286 9.35462 6.15644 9.59022 5.607 9.95704C5.05755 10.3239 4.59979 10.8121 4.26908 11.384C4.22861 11.4539 4.20231 11.5312 4.19169 11.6113C4.18106 11.6914 4.18632 11.7728 4.20717 11.8509C4.22801 11.929 4.26403 12.0022 4.31316 12.0664C4.3623 12.1305 4.42359 12.1844 4.49354 12.2248C4.56349 12.2653 4.64073 12.2916 4.72084 12.3022C4.80095 12.3129 4.88237 12.3076 4.96045 12.2868C5.03853 12.2659 5.11174 12.2299 5.1759 12.1808C5.24006 12.1316 5.29391 12.0703 5.33439 12.0004C5.67022 11.4202 6.18547 10.9649 6.80254 10.7031C7.36654 10.4645 7.98893 10.3998 8.58992 10.5174C9.19092 10.6349 9.74311 10.9292 10.1757 11.3627C10.3661 11.553 10.5308 11.7674 10.6657 12.0004C10.7474 12.1417 10.8819 12.2447 11.0396 12.2868C11.1973 12.3289 11.3653 12.3066 11.5065 12.2249C11.6478 12.1432 11.7508 12.0087 11.793 11.851C11.8351 11.6933 11.8128 11.5254 11.7311 11.3841C11.5425 11.0583 11.3122 10.7585 11.046 10.4924Z" fill="#F16063"/>
                                 </svg>
                              </Button>
                              <span className='w-4'></span>
                              <Button func={this.incrementPositiveAnswer.bind(this, item.id)} bColor='border-mainBorderColor' hColor='hover:text-mainGreenColor' bgHoverColor='hover:bg-gray-100' color='text-mainGreenColor'> 
                                 <span className='mr-4'>پاسخ خوب بود</span>
                                 <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.80769 6.46154C4.80769 6.27897 4.86183 6.1005 4.96326 5.9487C5.06469 5.7969 5.20886 5.67859 5.37753 5.60873C5.5462 5.53886 5.7318 5.52058 5.91085 5.5562C6.08991 5.59181 6.25439 5.67973 6.38349 5.80882C6.51258 5.93792 6.60049 6.10239 6.63611 6.28145C6.67173 6.46051 6.65345 6.64611 6.58358 6.81478C6.51372 6.98345 6.3954 7.12762 6.24361 7.22905C6.09181 7.33048 5.91334 7.38461 5.73077 7.38461C5.48596 7.38461 5.25117 7.28736 5.07806 7.11425C4.90495 6.94114 4.80769 6.70635 4.80769 6.46154ZM11.2692 7.38461C11.4518 7.38461 11.6303 7.33048 11.7821 7.22905C11.9339 7.12762 12.0522 6.98345 12.122 6.81478C12.1919 6.64611 12.2102 6.46051 12.1746 6.28145C12.139 6.10239 12.051 5.93792 11.9219 5.80882C11.7929 5.67973 11.6284 5.59181 11.4493 5.5562C11.2703 5.52058 11.0847 5.53886 10.916 5.60873C10.7473 5.67859 10.6032 5.7969 10.5017 5.9487C10.4003 6.1005 10.3462 6.27897 10.3462 6.46154C10.3462 6.70635 10.4434 6.94114 10.6165 7.11425C10.7896 7.28736 11.0244 7.38461 11.2692 7.38461ZM16.5 8C16.5 9.58225 16.0308 11.129 15.1518 12.4446C14.2727 13.7602 13.0233 14.7855 11.5615 15.391C10.0997 15.9965 8.49113 16.155 6.93928 15.8463C5.38743 15.5376 3.96197 14.7757 2.84315 13.6569C1.72433 12.538 0.962403 11.1126 0.653721 9.56072C0.34504 8.00887 0.503466 6.40034 1.10897 4.93853C1.71447 3.47672 2.73985 2.22729 4.05544 1.34824C5.37103 0.469192 6.91775 0 8.5 0C10.621 0.00240243 12.6544 0.846028 14.1542 2.3458C15.654 3.84557 16.4976 5.879 16.5 8ZM15.2692 8C15.2692 6.66117 14.8722 5.35241 14.1284 4.23922C13.3846 3.12602 12.3274 2.25839 11.0905 1.74605C9.85356 1.2337 8.49249 1.09965 7.17939 1.36084C5.86629 1.62203 4.66013 2.26674 3.71343 3.21343C2.76674 4.16012 2.12203 5.36629 1.86084 6.67939C1.59965 7.99249 1.7337 9.35356 2.24605 10.5905C2.7584 11.8274 3.62603 12.8846 4.73922 13.6284C5.85241 14.3722 7.16117 14.7692 8.5 14.7692C10.2947 14.7672 12.0153 14.0534 13.2843 12.7843C14.5534 11.5153 15.2672 9.79468 15.2692 8ZM12.0065 9.31315C11.8652 9.23145 11.6972 9.20922 11.5396 9.25134C11.3819 9.29346 11.2474 9.39649 11.1657 9.53777C10.8299 10.1179 10.3146 10.5732 9.69746 10.8351C9.13345 11.0736 8.51103 11.1383 7.91003 11.0208C7.30902 10.9032 6.75682 10.6089 6.32423 10.1754C6.1339 9.98507 5.96922 9.77072 5.83439 9.53777C5.75266 9.39649 5.61816 9.29346 5.46047 9.25135C5.30278 9.20924 5.13482 9.2315 4.99354 9.31323C4.85226 9.39496 4.74924 9.52946 4.70713 9.68715C4.66502 9.84484 4.68727 10.0128 4.769 10.1541C5.14747 10.8086 5.69145 11.352 6.34634 11.7298C7.00123 12.1076 7.74397 12.3065 8.50002 12.3065C9.25607 12.3065 9.99882 12.1076 10.6537 11.7298C11.3086 11.3519 11.8525 10.8085 12.231 10.154C12.3127 10.0127 12.335 9.84479 12.2928 9.68711C12.2507 9.52944 12.1477 9.39495 12.0065 9.31323V9.31315Z" fill="#199da3"/>
                                 </svg>
                              </Button>
                           </div>
                        </QA>
                     )
                  }

                  <div className='mt-8 text-right font-Shabnam text-mainDarkColor rtl-direction'>
                     <h2 className="font-bold text-2xl">
                        پاسخ خود را ثبت کنید
                     </h2>
                     <p className='text-sm mt-4'>پاسخ خود را بنویسید</p>
                     <textarea
                        className='w-full border border-secondaryBorderColor rounded-md py-2 px-4 mt-3 text-sm font-light focus:outline-none'
                        rows={5}
                        placeholder='متن پاسخ ...'
                        value={this.state.textInput}
                        onChange={this.onAnswerChange}
                     ></textarea>
                     {/* <p className='text-mainRedColor text-xs mt-1 pr-6'>متن راهنمای خطا</p> */}

                     <div className='w-max mt-6'>
                        <Button func={this.storeAnswer} bgColor='bg-mainGreenColor' color="text-white"> 
                           <span>ارسال پاسخ</span>
                        </Button>
                     </div>
                  </div>
               </>
            }
         </>
      )
   }
}

export default connect()(QAShow);