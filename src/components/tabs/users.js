import React from 'react';
import '../../assets/css/tabs-css/users.scss';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import firebaseConfig from '../../service/Firebase';
import firebase from '@firebase/app';
import '@firebase/firestore';
import firebaseapp from '../../service/Firebase';
import { async } from 'q';
//const firebaseapp=firebase.initializeApp(firebaseConfig);
//const firestoreapp=firestore.initializeApp(firebaseConfig);

//material ui

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const styles = (theme) => ({
	root: {
		display: 'flex',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'hide'
	},
	table: {
		minWidth: 340
	},
	tableCell: {
		paddingRight: 4,
		paddingLeft: 5
	},
	button: {
		width: 50
	}
});

let data = [];
class Users extends React.Component {
	//usermap
	//
	constructor() {
		super();
		this.state = {
			//user management
			email: '',
			username: '',
			firstname: '',
			lastname: '',
			password: '',
			firstname: '',
			lastname: '',
			phone: '',
			gender: '',
			group: '',

			save_status: false,

			userMap: [],
			mydata: []
		};
	}

	handleUsername(e) {
		this.setState({
			username: e.target.value
		});
	}
	handleEmail(e) {
		this.setState({
			email: e.target.value
		});
	}
	handleFirstname(e) {
		this.setState({
			firstname: e.target.value
		});
	}
	handleLastname(e) {
		this.setState({
			lastname: e.target.value
		});
	}
	handlePassword(e) {
		this.setState({
			password: e.target.value
		});
	}
	handleConfirmPassword(e) {
		this.setState({
			confirmpass: e.target.value
		});
	}
	// eslint-disable-next-line no-dupe-class-members
	handleUsername(e) {
		this.setState({
			username: e.target.value
		});
	}
	handlePhone(e) {
		this.setState({
			phone: e.target.value
		});
	}
	handleGroup(e) {
		this.setState({
			group: e.target.value
		});
	}
	handleGender(e) {
		this.setState({
			gender: e.target.value
		});
	}

	componentDidMount = async () => {
		this.getUsers();
	};

	//
	getUsers = async () => {
		console.log('hello');
		await firebaseapp
			.firestore()
			.collection('users')
			.get()
			.then((snapshot) => {
				//console.log(snapshot);
				snapshot.forEach((doc, key) => {
					data.push({
						username: doc.data().username,
						group: doc.data().group,
						email: doc.data().email
					});
				});
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
		//console.log(this.state.mydata.forEach((data,key)=>{console.log(data)}));
		this.setState({ mydata: data });
	};

	//delete users

	deleteUsers = async (email) => {
		var ref = await firebaseapp.firestore().collection('users').where('email', '==', email);
		ref.get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				doc.ref.delete();
			});
		});

		this.getUsers();
	};

	render() {
		const { mydata } = this.state;
		return (
			<div className='user-main'>
				<ul class='nav nav-tabs user' role='tablist'>
					<li class='nav-item'>
						<a class='nav-link active' href='#manage' role='tab' data-toggle='tab'>
							<i class='fas fa-dot-circle' />&nbsp;Add Users
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link  size' href='#adduser' role='tab' data-toggle='tab'>
							<i class='fas fa-dot-circle' />&nbsp;Manage Users
						</a>
					</li>
				</ul>
				<div class='tab-content'>
					<div role='tabpanel' class='tab-pane  ' id='adduser'>
						{/* table */}
						<Paper className={styles.root}>
							<Table className={styles.table}>
								<TableHead>
									<TableRow>
										<TableCell className={styles.tableCell}>username</TableCell>
										<TableCell className={styles.tableCell}>email</TableCell>
										<TableCell className={styles.tableCell}>group</TableCell>
										<TableCell className={styles.tableCell}>Edit</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{mydata.map((data, key) => {
										return (
											<TableRow key={key}>
												<TableCell className={styles.tableCell}>{data.username}</TableCell>
												<TableCell className={styles.tableCell}>{data.email}</TableCell>
												<TableCell className={styles.tableCell}>{data.group}</TableCell>
												<TableCell className={styles.tableCell}>
													<button
														type='button'
														className='btn btn-danger'
														value={data.email}
														onClick={(e) => {
															this.deleteUsers(e.target.value);
														}}>
														delete
													</button>
													<button
														type='button'
														className='btn btn-success'
														value={data.email}
														onClick={(e) => {
															console.log('value is' + e.target.value);
														}}>
														edit
													</button>
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</Paper>
					</div>

					{/* user management  */}
					<div role='tabpanel' class='tab-pane user-manage-div active' id='manage'>
						<form class='form-container '>
							<fieldset class='scheduler-border'>
								<legend class='scheduler-border'>Add New Users</legend>
								<table class='table table-borderless' style={{ width: 580 }}>
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
												<label for='username' class='label-size'>
													Username:
												</label>
											</td>
											<td>
												<input
													type='text'
													class='form-control input-size'
													id='usename'
													value={this.state.username}
													onChange={(event) => this.handleUsername(event)}
												/>
											</td>
											<td>
												<label for='email' class='label-size'>
													User Group:
												</label>
											</td>
											<td>
												<select
													class='selectpicker '
													data-style='btn border'
													data-show-subtext='true'
													data-live-search='true'
													value={this.state.group}
													onChange={(event) => this.handleGroup(event)}>
													<option data-subtext=''>Select user group</option>
													<option data-subtext=''>staff</option>
													<option data-subtext=''>admin</option>
													<option data-subtext=''>seller</option>
													<option data-subtext=''>manager</option>
													<option data-subtext=''>other</option>
												</select>
											</td>
										</tr>

										<tr>
											<td>
												<label for='password' class='label-size'>
													Password:
												</label>
											</td>
											<td>
												<input
													type='password'
													class='form-control input-size'
													id='password'
													value={this.state.password}
													onChange={(event) => this.handlePassword(event)}
												/>
											</td>
											<td>
												<label for='email' class='label-size'>
													Email:
												</label>
											</td>
											<td>
												<input
													type='email'
													class='form-control input-size'
													id='email'
													value={this.state.email}
													onChange={(event) => this.handleEmail(event)}
												/>
											</td>
										</tr>
										<tr>
											<td>
												<label for='confirmpassword' class='label-size'>
													Confirm Password:
												</label>
											</td>
											<td>
												<input
													type='password'
													class='form-control input-size'
													id='confirmpassword'
													value={this.state.confirmpass}
													onChange={(event) => this.handleConfirmPassword(event)}
												/>
											</td>
											<td>
												<label for='firstname' class='label-size'>
													Firstname:
												</label>
											</td>
											<td>
												<input
													type='text'
													class='form-control input-size'
													id='firstname'
													value={this.state.firstname}
													onChange={(event) => this.handleFirstname(event)}
												/>
											</td>
										</tr>

										<tr>
											<td>
												<label for='lastname' class='label-size'>
													Lastname:
												</label>
											</td>
											<td>
												<input
													type='text'
													class='form-control input-size'
													id='lastname'
													value={this.state.lastname}
													onChange={(event) => this.handleLastname(event)}
												/>
											</td>
											<td>
												<label for='phone' class='label-size'>
													Phone:
												</label>
											</td>
											<td>
												<input
													type='text'
													class='form-control input-size'
													id='phone'
													value={this.state.phone}
													onChange={(event) => this.handlePhone(event)}
												/>
											</td>
										</tr>

										<tr>
											<td>
												<label for='gender' class='label-size'>
													Gender:
												</label>
											</td>
											<td>
												<select
													class='selectpicker '
													data-style='btn border '
													data-show-subtext='true'
													data-live-search='true'
													value={this.state.gender}
													onChange={(event) => this.handleGender(event)}>
													<option data-subtext=''>Select gender</option>
													<option data-subtext=''>male</option>
													<option data-subtext=''>female</option>
												</select>
											</td>
										</tr>
										<tr>
											<td />
											<td>
												<button type='button' class='btn btn-primary ' onClick={this.save}>
													<i class='fas fa-archive ' style={{ marginRight: 5 }} />
													Save
													{!this.state.save_status ? null : (
														<div
															class='spinner-border'
															style={{
																position: 'relative',
																top: '10%',
																left: '10%',
																color: '#fff',
																width: '15px',
																height: '15px'
															}}
														/>
													)}
												</button>
												<button
													type='button'
													class='btn btn-warning '
													style={{ position: 'relative', left: '10px' }}
													onClick={() => {
														console.log('component did mount');
														console.log(
															this.state.userMap.forEach((data, key) => {
																console.log(data);
															})
														);
													}}>
													<i class='fas fa-arrow-left' />Back
												</button>

												<ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
											</td>
										</tr>
									</tbody>
								</table>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		);
	}

	//----------------------------------------------------save --------------------------------------------------------
	save = () => {
		this.setState({
			save_status: true
		});
		const now = new Date().getTime();
		firebaseapp
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				console.log('succeed');
				firebaseapp
					.firestore()
					.collection('users')
					./*doc(this.state.email).collection(""+now).*/ add({
						username: this.state.username,
						group: this.state.group,
						email: this.state.email,
						firstname: this.state.firstname,
						lastname: this.state.lastname,
						gender: this.state.gender,
						phone: this.state.phone
					})
					.then(() => {
						ToastsStore.success('User successful added !');
						this.setState({ save_status: false });
					})
					.catch((e) => {
						console.log('firestore error' + e);
						this.setState({ save_status: false });
					});
			})
			.catch((e) => {
				console.log('error' + e);
				this.setState({ save_status: false });
				ToastsStore.warning('error' + e);
			})
			.then(() => {
				this.setState({ save_status: false });
			})
			.catch((e) => {
				console.log('error' + e);
				this.setState({ save_status: false });
				ToastsStore.warning('error' + e);
			});
	};
}

//

export default Users;
