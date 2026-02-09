"use client";

import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileHeaderLink: React.FC<{
  item: HeaderItem;
  activeHash: string;
  setActiveHash: (hash: string) => void;
  onClick?: () => void;
}> = ({ item, activeHash, setActiveHash, onClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();

  useEffect(() => {
    setActiveHash(window.location.hash);
  }, [path, setActiveHash]);

  const handleLinkClick = (href: string) => {
    if (item.submenu) {
      handleToggle();
      return;
    }
    if (href.includes("#")) {
      const hash = "#" + href.split("#")[1];
      setActiveHash(hash);
    } else {
      setActiveHash("");
    }
    if (onClick) onClick();
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return path === "/" && activeHash === href.replace("/", "");
    }
    return path === href;
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={() => handleLinkClick(item.href)}
        className={`text-base flex items-center justify-between w-fit py-2 transition-all duration-300 focus:outline-hidden hover:text-primary ${
          isActive(item.href) ? "text-primary font-semibold" : "text-muted"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-primary/5 p-2 w-full rounded-lg mt-1 space-y-1">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={() => handleLinkClick(subItem.href)}
              className={`block py-2 px-4 rounded-md transition-all duration-300 ${
                isActive(subItem.href)
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
