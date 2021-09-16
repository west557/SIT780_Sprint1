import React from 'react'

function Profile() {
    return (
        <div>
        {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <h2>Credit Summary </h2>
          <p>Your Credit Profile is an assessment of your creditworthiness. Comprised of a Credit Score and 
            Credit Report generated using data from your credit 
            history.</p>
          <br></br>
          <h2>Recent Activity </h2>
          <p>There are no recent changes to your credit profile. 
          </p> <br></br>
          <div className="centre">
            <button onClick={Logout}>Logout</button>
          </div>
        </div>

      ) : (
          <LoginForm Login={Login} error={error} />
        )}
        </div>
    )
}

export default Profile
