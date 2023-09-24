
function User({userData}){
    
    return <div className="user">
        <h4>{userData.name}</h4>
        <h5>{userData.email}</h5>
        <p>{userData.address.city}</p>
    </div>
 
}
export default User;