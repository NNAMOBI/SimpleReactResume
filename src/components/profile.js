import React from 'react'

function Profile(props) {
    return (
        <div style={props.mystyle}>
            <h3><i class="material-icons">
                person
            </i> Profile</h3>
            <p>Courteous and enthusiastic, I am interested in IT and everything in its orbit.
                I recently began to be fascinated by web programming, e.g. developing apps and building websites.
       As this area complements my first degree in Civil Engineering, I am keen to gain more experience in the IT field. <br />
        For this reason, I am looking for a company willing to offer me a placement among their developers.
                 In return, I would offer my full commitment, and be a pleasant and friendly addition to your team.
I am therefore currently looking for a job or an internship as a FullStack developer.</p>


            <h3><i class="material-icons">
                work
            </i> Experience</h3>
            <h6>Side Projects 06/2019 – present</h6>
Built a moderate blog App with signup and login UI
            For self-educational purposes,currently developing a Dev-connector web App that builds a profile ,
            signup and login into social network for devs, share post and get help from other developers
            .(MERN full stack).I engineered a Front end app for scheduling Appointment using React Framework.
and others <br />You can vist 
   <span>  <a href="https://github.com/NNAMOBI">myGithub link</a></span>

            
        </div>
    )
}

export default Profile;
