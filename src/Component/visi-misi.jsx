import produk1 from '../assets/visi.jpg';
import produk2 from '../assets/misi.jpg';
import '../assets/css/visi.css';

const Visi = () => {
    return ( 
        <>
        <div className="visimisi-wrapper">
            <div className="visi">
                <div className="" id='visi'>
                    <img src={produk1} alt="" />
                    <div className="visi-desc">
                        <h2>Vission</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, veritatis aspernatur. Labore praesentium dolores amet facere. Error voluptatum voluptates architecto vel libero quos expedita eaque iure at, nihil perferendis aperiam laudantium dignissimos reprehenderit hic sit, quia dolor.</p>
                    </div>
                </div>
            </div>
            <div className="misi">
                <div className="" id='misi'>
                    <img src={produk2} alt="" />
                    <div className="misi-desc">
                        <h2>Mission</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quaerat sint reiciendis modi eius blanditiis rerum consequuntur laboriosam eaque voluptates dolorum tempore esse doloribus perferendis ipsum iure similique provident adipisci omnis quas nihil molestias, deleniti eveniet architecto! Tempora, consequuntur corporis?</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Visi;