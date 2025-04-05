import profile from "./assets/Elie.JPG"
const Card = ()=>{
    return(
        <div className="card">
            <img src={profile} alt="profile photo"></img>
            <h2>Elie JR</h2>
            <p>Frontend developer</p>
        </div>
    )
}
export default Card