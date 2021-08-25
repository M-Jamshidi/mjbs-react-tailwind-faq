import Header from './Layouts/Header';
import QAList from './QA/QAList';
function App() {
  return (
    <div>
      <Header />
      <section className='container mx-auto mt-8'>
        <QAList />
      </section>
    </div>
  );
}

export default App;
