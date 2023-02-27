import '../assets/css/team.css'
import produk1 from '../assets/right.png';
import pfp from '../assets/user.jpg'

const Team = () => {
    return ( 
        <>
        <div className="team-wrapper">
            <h2>Our Team</h2>
            <div className="team-row">
                <div className="team-card">
                    <img src={pfp} alt="" />
                    <div className="team-desc">
                        <h2>Kitsunee</h2>
                        <p>Doctor in Harvard Univ</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={pfp} alt="" />
                    <div className="team-desc">
                        <h2>Kitsunee</h2>
                        <p>Doctor in Harvard Univ</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={pfp} alt="" />
                    <div className="team-desc">
                        <h2>Kitsunee</h2>
                        <p>Doctor in Harvard Univ</p>
                    </div>
                </div>
            </div>
            <div className="team-row">
                <div className="team-card">
                    <img src={pfp} alt="" />
                    <div className="team-desc">
                        <h2>Kitsunee</h2>
                        <p>Doctor in Harvard Univ</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={pfp} alt="" />
                    <div className="team-desc">
                        <h2>Kitsunee</h2>
                        <p>Doctor in Harvard Univ</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={pfp} alt="" />
                    <div className="team-desc">
                        <h2>Kitsunee</h2>
                        <p>Doctor in Harvard Univ</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Team;