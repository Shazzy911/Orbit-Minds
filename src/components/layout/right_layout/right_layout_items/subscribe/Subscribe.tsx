import style from "./Subscribe.module.scss";
import Heading from "../heading/Heading";
import Button from "@/components/ui/buttons/Button";

const size = 230;

const Subscribe = () => {
  return (
    <>
      <div className={style.container}>
        <Heading heading="Subscribe Blog"/>
        <div className={style.desc}>
          <p style={{color: "#b0b0b0"}}>
          Join our community, Journey of learning. Subscribe now to unlock a world of knowledge tailored just for you
          </p>
        </div>
        <input type="text" placeholder="Your Email Address" />
        <Button text="Subscribe Now" />
      </div>
    </>
  );
};

export default Subscribe;
