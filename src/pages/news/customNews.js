import styles from "../../../styles/CustomNews.module.css";

import { useRouter } from "next/router";
import produce from "immer";
import { useState } from "react";

const getInitialFormData = () => {
  return {
    keyword: {
      value: "",
    },
    startDate: {
      value: "",
    },
    endDate: {
      value: "",
    },
  };
};

const custom_news = () => {
  const [formData, setFormData] = useState(getInitialFormData);

  const router = useRouter();

  const changeHandler = (event, identifier) => {
    const updatedFormData = produce(formData, (draftFormData) => {
      draftFormData[identifier].value = event.target.value;
    });

    setFormData(updatedFormData);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const { keyword, startDate, endDate } = formData;

    router.push(`/news/${keyword.value}/${startDate.value}/${endDate.value}`);
  };

  const { keyword, startDate, endDate } = formData;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <label className={styles.label}>Keyword : </label>
          <input
            type="text"
            placeholder={"Enter the Keyword for search"}
            onChange={(event) => changeHandler(event, "keyword")}
            value={keyword.value}
            className={styles.input}
          />
        </div>

        <div className={styles.content}>
          <label className={styles.label}>Start Date :</label>
          <input
            type="date"
            onChange={(event) => changeHandler(event, "startDate")}
            value={startDate.value}
            className={styles.input}
          />
        </div>

        <div className={styles.content}>
          <label className={styles.label}>End Date :</label>
          <input
            type="date"
            onChange={(event) => changeHandler(event, "endDate")}
            value={endDate.value}
            className={styles.input}
          />
        </div>

        <div className={styles.submit}>
          <button className={styles.submitButton} onClick={submitHandler}>
            Get News
          </button>
        </div>
      </div>
    </div>
  );
};

export default custom_news;
