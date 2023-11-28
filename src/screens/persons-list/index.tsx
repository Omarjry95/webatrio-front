import React from 'react';
import {Link} from "react-router-dom";
import styles from './styles';
import {useGetPersonsQuery} from "../../api/main";

export default function PersonsList() {

    const { data = [] } = useGetPersonsQuery();

    return (
      <div style={styles.container}>
          <div style={styles.header}>
              <Link to="new">
                  <button>
                      Add New Person
                  </button>
              </Link>
          </div>

          <table>
              <thead>
              <tr>
                  <th>
                      First Name
                  </th>

                  <th>
                      Last Name
                  </th>

                  <th>
                      Age
                  </th>

                  <th>
                      Current Job
                  </th>

                  <th>
                      Actions
                  </th>
              </tr>
              </thead>

              <tbody>
              {data.map((person) => (
                <tr>
                    <td style={styles.cell}>
                        {person.firstName}
                    </td>

                    <td style={styles.cell}>
                        {person.lastName}
                    </td>

                    <td style={styles.cell}>
                        {person.age}
                    </td>

                    <td style={styles.cell}>
                        {person.currentEx}
                    </td>

                    <td style={styles.cell}>
                        <Link to={`newEx/${person.id}`}>
                            <button>
                                Add New Experience
                            </button>
                        </Link>
                    </td>
                </tr>
              ))}
              </tbody>
          </table>
      </div>
    )
}