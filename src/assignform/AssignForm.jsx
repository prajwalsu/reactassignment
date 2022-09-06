import React, { useState } from "react";

function Login() {                               
  let [login, setLogin] = useState({

    
    fName:    "",
    lName:    "",
    age:      "",
    gender:   "",
    password: "",
  });
  let [printData, setPrintData] = useState({   
    
    
    printfName:    "",
    printlName:    "",
    printage:      "",
    printgender:   "",
    printPassword: "",

  });                                           
  const loginFunc = (e) => {
    e.preventDefault();
    const loginCopy = { ...login };
    loginCopy[e.target.name] = e.target.value;
    console.log(loginCopy, "login copy");
    setLogin(loginCopy);                        
  };
  const handleSubmit = (e) => {
    e.preventDefault();                           
    setPrintData({
      ...printData,                           
    
      
      printfName: login.fName,
      printlName: login.lName,
      printage: login.age,
      printgender: login.gender,  
      printPassword: login.password,          
    });                                         
    
     
    
    localStorage.setItem("fName",login.fName);
    localStorage.setItem("lName",login.lName);
    localStorage.setItem("age",login.age);
    localStorage.setItem("gender",login.gender);
    localStorage.setItem("password",login.password);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <pre>
        <label htmlFor="" className="lb1">
          First Name:
        </label>
        <input
          type="text"
          className="inp1"
          onChange={loginFunc}
          name="fName"
          value={login.fName}
        />
        </pre>

        <pre>
        <label htmlFor="" className="lb2">
          Last Name:
        </label>
        <input
          type="text"
          className="inp2"
          onChange={loginFunc}
          name="lName"
          value={login.lName}
        />
        </pre>

        <pre>
        <label htmlFor="" className="lb3">
          Age:
        </label>
        <input
          type="text"
          className="inp3"
          onChange={loginFunc}
          name="age"
          value={login.age}
        />
        </pre>
        
        <pre>
        <label htmlFor="" className="lb4">
          Gender:
        </label>
        <input
          type="text"
          className="inp4"
          onChange={loginFunc}
          name="gender"
          value={login.gender}
        />
        </pre>

        <pre>
        <label htmlFor="" className="lb5">
          Password:
        </label>
        <input
          type="text"
          className="inp5"
          onChange={loginFunc}
          name="password"
          value={login.password}
        />
        </pre>

        
        <button onClick={() => {
            localStorage.clear();
        }}>Submit</button>             

      </form>
    
      
      <p>{localStorage.getItem("fName")}</p>
      <p>{localStorage.getItem("lName")}</p>
      <p>{localStorage.getItem("age")}</p>
      <p>{localStorage.getItem("gender")}</p>
      <p>{localStorage.getItem("password")}</p>
    </div>
  );
}

export default Login;