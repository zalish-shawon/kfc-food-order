/* eslint-disable react/no-unknown-property */
import Cart from './Cart';
import Foods from './Foods';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div>
             <div>
             <Navbar></Navbar>
             <div className='flex justify-between'>
                <Sidebar></Sidebar>
                <Foods></Foods>
                <Cart></Cart>
             </div>
             </div>
             <div className=''>
             <Footer></Footer>
             </div>
        </div>
    );
};

export default Home;