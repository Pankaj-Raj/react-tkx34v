import React from 'react';

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
}


render(){
  const {form,formErrors} =this.state;
return(
<>
<Link to="/">Nav</Link>
<div className="signup-box">
          <p className="title">Sign up</p>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>
                Name:<span className="asterisk">*</span>
                <input type="text" className="form-control" name="name" value="form.name" OnChange={this.handelChange} blur={this.handelChange}/>
                {
                  formErrors.name &&(
                  <span className="err">{formErrors.name}</span>
                  )
                }
                </label>
              </div>
            </div>
          </div>
</div>






  <h1>Welcome to React application</h1>
</>

)

}
}