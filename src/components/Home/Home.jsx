/* eslint-disable react/no-unknown-property */
import Cart from './Cart';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
             <div className='flex justify-between'>
                <Sidebar></Sidebar>
                <Cart></Cart>
             </div>
        </div>
    );
};

export default Home;