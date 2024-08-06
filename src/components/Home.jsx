import Banner from './Banner';
import Productos from './Productos';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to my home page</h1>
            <div>
                <Banner />
            </div>
            <div>
                <Productos/>
            </div>
           
        </div>
        );
}

export default Home;