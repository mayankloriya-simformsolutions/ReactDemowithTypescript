import React from "react";
import { AboutStyle } from "./About.style";
import CustomButton from "../../Common/Component/CustomButton/CustomButton";

export default function About() {
  return (
    <AboutStyle>
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa
        vel consequatur corporis quas molestiae dolore laudantium cum facilis
        tempore dolores repellat nesciunt in, non exercitationem qui. Error,
        quod impedit.
      </p>
      <CustomButton type="primary">Go to Home</CustomButton>
    </AboutStyle>
  );
}
