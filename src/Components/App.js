import React, {useState} from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import QAList from './QA/QAList';
import {Switch, Route} from 'react-router-dom';
import QAShow from './QA/QAShow';
import QACreate from './QA/QACreate';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 0,
    width: 700,
    borderRadius: 6
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)'
  }
};

Modal.setAppElement('#root');

function App() {

  const [title, setTitle] = useState('لیست سوالات');
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function setHeaderTitle(title) {
    setTitle(title);
  }

  return (
    <div className='flex flex-col justify-between h-full'>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <QACreate closeModal={closeModal}/>
      </Modal>

      <Header title={title} openModal={openModal}/>

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
