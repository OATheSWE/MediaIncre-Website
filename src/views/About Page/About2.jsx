import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./About.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../../components/button";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function About2() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    // Adjust the value (-100) based on how much you want the page to scroll down
    window.scrollTo({ top: scrollPosition + 600, behavior: "smooth" });
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className={`w-full py-10 ${styles.body} bg-accent`}>
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col span={{ base: 12, md: 5.3 }} className="flex">
          <animated.div
            style={leftColAnimation}
            className="flex items-stretch max-lg:mx-auto"
          >
            <Image
              src={ImageCollection.about}
              className={`w-full object-cover object-top rounded-xl`}
              alt="About Image"
            />
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6.7 }}>
          <animated.div style={rightColAnimation} className={``}>
            <Title className={`text-primary font-sans mb-2`} order={4}>
              \ About Us \
            </Title>

            <Title className={classes.title} order={2}>
              Elevating Digital Potential
            </Title>

            <Text className="my-2">
              At MediaIncre, we're passionate about propelling businesses
              forward in the digital realm. Through tailored strategies and
              innovative approaches, we redefine digital success, amplifying
              your brand's presence and delivering captivating results. As your
              trusted allies, we're committed to unlocking your full digital
              potential.
            </Text>

            <Btn
              text="View More"
              style={`rounded-md h-[50px] bg-primary justify-center text-[20px] max-lg:text-[17px] font-medium px-8 text-white hover:bg-secondary mt-5`}
              click={handleScrollUp}
            />
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
