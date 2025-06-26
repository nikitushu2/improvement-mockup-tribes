import Button from '@mui/material/Button';
import "./Navigation.css";

function Navigation() {

  return (
    <div id="navigation">
        <div id="nav-left">
            <img src="/66108_627068.webp" width="65" height="65"/>
            <div id="languages">
                <p>ENG</p>
                <p>FI</p>
                <p>SV</p>
            </div>
        </div>
        <div id="nav-right">
            <p>Feed</p>
            <p>About</p>
            <p>Members</p>
            <p>Events</p>
            <p>All Tribes</p>
            <p>My Profile</p>
            <Button variant="contained">Log In | Sign Up</Button>
        </div>
    </div>
  )
}

export default Navigation;
