import {useState} from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import QAList from './QA/QAList';
import {Switch, Route} from 'react-router-dom';
import QAShow from './QA/QAShow';

function App() {

  const [title] = useState('لیست سوالات')

  return (
    <div className='flex flex-col justify-between h-full'>

      <Header title={title}/>

      <section className='container mx-auto my-8 flex-grow'>
        <Switch>
          <Route path='/' exact component={QAList}/> 
          <Route path='/question/:qa' exect component={QAShow}/> 
        </Switch>
      </section>

      <Footer />

    </div>
  );
}

export default App;
