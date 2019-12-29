import React from "react";
import { arrayOf, shape, string } from "prop-types";
import { UL, LI } from "core/Lists";
import { Anchor } from "core/Anchor";
import Link from "next/link";

const Navigation = ({ links }) => {
  return (
    <UL>
      {links.map(({ name, href }) => (
        <LI>
          <Link href={href}>
            <Anchor>{name}</Anchor>
          </Link>
        </LI>
      ))}
    </UL>
  );
};

Navigation.defaultProps = {
  links: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" }
  ]
};

Navigation.propTypes = {
  links: arrayOf(shape({ name: string, href: string }))
};

export { Navigation };
