// import { Suspense } from "react";
import style from "./Right_layout.module.scss";
import Card from "./right_layout_items/card/Card";
// import Featuring from "./right_layout_items/featuring/Featuring";
import Subscribe from "./right_layout_items/subscribe/Subscribe";
const Right_layout = () => {
  return (
    <section className={style.container}>
      <Card/>
      <Subscribe/>

      {/* <Suspense fallback={<h1> fetching</h1>} >
          <Featuring/>
      </Suspense> */}
    </section>
  )
}
export default Right_layout;