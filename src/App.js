import './components/styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {

    return(
    <div className='app' >
        <NavBar />
        <ItemListContainer greeting="Compre el servicio que necesita"/>
        
 
    </div>
    )
    
}

export default App;
