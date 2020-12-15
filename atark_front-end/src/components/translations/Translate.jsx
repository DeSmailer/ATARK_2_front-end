import en from "./en.json"
import ua from "./ua.json"
import { getCookie } from '../baseUrl';

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { getCookie } from '../baseUrl';


export const SetWord = (word) => {
  var lang = getCookie('lang');
  if (lang === "UA") {
    return ua[word];
  }
  else if (lang === "EN") {
    return en[word];
  }
}