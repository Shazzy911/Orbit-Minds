import SearchBar from "@/components/ui/search_bar/SearchBar";
import style from "./page.module.scss";
import Privacy from "@/components/layout/privacy/Privacy";
const Page = () => {
  return (
    <>
      <div className={style.container}>
        <SearchBar />
        <h1>Privacy & Policy</h1>
        <p>
          bottom line is it’s our aim to always take care of both of us, <br />
          Please read this terms and stated below, goodies Byes.
        </p>
        <Privacy/>
      </div>
    </>
  );
};

export default Page;
export function generateMetadata () { 
  return{
    title: "Galaxy Blog - Privacy",
    description: "This is the galaxy blog, it contains information about the developer and owner of  website",
  }
}