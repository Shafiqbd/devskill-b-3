import { Button, Card, FormControl, Grid, InputLabel, OutlinedInput } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { handleUserInputChange } from '../../../redux/actions/users/userActions'
import Select from '../../common/Select'

const UserForm = ({userModel, handleSubmit}) => {
  const dispatch = useDispatch();
  const roleList = [
    {
      id: "user",
      name: "User"
    },
    {
      id: "admin",
      name: "Admin"
    },
  ]

  const handleInputChange = (e) => {
    dispatch(handleUserInputChange(e));
  }

  return (
    <Card style={{ padding: "15px" }}>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={0}>
          <Grid item md={6}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>    

              <Select options={roleList} 
              name={"role"} label={"Role"}  value={userModel.role} 
              handleInputChange = {handleInputChange} />
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">User Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={userModel.username}
                  name="username"
                  onChange={(e) => dispatch(handleUserInputChange(e))}
                  label="User Name"
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={userModel.email}
                  name="email"
                  onChange={(e) => dispatch(handleUserInputChange(e))}
                  label="Email"
                  type='email'
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }} style={userModel._id !== "" ? {display: 'none'} : {display: 'flex'}}>
                <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={userModel.password}
                  name="password"
                  onChange={(e) => dispatch(handleUserInputChange(e))}
                  label="Password"
                  type='password'
                />
              </FormControl>  

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={userModel.phone}
                  name="phone"
                  onChange={(e) => dispatch(handleUserInputChange(e))}
                  label="Phone"
                />
              </FormControl>   
                          
            </Box>
          
          </Grid>
          <Grid item md={6}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}> 
              
              <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">City</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    name="city"
                    value={userModel.address.city}
                    onChange={(e) => dispatch(handleUserInputChange(e))}
                    label="City"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Street</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    name="street"
                    value={userModel.address.street}
                    onChange={(e) => dispatch(handleUserInputChange(e))}
                    label="Street"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Number</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    name="number"
                    value={userModel.address.number}
                    onChange={(e) => dispatch(handleUserInputChange(e))}
                    label="Number"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Zipcode</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    name="zipcode"
                    value={userModel.address.zipcode}
                    onChange={(e) => dispatch(handleUserInputChange(e))}
                    label="Zipcode"
                  />
                </FormControl>
            </Box>
          </Grid>

          <Grid item md={12}>
            <FormControl fullWidth sx={{ m: 1, flexDirection: "row-reverse" }}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </FormControl> 
          </Grid>


           
        </Grid>
      </Form>
      
    </Card>
  )
}

export default UserForm