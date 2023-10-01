import './styles/main.scss';
import Header from './Header';
import FilterableCards from './FilterableCards';
import CARDS from './data.json';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FilterableCards cards={CARDS} />
    </div>
  );
}

export default App;
