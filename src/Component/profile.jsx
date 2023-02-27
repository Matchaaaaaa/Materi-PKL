import Logo from '../assets/right.png';
import '../assets/css/profile.css';
import profile from '../assets/hewoo.jpg';

const Profile = () => {
    return ( 
        <>
        <div className="profile-wrapper">
            <div className="product-card">
                <img src={profile} width={300} height={300} alt="" />
                <div className="product-content">
                    <h2>Baymax</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas molestias non nemo laboriosam repellendus fugiat neque blanditiis sapiente nihil dignissimos vel quaerat, nulla natus aliquid sequi quisquam, quis soluta earum, pariatur magni tenetur. Sequi impedit expedita dolorum dolorem itaque vel, animi porro deserunt consequatur velit odio ab, eaque officiis soluta. Reprehenderit iusto nam in mollitia cum culpa rerum perferendis earum sint quia molestias, commodi beatae aspernatur nobis nemo fuga? Deserunt animi corrupti sed amet. Fugit expedita unde dolores aut architecto, est ipsum veritatis quibusdam repudiandae sit porro, quo perspiciatis voluptatum consequuntur, ratione molestiae vel optio perferendis omnis tenetur praesentium. Eligendi optio officia ratione corrupti ad inventore maxime doloremque, eos cupiditate dolores esse minima mollitia veritatis. Ea, ipsam adipisci iusto quam similique fugiat asperiores quia laudantium fugit officiis beatae voluptates atque ratione deserunt eaque. Reiciendis quibusdam velit accusamus, fuga maxime mollitia quia voluptate. Delectus maiores ipsa, et adipisci nisi beatae modi.
                    </p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Profile;