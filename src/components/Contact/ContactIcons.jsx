import { Text, Box, Stack, rem } from "@mantine/core";
import classes from "./ContactInfo.module.css";
import { IconImports } from "../../../assets";

function ContactIcon({ icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <div className="flex w-[50px] h-[50px] justify-center items-center mr-5 bg-accent rounded-lg">
        {icon}
      </div>
      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  {
    title: "Email",
    description: "Mediaincre@gmail.com",
    icon: <IconImports.Email size={25} color={`#1976D2`} />,
  },
  {
    title: "Phone",
    description: "+45 50304352",
    icon: <IconImports.Phone size={25} color={`#1976D2`} />,
  },
  {
    title: "Address",
    description: "Denmark, Copenhagen",
    icon: <IconImports.Location size={25} color={`#1976D2`} />,
  },
  {
    title: "Working hours",
    description: "Mon - Sun, 7am - 9pm",
    icon: <IconImports.Sun size={25} color={`#1976D2`} />,
  },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
