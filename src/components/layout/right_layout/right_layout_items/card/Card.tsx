import style from "./Card.module.scss";
import Image from "next/image";
import Author from "@/images/Potrait.png";
import Heading from "../heading/Heading";
import SocialApp from "@/components/ui/social/SocialApp";

const size = 230;
const Card = () => {
  return (
    <>
      <div className={style.container}>
        <Image src={Author} width={size} height={size} alt="Image not Found" />
        <div className={style.cardInfo}>
          {/* <h1>About Me</h1> */}
          <Heading heading="About Me" />
          <div className={style.desc}>
            <p>
              MERN stack developer. Passionate about coding, with excellent problem-solving skills. Highly adept at collaborative projects using the Agile Methodologies.
            </p>
          </div>
          <SocialApp />
        </div>
      </div>
    </>
  );
};

export default Card;
