import React from "react";
import PropTypes from "prop-types";
import {Dialog,DialogActions,DialogContent,DialogTitle,Button,Typography} from '@material-ui/core';
class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getProps = this.getProps.bind(this);
  }
  getProps() {
    var myProps = this.props;
    var data = {
      open: myProps.open === undefined ? false : myProps.open,
      title: myProps.title === undefined ? "Modal title" : myProps.title,
      body: myProps.body === undefined ? "Modal Body" : myProps.body,
      onSubmit: myProps.onSubmit === undefined ? () => null : myProps.onSubmit,
      onClose: myProps.onClose === undefined ? () => null : myProps.onClose,
    };
    return data;
  }
  render() {
    let props = this.getProps();
    return ( <Dialog open={props.open} onClose={()=>{props.onClose()}} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"><Typography variant="h5">{props.title}</Typography></DialogTitle>
        <DialogContent dividers>
            <Typography variant="body1">{props.body}</Typography>
        </DialogContent>
        <DialogActions>
        <Button onClick={()=>{props.onClose()}} color="primary" variant="contained">
            Cancel
        </Button>
        <Button onClick={()=>{props.onSubmit()}} color="primary" variant="contained">
            Delete
        </Button>
        </DialogActions>
    </Dialog>
    );
  }
}

ModalComponent.propTypes = {
  body: PropTypes.string,
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

ModalComponent.defaultProps = {
  body: "Modal Body",
  onSubmit: () => null,
  title: "Modal title",
  onClose: () => null,
  open: false,
};

export default ModalComponent;