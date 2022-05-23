import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
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

  handelChange = e => {
    const { name, value, checked } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};
    if (name === "language") {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...form };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...form,
          [name]: form[name].filter(x => x !== value)
        };
      }
    } else {
    formObj = {
      ...form, [name]: value
    }
    this.setState({ form: formObj });
  }
  }

  validateNumber = e => {
    var ev = e || window.event;
    if (ev.type == "paste") {
      key = ev.clipboardData.getData("text/plain");
    } else {
      var key = ev.keyCode || ev.which;
      key = String.fromCharCode(key);

    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      ev.returnValue = false;
      if (ev.preventDefault) ev.preventDefault();
    }
  }


  preventDropdown = event => {
    event.stopPropagation();
  }

  render() {
    const { form, formErrors } = this.state;
    return (
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
                <input type="text" className="form-control" name="name" placeholder="Name" value={form.name} onChange={this.handelChange} onBlur={this.handelChange} />
                {
                  formErrors.name && (
                    <span className="err">{formErrors.name}</span>
                  )
                }

              </div>

              <div className="form-group">
                <label >
                  Email: <span className="asterisk">*</span>
                </label>
                <input type="text" className="form-control" placeholder="Email" name="email" value={form.email} onChange={this.handelChange} onBlur={this.handelChange} />
                {formErrors.email && (<span className="err">{formErrors.email}</span>)}
              </div>

              <div className="form-group">
                <label htmlFor="">
                  Mobile: <span className="asterisk">*</span>
                </label>
                <input type="text" name="mobile" className="form-control" placeholder="Mobile" value={form.mobile} onChange={this.handelChange} onBlur={this.handelChange} onKeyPress={this.validateNumber} />
                {
                  formErrors.mobile && (<span>{formErrors.mobile}</span>)
                }
              </div>
              <div className="form-group">
                <lebel className="">
                  password: <span className="asterisk">*</span>
                </lebel>
                <input type="text" className="form-control" name="password" onChange={this.handelChange} onBlur={this.handelChange} />
                {
                  formErrors.password && (<span className="err">{formErrors.password}</span>)
                }
              </div>

              <div className="form-group">
                <label htmlFor="" className="">
                  Confirm Password: <span className="asterisk">*</span>
                </label>
                <input type="text" className="form-control" name="confirmPassword" onChange={this.handelChange} onBlur={this.handelChange} />
                {formErrors.confirmPassword && (<span className="err">{formErrors.confirmPassword}</span>)}
              </div>

              <div className="form-group">
                <label htmlFor="" className="mr-3">
                  Language : <span className="asterisk">*</span>
                </label>
                <div class="dropdown">
                  <input class="form-control dropdown-toggle" type="text" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={this.preventDropdown}>
                    {
                      this.languageList.map((x, i) => {
                        return (                        
                        <label key={i}>
                          <input type="checkbox" name="language" className="dropdown-item" value={x.value} onChange={this.handelChange} checked={form.language.includes(x.value)} />{" "}   {x.label}<br/>{form.language.includes(x.value)}
                        </label>

                        )
                      })
                    }
                  </div>
                </div>

                {formErrors.language && (<span>{formErrors.language}</span>)}
              </div>


            </div>
          </div>
        </div>






        <h1>Welcome to React application</h1>
      </>

    )

  }
}