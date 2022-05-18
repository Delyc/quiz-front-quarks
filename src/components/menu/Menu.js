import React,{useState, useEffect} from "react";
import close from '../../assets/icons/close.png'
import useWindowDimensions from "../../components/libraries/useWindowDimensions";
import { items } from "./MenuItems";
import "./Menu.css"


function Menu({ isOpen, onChange }) {
  const [isMobile, setIsMobile] = useState(true)
  const { width } = useWindowDimensions();
  useEffect(() => {
    const handleResize = () => {
      if (width > 900) {
        setIsMobile(false);
      }

      if (width <= 900) {
        setIsMobile(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [width]);
  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="btn-close"
        onClick={() => onChange(false)}
      >
       <img className="bg" src={close} alt="" />
      </span>
      {!isMobile && <div className="Menu-items notMobile">
        {items.map((item, index) => (
          <a href={item.itemLink} key={index}>
           {item.itemIcon} {item.itemText}
          </a>
        ))}
      </div>}
      {isMobile && <div className="Menu-items is-mobile">
        {items.map((item, index) => (
          <a className="a-isMobile" href={item.itemLink} key={index}>
           {item.itemIcon}
          </a>
        ))}
      </div> }
    </div>
  );
}

export default Menu;