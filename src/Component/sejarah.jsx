import produk1 from '../assets/history.jpg';
import '../assets/css/sejarah.css';

const Sejarah = () => {
    return ( 
        <>
        <div className="sejarah-container">
            <h2>History</h2>
            <div className="sejarah">
                <img src={produk1} alt="" />
                <div className="sejarah-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorum ullam dolor odit illo. Maiores, ipsam. Sint adipisci neque, rerum tenetur ipsam voluptatibus quasi non itaque nisi ratione nobis commodi, cumque numquam hic dolor corporis error expedita, atque laudantium libero natus ab! Est ad voluptatibus distinctio sunt sit eveniet aspernatur saepe eos corrupti omnis, magni velit consequatur nemo aut similique odit fugit ab porro numquam. Facere corporis, alias eveniet fuga aut ea vitae ducimus dolore corrupti quos eum iste. Expedita dolorem, cupiditate tempore sed quo quam magnam sequi sit incidunt itaque consequatur ullam quibusdam soluta. Sint quia qui praesentium dolorem, beatae perferendis iusto maiores aspernatur fugiat nisi fuga error odio.</p>
                <a href="">Read More</a>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Sejarah;