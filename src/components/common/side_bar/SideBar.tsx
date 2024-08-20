"use client";
import { links } from "@/json/StaticData";
// import Image from "next/image";
import Link from "next/link";
import style from "./SideBar.module.scss";
import Hero from "@/images/logo.png";


import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/index";
import { setMenuOpen } from "@/app/redux/menuSlice";
import DarkModeToggle from "@/components/ui/dark_mode_toggle/DarkModeToggle";

const SideBar = () => {
  // const menuOpen = useAppSelector((state) => state.menuOpen);
  const menuOpen = useAppSelector((state: any ) => state.menu.menuOpen);
  const dispatch = useAppDispatch()
  return (
    <aside className={`${style.container} ${menuOpen ? style.active : ''}`}>
      {/* <Image src={Hero} width={150} height={130} alt="Image Not Found" className={style.mainImage}/> */}
      <div className={style.links}>
        {links.map((item) => (
          <Link href={item.url} key={item.id} className={style.link} onClick={() => dispatch(setMenuOpen(!menuOpen))}>
            {item.title}
          </Link>
        ))}                     
         {/* //////////////////// Here we have to do a lot of code changes ///////////// */}
      </div>
      <DarkModeToggle/>
    </aside>
  );
};

export default SideBar;
