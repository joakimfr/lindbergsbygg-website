import Image from "next/image";
import "./styles.scss";

export const ContactDetails = () => {
  return (
    <div className="contactDetails">
      <div className="contactDetails__card">
        <div className="contactDetails__circle">
          <Image
            className="cardImage"
            src="/phone.png"
            alt="Plåtslageri Företag"
            width={25}
            height={25}
          />
        </div>
        <p className="contactDetails__text">fritzjoakim@hotmail.com</p>
      </div>
      <div className="contactDetails__card">
        <div className="contactDetails__circle">
          <Image
            className="cardImage"
            src="/envelope.png"
            alt="Plåtslageri Företag"
            width={25}
            height={25}
          />
        </div>
        <p className="contactDetails__text">fritzjoakim@hotmail.com</p>
      </div>
      <div className="contactDetails__card">
        <div className="contactDetails__circle">
          <Image
            className="cardImage"
            src="/pin.png"
            alt="Plåtslageri Företag"
            width={25}
            height={25}
          />
        </div>
        <p className="contactDetails__text">fritzjoakim@hotmail.com</p>
      </div>
    </div>
  );
};
