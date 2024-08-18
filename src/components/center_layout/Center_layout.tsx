import style from "./Center_layout.module.scss";
import Image from "next/image";
import Button from "../buttons/Button";
import Link from "next/link";
import { postProps } from "@/types/postList";
import { FaClock } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TextEffect } from "../textEffect/TextEffect";
// import { TextEffect } from "@/src/components/textEffect/TextEffect";
const fetchBlogPosts = async () => {
  // Using Function to fetching data in Server Component.....
  try {
    let response = await fetch("http://localhost:3000/api/blog", {
      cache: "force-cache"
    });
    let data: postProps[] = await response.json();
    return data;
  } catch (error) {
    throw new Error("Server is not Responding");
  }
};
``
const Center_layout = async () => {
  let data: postProps[] = await fetchBlogPosts();
  return (
    <div className={style.container}>
      {data.map((value) => (
        <div className={style.blogCard} key={value.id}>
          <Link href={`/blogs/${value._id}`}>
            <Image
              src={value.image || "@/images/post/post-lg/02.png"}
              width={750}
              height={450}
              alt="Image Not found"
              className={style.mainImage}
            />
          </Link>

          <div className={style.bloginfo}>
            <div className={style.headingBox}>
              <h1 className={style.heading}>
                <Link href={`/blogs/${value._id}`}>{value.title}</Link>
              </h1>
            </div>
            <div className={style.date_category}>
              <span>
                <FaClock className={style.icon} />
                <p>{value.date}</p>
              </span>
              <span>
                <BiSolidCategoryAlt className={style.icon} />
                <p >{value.category}</p>
              </span>
            </div>
            <TextEffect per='char' preset='fade' className={style.mainDesc}>{value.desc}</TextEffect>
            <Button text="Read More" href={`/blogs/${value._id}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Center_layout;
