import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <h1>this is about page</h1>
          <p>we are building blog website</p>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;