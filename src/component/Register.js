import React from 'react';
import "../style.css";
import {Link} from 'react-router-dom';

export default class Register extends React.Component{
constructor(){
  super();
  this.state={
    form: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      gender: null,
      language: [],
      country: null,
      zipCode: ""
    },
    formErrors: {
      name: null,
      email: null,
      mobile: null,
      password: null,
      confirmPassword: null,
      gender: null,
      language: null,
      country: null
    }
  }
  this.countryList = [
    { value: "india", label: "India" },
    { value: "us", label: "US" },
    { value: "australia", label: "Australia" }
  ];
  this.languageList = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" }
  ];
}

handelChange=e=>{
  const {name,value,checked}=e.target;
  const {form,formErrors}=this.state;
  let formObj={};
  formObj={
    ...form,[name]:value
  }
  this.setState({form:formObj});

}

validateNumber=e=>{
  var ev=e||window.event;
  if(ev.type=="paste"){
key=ev.clipboardData.getData("text/plain");
  }else{
    var key=ev.keyCode||ev.which;
    key = String.fromCharCode(key);
    
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    ev.returnValue = false;
    if (ev.preventDefault) ev.preventDefault();
  }
}

render(){
  const {form,formErrors} =this.state;
return(
<>
<Link to="/">Nav</Link>
<div className="signup-box">
          <p className="title">Sign up</p>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>
                Name:<span className="asterisk">*</span>
                </label>
                <input type="text" className="form-control" name="name" placeholder="Name" value={form.name} onChange={this.handelChange} blur={this.handelChange}/>
                {
                  formErrors.name &&(
                  <span className="err">{formErrors.name}</span>
                  )
                }
              
              </div>

              <div className="form-group">
                <label >
                  Email: <span className="asterisk">*</span>
                </label>
                <input type="text" className="form-control" placeholder="Email" name="email" value={form.email} onChange={this.handelChange} blur={this.handelChange} />
                {formErrors.email&&(<span className="err">{formErrors.email}</span>)}
              </div>

              <div className="form-group">
<label htmlFor="">
  Mobile: <span className="asterisk">*</span>
</label>
<input type="text" name="mobile" className="form-control" placeholder="Mobile" value={form.mobile} onChange={this.handelChange} blur={this.handelChange} onKeyPress={this.validateNumber}/>
{
  formErrors.mobile&&( <span>{formErrors.mobile}</span>)
}
              </div>




            </div>
          </div>
</div>






  <h1>Welcome to React application</h1>
</>

)

}
}