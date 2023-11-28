import React, {useEffect, useState} from "react";
import styles from "../new-experience/styles";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useCreateExperienceMutation, useGetCompaniesQuery} from "../../api/main";

export default function NewExperience() {

    const [company, setCompany] = useState<string | undefined>(undefined);
    const [startDate, setStartDate] = useState<string>(new Date(Date.now()).toISOString().substring(0, 10));
    const [endDate, setEndDate] = useState<string | undefined>(undefined);

    const { id: personId } = useParams();

    const { data = [] } = useGetCompaniesQuery();

    const [createExperience, { isSuccess }] = useCreateExperienceMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess)
            navigate("/");
    }, [isSuccess, navigate]);

    return (
      <form
        style={styles.container}
        onSubmit={(event) => {
            event.preventDefault();

            console.log("Submitted !");

            if (company && personId) {
                createExperience({
                    startDate,
                    endDate,
                    company,
                    person: personId
                })
            }
        }}
      >
          <h1>
              Add new Experience
          </h1>

          <div style={styles.input}>
              <label htmlFor="company">
                  Company:
              </label>

              <select
                id="company"
                name="company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              >
                  <option value={undefined}>
                       - No company chosen -
                  </option>

                  {data.map((company) => (
                    <option value={company.id}>
                        {company.name}
                    </option>
                  ))}
              </select>
          </div>

          <div style={styles.input}>
              <label htmlFor="start-date">
                  Start Date:
              </label>

              <input
                id="start-date"
                name="start-date"
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
              />
          </div>

          <div style={styles.input}>
              <label htmlFor="end-date">
                  End Date:
              </label>

              <input
                id="end-date"
                name="end-date"
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
              />
          </div>

          <div style={styles.actions}>
              <Link to="/">
                  <button
                    type="button"
                    style={styles.actionButton}
                  >
                      Cancel
                  </button>
              </Link>

              <button type="submit">
                  Submit
              </button>
          </div>
      </form>
    )
}