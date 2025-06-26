import Button from '@mui/material/Button';
import "./Landing.css";

function Landing() {

  return (
    <section class="hero">
        <div class="content">
            <h2>Finland Stafftribes</h2>
            <h4>Connecting humanity!</h4>
            <p>Keep your company culture healthy by connecting your staff for sports & welness activities together</p>
            <div id="hero-buttons">
                <Button variant="contained">EXPLORE EVENT</Button>
                <Button variant="contained">CREATE TRIBE</Button>
            </div>
        </div>
        <div class="waves"></div>
        
    </section>
  )
}

export default Landing;
