import React from 'react';
import '../../assets/css/tabs-css/dashboard.css';
class Dashboard extends React.Component {
	render() {
		return (
			<div className='dash-main card'>
				<table class='table '>
					<thead>
						<tr>
							<th scope='col' />
							<th scope='col' />
							<th scope='col' />
							<th scope='col' />
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div class='dashDiv card green'>
									<p>
										<h7 className='colorwhite card-header'>Total Products</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
							<td>
								<div class='dashDiv card blue'>
									<p>
										<h7 className='colorwhite card-header'>Total Users</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
							<td>
								<div class='dashDiv card yellow'>
									<p>
										<h7 className='colorwhite card-header'>Total Groups</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
							<td>
								<div class='dashDiv card orange'>
									<p>
										<h7 className='colorwhite card-header'>Total Brands</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class='dashDiv card green'>
									<p>
										<h7 className='colorwhite card-header'>Total Categories</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
							<td>
								<div class='dashDiv card blue'>
									<p>
										<h7 className='colorwhite card-header'>Total Stores</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
							<td>
								<div class='dashDiv card yellow'>
									<p>
										<h7 className='colorwhite card-header'>Total Attributes</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
							<td>
								<div class='dashDiv card orange'>
									<p>
										<h7 className='colorwhite card-header'>Total Orders</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class='dashDiv card green'>
									<p>
										<h7 className='colorwhite card-header'>Total Companies</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
							<td>
								<div class='dashDiv card blue'>
									<p>
										<h7 className='colorwhite card-header'>Total Reports</h7>
									</p>
									<p>
										<h2 className='colorwhite'>2</h2>
									</p>
									<p>
										<i class='fas fa-chart-bar colorwhite iconsize' />
									</p>
								</div>
							</td>
							<td />
							<td />
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Dashboard;
