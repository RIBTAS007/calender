import React from "react";
import styles from "./Footer.module.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setVisible } from "../utils/calenderSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const date = useSelector((store) => store.calender.date);
  const slotVariant = useSelector((store) => store.calender.slotVariant);
  const visible = useSelector((store) => store.calender.visible);
  const selectedSlotTime = useSelector(
    (store) => store.calender.selectedSlotTime
  );

  const handleButtonClick = () => {
    console.log(date);
    console.log(slotVariant);
    console.log(selectedSlotTime);
    dispatch(setVisible(true));
  };

  const disableButton =
    date === null || Object.keys(selectedSlotTime).length === 0;

  return (
    <div className={styles.footer}>
      <div>
        <span className={styles.footerText}>
          POWERED BY <a href="https://apps.shopify.com/">APPOINTO</a>
        </span>
      </div>
      <div>
        <button
          className={styles.footerButton}
          onClick={handleButtonClick}
          disabled={disableButton}
        >
          {!visible ? (
            <>
              <span className={styles.footerButtonText}>Next</span>
              <BiChevronRight className={styles.footerButtonIcon} />
            </>
          ) : (
            <>
              <BiChevronLeft className={styles.footerButtonIcon} />
              <span className={styles.footerButtonText}>Back</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Footer;
