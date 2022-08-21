/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 12/08/2022 - 00:12:43
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

const style = {
    footer: `p-4 bg-white rounded-lg shadow flex items-center justify-between`,
    links: `flex flex-wrap items-center mt-3 text-sm text-black`,
};

const Footer = () => {
  return (
    <footer class={style.footer}>
      <span class="text-sm text-black text-center">
        © 2022{" "}
        <a href="https://github.com/DevBros-Projects" class="hover:underline">
          DevBros
        </a>
        . All Rights Reserved.
      </span>
      <ul class={style.links}>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
