import React from 'react'

function SignUp() {
    return (
        <div>
            <h1>Create an Account to get started!</h1>
        <form>
            <input type="text" placeholder = "First Name" name="first" /> <br></br>
            <input type="text" placeholder = "Surname" name="Surname" /> <br></br>
            <input type="email" placeholder="Email" name="email" /> <br></br>
            <input type="text" placeholder="Information" name="Information" /> <br></br>
            <button>Welcome!</button>
        </form>

        <footer>
            A program by Scott West, Nikhita Paul, Jason Pham and Cameron Howling. 
        </footer>

        </div>
    )
}

export default SignUp
