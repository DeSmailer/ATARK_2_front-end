import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getCookie } from '../baseUrl';
import { SetWord } from '../translations/Translate';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
function Tabssss1() {

  if (getCookie('role') === "user") {
    return (
      <div>
        <Tab label={SetWord("CWSI")} href="/ClosedWaterSupplyInstallationListByOrganizationId" {...a11yProps(10)} />
        <Tab label={SetWord("Pools")} href="/PoolListByOrganizationId" {...a11yProps(11)} />
        <Tab label={SetWord("KindOfFishs")} href="/KindOfFishList" {...a11yProps(12)} />
        <Tab label={SetWord("Profile")} href="/signIn" {...a11yProps(13)} />
      </div>
    )
  }
  else {
    return (
      <div style={{ maxWidth: "20px" }}>
        <Tab label={SetWord("Organization")} href="/OrganizationListAdmin" {...a11yProps(0)} />
        <Tab label={SetWord("CWSI")} href="/ClosedWaterSupplyInstallationListAdmin" {...a11yProps(1)} />
        <Tab label={SetWord("Pools")} href="/PoolListAdmin" {...a11yProps(2)} />
        <Tab label={SetWord("Fishs")} href="/FishListAdmin" {...a11yProps(3)} />
        <Tab label={SetWord("Herds")} href="/HerdListAdmin" {...a11yProps(4)} />
        <Tab label={SetWord("KindOfFishs")} href="/KindOfFishList" {...a11yProps(5)} />
        <Tab label={SetWord("Milking")} href="/MilkingListAdmin" {...a11yProps(6)} />
        <Tab label={SetWord("Pregnancy")} href="/PregancyListAdmin" {...a11yProps(7)} />
        <Tab label={SetWord("State Of CWSI")} href="/StateOfTheSystemListAdmin" {...a11yProps(8)} />
        <Tab label={SetWord("Profile")} href="/signIn" {...a11yProps(9)} />
        <Tab label="MOTI_Lab4" href="/MOTI_Lab4" {...a11yProps(14)} />
      </div>
    )
  }
};
export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          style={{ backgroundColor: '#87ceeb', color: '#000' }}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {Tabssss1()}
        </Tabs>
      </AppBar>
    </div>
  );
}