import { Button } from "./Button";
import Input from "./Input";
import "./RegistrationForm.css";

function RegistrationForm() {
  return (
    <>
      <section>
        <div className="container">
          <center>
            <form action="https://formspree.io/f/xwkdpogv" method="post">
              <h1>
                <span style={{ color: "rgb(175, 0, 166)" }}>Registration </span>
                form
              </h1>
              <label htmlFor="username">Enter your fullname</label>
              <br />
              <Input type="text" name="username" className="inputForm"/>
              <br />
              <br />
              <label htmlFor="regno">Enter your roll number</label>
              <br />
              <Input type="number" name="regno" className="inputForm"/>
              <br />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <Input type="email" name="email" className="inputForm"/>
              <br />
              <br />
              <label htmlFor="dob">Date of birth</label>
              <br />
              <Input type="dob" name="dob" className="inputForm"/>
              <br />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <Input type="password" name="password" className="inputForm"/>
              <br />
              <br />
              <Input type="checkbox" name="" className=""/>
              <label>
                <a href="#"> I accept the terms and condition</a>
              </label>
              <br />
              <br />
              <Button />
            </form>
          </center>
        </div>
      </section>
    </>
  );
}
export default RegistrationForm;