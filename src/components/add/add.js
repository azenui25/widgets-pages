import React from "react";
import { withRouter } from "react-router-dom";
import {Stepper,Step,StepLabel,Button,Typography,TextField,FormControl,InputLabel,MenuItem,Select} from '@material-ui/core';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeStep:0,
        steps:['Language', 'Name'],
        name:"",
        language:"",
        language_error:"",
        name_error:""
    };
  }

  //function to handle the next and add button
  handleNext(){
    const me    =    this;

    // handle errors
    if(me.state.activeStep === 0 && me.state.language.length === 0){
        me.setState({language_error:"Please select Language"});
        return;
    }
    if(me.state.activeStep === 1 && me.state.name.length === 0){
        me.setState({name_error:"Please enter name"});
        return;
    }

    //if last step add the item in local storage
    if(me.state.activeStep === me.state.steps.length - 1){
        let dummy   =   [];
        const Items =   JSON.parse(window.localStorage.getItem("items"));
        if(Items != null || Items !== undefined){
            dummy       =   Items;
        }
        const newItem = {
            "name":me.state.name,
            "language":me.state.language,
        }
        dummy.push(newItem);
        console.log("dummy",dummy)
        window.localStorage.setItem("items",JSON.stringify(dummy));
        me.props.history.push("/list");

    }else{
        me.setState({activeStep:me.state.activeStep + 1});
    }
  }
  //Function to display the stepper content
  getStepContent(step){
    switch (step) {
        //step 1
        case 0:
          return <div style={{width:"50%",margin:"auto"}}>
            <FormControl variant="outlined" style={{width:"100%"}}>
                <InputLabel id="demo-simple-select-outlined-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.language}
                    onChange={(event)=>{
                        this.setState({language:event.target.value})
                    }}
                    label="Language"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="German">German</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                    <MenuItem value="Dutch">Dutch</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="Swedish">Swedish</MenuItem>
                    <MenuItem value="Portuguese">Portuguese</MenuItem>
                </Select>
                {this.state.language_error.length !== 0 && <Typography variant="body1" style={{color:"red"}}>{this.state.language_error}</Typography>}
            </FormControl>
          </div>;


        // step 2
        case 1:
          return <div style={{width:"50%",margin:"auto"}}>
            <FormControl variant="outlined" style={{width:"100%"}}>
               <TextField id="outlined-basic" label="Name" 
                    variant="outlined" value={this.state.name}
                    onChange={(event)=>{
                        this.setState({name:event.target.value})
                    }}
                ></TextField>
                {this.state.name_error.length !== 0 && <Typography variant="body1" style={{color:"red"}}>{this.state.name_error}</Typography>}
            </FormControl>
          </div>;
        
    }
  }

  render() {
    return (
     <div style={{width:"50%",margin:"auto"}}>Add Item
          <Stepper activeStep={this.state.activeStep}>
            {this.state.steps.map((item,index)=>{
                return (
                <Step key={index}>
                    <StepLabel></StepLabel>
                </Step>
                );
            })}
          </Stepper>
            <div>
                <Typography>{this.getStepContent(this.state.activeStep)}</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>{this.handleNext()}}
                >
                    {this.state.activeStep === this.state.steps.length - 1 ? 'Add' : 'Next'}
                </Button>
            </div>
     </div>
    );
  }
}

export default withRouter(AddItem);
