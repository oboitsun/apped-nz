import React from "react";
import Brief from "./Brief";
import Button from "./Button";
import PhonesGrid from "./PhonesGrid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
const HS = "HeroSection";
export default function HeroSection() {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -200,
    duration: 600,
    delay: 100,
    activeClass: "active",
  };
  const { ref, inView } = useInView();
  return (
    <div className={HS}>
      <div className="my-container relative">
        <div className={`${HS}__container`}>
          <p className={`${HS}__heading`}>
            Need a <br className="lg:hidden" />
            mobile <span className="text-blue">app</span>
            <br className="lg:hidden" />
            <span className="text-blue">
              {" "}
              developed
              <motion.span
                ref={ref}
                className="inline-block relative"
                initial={{ scale: 1 }}
                animate={inView ? { scale: 3, left: "10%", y: "-55%" } : { scale: 1 }}
                transition={{ delay: 2.5 }}
              >
                ?
              </motion.span>
            </span>
          </p>
          <Brief
            text={`We are a New Zealand App developmzent agency building
            custom mobile apps for iOS and Android. `}
          />
          <Link {...linkProps} to="contact">
            {" "}
            <Button text="get a quote" />
          </Link>
          <div className={`${HS}__weDevelopFor`}>
            <img src="/assets/applestore.svg" alt="develop for apple" />
            <img src="/assets/googleplay.svg" alt="develop for google" />
          </div>
        </div>
        <PhonesGrid />
      </div>
    </div>
  );
}
