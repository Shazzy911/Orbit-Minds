import style from "./page.module.scss";
import Center_layout from "@/components/layout/center_layout/Center_layout";
import Right_layout from "@/components/layout/right_layout/Right_layout";
import { Suspense } from "react";
const Page = () => {
  return (
    
      <main className={`${style.container} `}> 

        <Suspense fallback={<h1>Loading....</h1>}> 
        <Center_layout/>
        </Suspense>
        <Right_layout/>
      </main>
    
  );
};
export default Page;
// https://docs.google.com/forms/d/e/1FAIpQLSd0oLnWlYWVx8BNkfFL_MnrT5tZ2lC0f-cxSiJ1hldIJvdKPQ/viewform