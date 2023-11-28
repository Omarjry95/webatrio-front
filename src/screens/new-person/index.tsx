import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Link} from "react-router-dom";
import {useCreatePersonMutation} from "../../api/main";
import { useNavigate } from "react-router-dom";

export default function NewPerson() {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>(new Date(Date.now()).toISOString().substring(0, 10));

    const [createPerson, { isSuccess, isError }] = useCreatePersonMutation();

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

            createPerson({
                firstName,
                lastName,
                birthDate
            });
        }}
      >
          <h1>
              Add new Person
          </h1>

          <div style={styles.input}>
              <label htmlFor="first-name">
                  First Name:
              </label>

              <input
                id="first-name"
                name="first-name"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
          </div>

          <div style={styles.input}>
              <label htmlFor="last-name">
                  Last Name:
              </label>

              <input
                id="last-name"
                name="last-name"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
          </div>

          <div style={styles.input}>
              <label htmlFor="birth-date">
                  Birth Date:
              </label>

              <input
                id="birth-date"
                name="birth-date"
                type="date"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
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