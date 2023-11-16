import { FaPhone } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaHome } from "react-icons/fa";

function SingleContact({icon, name, content}: {icon: any, name: string, content: string} ) {
  return (
    <div className="flex items-center text-white">
      <div className="mx-3">{icon}</div>
      <div>
        <li>
          <p className="ml-3">{name}</p>
          <p className="ml-3">{content}</p>
        </li>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1 className="leftheader">CONTACT</h1>
      <br></br>
      <ul>
        <SingleContact icon={<FaPhone/>} name="Phone" content="+1 123-456-7890" />
        <SingleContact icon={<TbMailFilled/>} name="Email" content="youremail@gmail.com" />
        <SingleContact icon={<FaHome/>} name="Address" content="District, City - Country" />
      </ul>
    </div>
  );
}

export default Contact;
