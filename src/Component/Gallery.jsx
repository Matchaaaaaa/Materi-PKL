import '../assets/css/gallery.css';
import {BsChevronDown } from "react-icons/bs"; 
import img1 from '../assets/product.jpg'

function Gallery() {
    return(
        <div className='judul'>
            <h1>Gallery</h1>
            <span></span>
            <div className="kartu" id="GALLERY">
                <div className="kartu-atas">
                    <div className="kartu1"></div>
                    <div className="kartu2"></div>
                    <div className="kartu2"></div>
                </div>
                <div className="kartu-bawah">
                    <div className="kartu3"></div>
                    <div className="kartu4"></div>
                    <div className="kartu4"></div>
                </div>
            </div>
            <div className='cart'>
                <div className="card_1 ml-40">
                <img src={img1} alt="" height={250} width={250}/>
                <div className="text_1">
                    <h2 className='ml-4 text-4xl'>Produk</h2>
                    <p className="kata_1 text-justify ml-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                    porro itaque molestias accusamus impedit deleniti est iusto rem
                    nam unde at, tenetur saepe quisquam, eligendi quis provident odit
                    dolorem quidem.
                    </p>
                    <button className='ml-4 mt-1'>Read More</button>
                </div>
                </div>
                <div className="card_2 mr-40">
                <img src={img1} alt="" height={250} width={250}/>
                <div className="text_2">
                <h2 className='ml-4 text-4xl'>Produk</h2>
                    <p className="kata_2 text-justify ml-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus provident minima incidunt unde soluta doloribus
                    nesciunt praesentium, fugiat, repellendus impedit quisquam rem
                    distinctio dolores laborum sunt labore tempora, aut iure!
                    </p>
                    <button className='ml-4 mt-1'> Read More </button>
                </div>
                </div>
            </div>
            <div className='cart mt-10 '>
                <div className="card_1 ml-40">
                <img src={img1} alt="" height={250} width={250}/>
                <div className="text_1">
                <h2 className='ml-4 text-4xl'>Produk</h2>
                    <p className="kata_1 text-justify ml-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                    porro itaque molestias accusamus impedit deleniti est iusto rem
                    nam unde at, tenetur saepe quisquam, eligendi quis provident odit
                    dolorem quidem.
                    </p>
                    <button className='ml-4 mt-1'>Read More</button>
                </div>
                </div>
                <div className="card_2 mr-40">
                <img src={img1} alt="" height={250} width={250}/>
                <div className="text_2">
                <h2 className='ml-4 text-4xl'>Produk</h2>
                    <p className="kata_2 text-justify ml-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus provident minima incidunt unde soluta doloribus
                    nesciunt praesentium, fugiat, repellendus impedit quisquam rem
                    distinctio dolores laborum sunt labore tempora, aut iure!
                    </p>
                    <button className='ml-4 mt-1'> Read More </button>
                </div>
                </div>
            </div>            
            <div className="tombolicon" style={{paddingTop: "20px"}}>
                <center>
            <span href=""><BsChevronDown/></span>
            </center>
        </div>
        </div>
    );
}

export default Gallery;