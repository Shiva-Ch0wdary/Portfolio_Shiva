import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:shivachowday753@gmil.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:shivachowday753@gmil.com">shivachowday753@gmil.com</a>
        </div>
        <div>
        <a href="tel:+918247595081"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918247595081">(+91) 8247595081</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}