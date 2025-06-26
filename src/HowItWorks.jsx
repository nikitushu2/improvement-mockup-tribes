import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PeopleIcon from '@mui/icons-material/People';
import StadiumIcon from '@mui/icons-material/Stadium';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import "./HowItWorks.css";

function HowItWorks() {

  return (
    <div id="how-it-works">
        <h1>How It Works?</h1>
        <div id="boxes">
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'white', border: '1px solid black'}}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Organizer" sx={{color: "#1e556b"}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="main mailbox folders">
                <List>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <EditCalendarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Events" sx={{color: "#1e556b"}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <AirlineStopsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Level up your participants" sx={{color: "#1e556b"}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <QueryStatsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Keep track of progress" sx={{color: "#1e556b"}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Challenge & connect people" sx={{color: "#1e556b"}}/>
                    </ListItemButton>
                </ListItem>
                </List>
            </nav>
        </Box>

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'white', border: '1px solid black' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Guest" sx={{color: "#1e556b"}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="main mailbox folders">
                <List>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <StadiumIcon />
                    </ListItemIcon>
                    <ListItemText primary="Biggest list of activity options in one place" sx={{color: "#1e556b"}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <AdsClickIcon />
                    </ListItemIcon>
                    <ListItemText primary="Join groups in 1 click" sx={{color: "#1e556b"}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <PersonSearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Search other members by activity" sx={{color: "#1e556b"}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <AccessibilityNewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Enjoy new experiences" sx={{color: "#1e556b"}}/>
                    </ListItemButton>
                </ListItem>
                </List>
            </nav>
        </Box>
        </div>
    </div>
  )
}

export default HowItWorks;