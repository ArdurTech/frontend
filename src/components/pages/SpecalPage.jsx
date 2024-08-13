import { useEffect, useRef, useState } from "react";
import styles from "../styles/Special.module.css";
import { useHistory } from "react-router-dom";
import { toast } from "sonner";

function SpecialPage() {
  const history = useHistory();
  const toastWarningMessage = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Login System - Special Page";
    const checkIfToken = localStorage.getItem("token");
    if (!checkIfToken || checkIfToken === null) {
      if (toastWarningMessage.current === false) {
        toast.warning("No 'Token' Found | Please LogIn first");
        toastWarningMessage.current = true;
      }
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }
  }, [history]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          ☰
        </div>
        <h1 className={styles.welcomeMessage}>Welcome to the Special Page</h1>
        {menuOpen && (
          <div className={styles.verticalMenu}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>HOME</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </header>

      <div className={styles.container}>
        <div id={styles.companyInfo}>
          <h2>About Our Company</h2>
          <p className="p">
          Ardur Technology is a Multi-Faceted organization offering diverse global business 
          services like Title Insurance, Appraisal Services, Medical Insurance, Accounting and 
          Financial Reporting, IT Software and Services, Digital Transformation. Our TEAM of Professionals 
          has the DNA and ZEAL incorporated towards a passion for client satisfaction, technological
           innovation, deep-rooted industry and business process knowledge. Our extensive portfolio
            of services and solutions span across multiple industries, such as real estate, finance,
             healthcare, manufacturing, logistics, travel, retail, hospitality,
           technology, telecom and a lot more that enables your business in planning ahead.
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </>
  );
}

export default SpecialPage;
