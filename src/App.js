import React from "react";
import logoDisena from "./images/logo-disena-aventura.jpg";
import logoAdalab from "./images/logo-adalab.png";
import logoAwesome from "./images/logo-awesome-profile-cards.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Svgs from "./components/Svgs";
import PreviewSection from "./components/PreviewSection";
import FormSection from "./components/FormSection";
import "./App.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {
        palette: "1",
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        photo: ""
      }
	};
  this.handleChange=this.handleChange.bind(this);
  
  }

  handleChange(event) {
	const value = event.target.value;
	const field = event.target.name;
    this.setState(prevState => ({
      dataUser: {
        ...prevState.dataUser,
        [field]: value
      }
    }));
  }

  render() {
    return (
      <div className="place-items__cardmaker">
        <Svgs />
        <Header link="index.html" logoSrc={logoAwesome} />

        <main className="main-content column-center">
          <PreviewSection dataUser={this.state.dataUser} />
          <FormSection
            dataUser={this.state.dataUser}
            actionToPerform={this.handleChange}
          />
        </main>
        <Footer firstLogo={logoDisena} secondLogo={logoAdalab} />
      </div>
    );
  }
}

export default App;
