import './components/styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

const App = () => {

const stock = 10
    return(
    <div className='app' >
        <NavBar />
        <ItemListContainer greeting="Compre el servicio que necesita"/>
        <ItemCount stock = {stock}></ItemCount>
 
    </div>
    )
    
}

export default App;
