import image from './img1.jpg';
import './App.css';
import './style.css'

function App() {
  return (
    <div className="App">
     
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>

              <h1 className="title red"> Hello I'am Amal Bourezgui </h1>
              <br/>

              <div className="intro"> 
                  <img src={image} alt='imageProfile ' className='imgProfile'/>
                  <h2>I'am a developper web</h2>
              </div>

              <br/>
              <img src="/img3.jpeg" className='img3' />
        </div>
        
        <contrôles de la largeur vidéo={320} height={240}>
          <source src="myVideo.mp4" type="video / mp4" />
        </contrôles>
    </div>
  );
}

export default App;
