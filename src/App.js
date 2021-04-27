import './App.css';
import ColorBox from './components/colorBox';
import TodoFeature from './features/Todo/pages/index';
import AlbumFeature from './features/Album/pages/index';

const name = 'Hoang';

function App() {

  const age = 24;
  const isMale = true;
  const description = {
    title: 'This is title',
    detail: 'This is detail. Render the details here',
  };
  const animalList = ['cat','dog',42];
  const colorList = ['pink','sakura']
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ping!
        </p>
        <section>            
          <ColorBox color="red"></ColorBox>
          <ColorBox color="green"></ColorBox>
          <ColorBox color="blue"></ColorBox>
        </section>
        <p>My name is {name} I'm {age} I'm {isMale ? 'Male' : 'Female'}</p>
        {isMale ? <p>Hoang dep trai</p> : <p>Hoang xinh gai</p>}
        {isMale && 'Male'}
        {!isMale && 'Female'}
        
        {isMale && (
          <>
            <p>Render this 1</p>
            <p>Render this 2</p>
            <p>Render this 3</p>
          </>
        )}

        <h2>{description.detail}</h2>

        <ul>
          {animalList.map(animal => (
            <li key={animal} style={{color:'red'}}>{animal}</li>
          ))}
        </ul>

        <ul>
          {colorList.map(color => (
            <li key={color} style={{color}}>{color}</li>
          ))}
        </ul>
        <TodoFeature />
        <AlbumFeature />
      </header>
      
    </div>
    
  );
}

export default App;
