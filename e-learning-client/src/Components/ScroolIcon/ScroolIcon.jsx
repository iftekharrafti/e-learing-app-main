import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const ScroolIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrool = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{display: isVisible ? 'block' : 'none', position: "fixed", bottom: "50px", right: "50px" }}>
      <Button
        onClick={handleScrool}
        className="d-flex justify-content-center align-items-center"
        style={{ width: "55px", height: "60px", background: "#1664F8" }}
      >
        <FontAwesomeIcon
          icon={faChevronUp}
          style={{ color: "white", fontSize: "22px" }}
        />
      </Button>
    </div>
  );
};

export default ScroolIcon;
