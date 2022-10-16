import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { STRING } from "../../config/index.js";
import styles from "./styles";
import { addHistory } from "../../actions/location";
import LocationTable from "../../components/Table/LocationTable";
import { autoCompleteConfig, mapConfig } from "../../config/mapHelper.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);

    this.state = {
      map: null,
      marker: null,
      autocomplete: null,
    };
  }

  componentDidMount() {
    const { map, marker } = mapConfig();
    const autocomplete = autoCompleteConfig(this.autocompleteInput.current);
    this.setState({ map, marker, autocomplete });

    autocomplete.addListener(STRING.PLACE_CHANGE_EVENT, this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const { map, marker, autocomplete } = this.state;
    const place = autocomplete.getPlace();

    this.props.addHistory(place.formatted_address);

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
  }

  render() {
    const { classes, locationList } = this.props;

    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <Paper className={classes.outer}>
              <TextField
                fullWidth
                inputRef={this.autocompleteInput}
                id="autocomplete"
                placeholder={STRING.PLACE_HOLDER}
                type="text"
              ></TextField>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={8}>
            <Paper className={classes.outer}>
              <div style={{ position: "relative", height: "80vh" }} id="map" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <LocationTable locationList={locationList} />
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addHistory }, dispatch);
};
const mapStateToProps = ({ locationList }) => {
  return { locationList };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Home));
