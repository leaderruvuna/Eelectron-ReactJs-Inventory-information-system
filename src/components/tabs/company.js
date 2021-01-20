import React from 'react';
import '../../assets/css/tabs-css/company.scss';
class Company extends React.Component {
  render() {
    return (
      <div className="main-company">
        {/* user management  */}
        <div
          role="tabpanel"
          class="tab-pane user-manage-div active"
          id="manage"
        >
          <form class="form-container ">
            <fieldset class="scheduler-border">
              <legend class="scheduler-border">Company Details</legend>
              <table class="table table-borderless" style={{ width: 580 }}>
                <thead>
                  <tr>
                    <th scope="col" hidden="true" />
                    <th scope="col" hidden="true" />
                    <th scope="col" hidden="true" />
                    <th scope="col" hidden="true" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label for="email" class="label-size">
                        Company Name:
                      </label>
                    </td>
                    <td>
                      <input type="text" class="form-control input-size" />
                    </td>
                    <td>
                      <label for="email" class="label-size">
                        Company Mail:
                      </label>
                    </td>
                    <td>
                      <input type="email" class="form-control input-size" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="email" class="label-size">
                        Address1:
                      </label>
                    </td>
                    <td>
                      <input type="text" class="form-control input-size" />
                    </td>
                    <td>
                      <label for="email" class="label-size">
                        Address2:
                      </label>
                    </td>
                    <td>
                      <input type="password" class="form-control input-size" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="email" class="label-size">
                        Country:
                      </label>
                    </td>
                    <td>
                      <input type="password" class="form-control input-size" />
                    </td>
                    <td>
                      <label for="email" class="label-size">
                        City:
                      </label>
                    </td>
                    <td>
                      <input type="text" class="form-control input-size" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="email" class="label-size ">
                        Description:
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control input-size input-description"
                      />
                    </td>
                    <td>
                      <label for="email" class="label-size">
                        Phone:
                      </label>
                    </td>
                    <td>
                      <input type="text" class="form-control input-size" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="email" class="label-size">
                        About:
                      </label>
                    </td>
                    <td>
                      <input type="text" class="form-control input-size" />
                    </td>
                    <td>
                      <label for="email" class="label-size">
                        Website:
                      </label>
                    </td>
                    <td>
                      <input type="text" class="form-control input-size" />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <button class="btn btn-primary btn-raised ">
                        <i class="fas fa-archive " style={{ marginRight: 5 }} />
                        Save{' '}
                      </button>
                      <button
                        class="btn btn-warning btn-raised "
                        style={{ position: 'relative', left: '5px' }}
                      >
                        <i
                          class="fas fa-arrow-left"
                          style={{ marginRight: 5 }}
                        />
                        Back
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Company;
