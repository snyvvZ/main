import React from "react";
import TitlePage from "../common/TitlePage";
import TitleSub from "../common/TitleSub";

const Update = () => {
  return (
    <section>
      <TitlePage page={`업데이트`} />

      <article>
        <TitleSub title={`상품 랭킹`} linkURL={`#anchor`} />
      </article>
    </section>
  );
};

export default Update;
