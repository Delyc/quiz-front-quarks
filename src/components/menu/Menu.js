import React from "react";
import close from '../../assets/icons/close.png'

import { items } from "./MenuItems";
import "./Menu.css"
function Menu({ isOpen, onChange }) {
  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="btn-close"
        onClick={() => onChange(false)}
      >
       <img className="bg" src={close} alt="" />
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <a href={item.itemLink} key={index}>
           {item.itemIcon} {item.itemText}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Menu;