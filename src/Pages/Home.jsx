import Card from '../Component/Card'
import Carousel from '../Component/Slider'
import Footer from '../Component/footer'
import Navbar from '../Component/Navigation'
import Gallery from '../Component/Gallery'


const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Card />
            <Gallery />
            <Footer />
            
        </>
    )
}

export default Home