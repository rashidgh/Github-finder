import React from 'react';
import Mainpage from "./Mainpage";
import SidebarComp from "./SidebarComp";

const Pages = () => {
  return (
    <section id="mainBlock">
      <article>
        <SidebarComp />
        <Mainpage />
      </article>
    </section>
  );
}

export default Pages