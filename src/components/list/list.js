import React from "react";
import { Paper,Table,TableBody,TableCell,TableContainer,
    TableHead,TableRow,Typography,Button,IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from "../modal/modal"


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            deleteModal:false,
            selectItem:null
        };
        this.handleDelete   =   this.handleDelete.bind(this);
      }
    
      //handle delete button
      handleDelete(){
        const me    = this;
        me.setState({deleteModal:true})
      }
    
      //initialize the table from local storage
      componentDidMount(){
          const Items   =    JSON.parse(window.localStorage.getItem("items"));
          if(Items != null || Items != undefined){
            this.setState({items:Items});
          }
      }
  
  render() {
    return (
        <div>
            <Paper elevation={3} style={{padding:"15px"}}>
                <div>
                    <Typography variant="h6"style={{display:"inline-block"}} >Item List</Typography>
                    <div style={{float:"right"}}>
                        <Button data-testid="button" variant="contained" color="primary" onClick={()=>{
                            this.props.history.push("/add")
                        }}>Add Item</Button>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Language</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.items.length === 0 && <TableRow> <TableCell colSpan={3} style={{textAlign:"center"}}>No Data</TableCell></TableRow>}
                            {this.state.items.map((row,index) => (
                                <TableRow key={index}>
                                    <TableCell scope="row">
                                        {row.language}
                                    </TableCell>
                                    <TableCell scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell scope="row">
                                        <IconButton aria-label="delete" onClick={()=>{
                                            this.setState({selectItem:index},function(){
                                                this.handleDelete();
                                            })
                                            
                                        }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
             {/* delete confirmation custom modal */}
             <Modal open={this.state.deleteModal} body="Are you sure you want to delete this item"
             onClose={()=>{this.setState({deleteModal:false})}}
             onSubmit={()=>{
                 this.state.items.splice(this.state.selectItem,1);
                 window.localStorage.setItem("items",JSON.stringify( this.state.items));
                 this.setState({deleteModal:false});
             }}
         />
          
      </div>
    );
  }
}

export default List;
