import React from "react";
import useNavigation from "../useNavigation";
import { CONTACT_URL } from "../mappings";

function Contact() {
  useNavigation(CONTACT_URL);
  return <div>Contacts</div>;
}

export default Contact;
