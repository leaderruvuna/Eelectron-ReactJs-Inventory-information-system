import React from 'react';
import '../../assets/css/tabs-css/profile.scss';
class Profile extends React.Component {
	render() {
		return (
			<div className='main-profile'>
				{/* user management  */}
				<div role='tabpanel' class='tab-pane user-manage-div active' id='manage'>
					<form class='form-container '>
						<fieldset class='scheduler-border'>
							<legend class='scheduler-border'>Customer Details</legend>
							<table class='table table-borderless' style={{ width: 780 }}>
								<thead>
									<tr>
										<th scope='col' hidden='true' />
										<th scope='col' hidden='true' />
										<th scope='col' hidden='true' />
										<th scope='col' hidden='true' />
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<label for='email' class='label-size'>
												Firstname:
											</label>
										</td>
										<td>
											<input type='email' class='form-control input-size' id='email' value='' />
										</td>
										<td>
											<label for='email' class='label-size'>
												Lastname:
											</label>
										</td>
										<td>
											<input type='email' class='form-control input-size' id='email' value='' />
										</td>
									</tr>

									<tr>
										<td>
											<label for='email' class='label-size'>
												Email:
											</label>
										</td>
										<td>
											<input type='email' class='form-control input-size' id='email' value='' />
										</td>
										<td>
											<label for='email' class='label-size'>
												Phone Number:
											</label>
										</td>
										<td>
											<input type='password' class='form-control input-size' id='email' value='' />
										</td>
									</tr>

									<tr>
										<td>
											<label for='email' class='label-size'>
												Adress1:
											</label>
										</td>
										<td>
											<input type='password' class='form-control input-size' id='email' value='' />
										</td>
										<td>
											<label for='email' class='label-size'>
												Adress2:
											</label>
										</td>
										<td>
											<input type='email' class='form-control input-size' id='email' value='' />
										</td>
									</tr>
									<tr>
										<td />
										<td>
											<button class='btn btn-primary btn-raised '>
												<i class='fas fa-archive ' style={{ marginRight: 5 }} />
												Save
											</button>
											<button class='btn btn-warning btn-raised ' style={{ position: 'relative', left: '5px' }}>
												<i class='fas fa-arrow-left' style={{ marginRight: 5 }} />
												Back
											</button>
										</td>
										<td />
									</tr>
								</tbody>
							</table>
						</fieldset>
					</form>
				</div>
				<table
					id='dtBasicExample'
					class='table table-striped table-bordered table-add-group'
					cellspacing='0'
					width='100%'>
					<thead class='thead-dark'>
						<tr>
							<th class='th-sm'>Email</th>
							<th class='th-sm'>fristname</th>
							<th class='th-sm'>lastname</th>
							<th class='th-sm'>phone</th>
							<th class='th-sm'>address1</th>
							<th class='th-sm'>address2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>leaderruv@gmail.com</td>
							<td>leader</td>
							<td>ruv</td>
							<td>0788093633</td>
							<td>kampala</td>
							<td>kasanga</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default Profile;
