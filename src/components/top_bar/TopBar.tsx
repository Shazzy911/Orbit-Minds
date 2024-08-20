"use client";
import Image from "next/image";
import style from "./TopBar.module.scss";
import Hero from "@/images/Rocket round.png";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/index";
import { setMenuOpen } from "@/app/redux/menuSlice";
import { FaBell, FaUser } from "react-icons/fa";

// import {RootState} from "@/types/data"


const TopBar = () => {
  // Unused Code with the Typescript, type
  // const menuOpen = useAppSelector((state: RootState ) => state.menu.menuOpen);


  const dispatch = useAppDispatch()
  const menuOpen = useAppSelector((state: any) => state.menu.menuOpen);
  return (
    <>
      <header className={`${style.container} ${menuOpen ? style.active : ''}`}>
        <div className={style.nav_left}>

          <Image src={Hero} height={55} width={55} alt="Image not Found" className={style.hero} />
          <h3>ORBIT-MINDS</h3>
        </div>

        <div className={style.nav_right}>
          <div className={style.user_notify}>
            <span><FaBell /></span>
            <span><FaUser /></span>
          </div>

          <div className={style.hamburger} onClick={() => dispatch(setMenuOpen(!menuOpen))}>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
            <span className={style.bar}></span>

          </div>
        </div>

      </header>
    </>
  );
};

export default TopBar;
