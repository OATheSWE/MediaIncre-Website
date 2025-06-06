import { Anchor, Group, ActionIcon, rem, Text } from "@mantine/core";
import classes from "./Footer.module.css";
import { IconImports } from "../../../assets";
import { styles } from "../../data";
import { Link } from "expo-router";

const links = [
  { link: "/about", label: "About" },
  { link: "/services", label: "Our Services" },
  { link: "contact", label: "Get in Touch" },
];

export default function Footer() {
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      lh={1}
      size="sm"
      className="text-black hover:text-primary transition duration-300"
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={`${styles.body} ${classes.footer} relative`}>
      <div className={` ${classes.inner}`}>
        <Group h="100%" className="flex items-center">
          <Link href="/">
            <Text className="font-extrabold text-primary text-[25px] max-[480px]:text-[21px]">
              MEDIA<span className=" text-stone-500">INCRE</span>
            </Text>
          </Link>
        </Group>

        <Group className={classes.links}>{items}</Group>
      </div>
    </div>
  );
}
