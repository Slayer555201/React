import React from 'react';
import './Autorization.css'
class Autorization extends React.Component{
render(){
    return( 
        <>
        <form className="container">
  <div className="form-group ">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>

  </div>
 
</form>

<button type="submit" className="btn btn-primary">Submit</button>    
</>
)
}
}
export default Autorization;