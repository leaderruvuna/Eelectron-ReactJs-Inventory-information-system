import React from 'react';
import '../../assets/css/tabs-css/orders.css';
class Orders extends React.Component {
	render() {
		return (
			<div className='order-main'>
				<ul class='nav nav-tabs user' role='tablist'>
					<li class='nav-item inner-tab'>
						<a class='nav-link active' href='#addorder' role='tab' data-toggle='tab'>
							<i class='fas fa-dot-circle' />&nbsp;Add Orders
						</a>
					</li>
					<li class='nav-item inner-tab'>
						<a class='nav-link  size' href='#manageorder' role='tab' data-toggle='tab'>
							<i class='fas fa-dot-circle' />&nbsp;Manage Orders
						</a>
					</li>
				</ul>
				<div class='tab-content'>
					<div role='tabpanel' class='tab-pane  ' id='manageorder'>
						<form action='' class='navbar-form navbar-right order-search-form'>
							<div class=''>
								<input type='Search' placeholder='Search...' class='form-control order-search' />
							</div>
						</form>
						<select class='browser-default custom-select order-select'>
							<option selected>10</option>
							<option value='1'>15</option>
							<option value='2'>20</option>
							<option value='3'>50</option>
						</select>

						<table id='dtBasicExample' class='table table-striped table-bordered order-table' cellspacing='0' width=''>
							<thead class='thead-dark'>
								<tr>
									<th class='th-sm'>Image</th>
									<th class='th-sm'>SKU</th>
									<th class='th-sm'>Customer Name</th>
									<th class='th-sm'>Customer Phone</th>
									<th class='th-sm'>Product Name</th>
									<th class='th-sm'>Price</th>
									<th class='th-sm'>Qty</th>
									<th class='th-sm'>Store</th>
									<th class='th-sm'>Status</th>
									<th class='th-sm'>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td />
									<td>jumber green big</td>
									<td>Joel</td>
									<td>+256788093633</td>
									<td>jumber </td>
									<td>800</td>
									<td>8</td>
									<td>Store 1</td>
									<td>
										<label class='order-status'>cash</label>
									</td>
									<td>
										<button type='button' class='btn btn-primary btn-xs btn-edit-del'>
											<i class='fas fa-edit' />
										</button>
										<button type='button' class='btn btn-danger btn-xs btn-edit-del'>
											<i class='fas fa-trash-alt' />
										</button>
									</td>
								</tr>
								<tr>
									<td />
									<td>jumber green big</td>
									<td>Joel</td>
									<td>+256788093633</td>
									<td>jumber </td>
									<td>800</td>
									<td>8</td>
									<td>Store 1</td>
									<td>
										<label class='order-status'>cash</label>
									</td>
									<td>
										<button type='button' class='btn btn-primary btn-xs btn-edit-del'>
											<i class='fas fa-edit' />
										</button>
										<button type='button' class='btn btn-danger btn-xs btn-edit-del'>
											<i class='fas fa-trash-alt' />
										</button>
									</td>
								</tr>
								<tr>
									<td />
									<td>jumber green big</td>
									<td>Joel</td>
									<td>+256788093633</td>
									<td>jumber </td>
									<td>800</td>
									<td>8</td>
									<td>Store 1</td>
									<td>
										<label class='order-status'>cash</label>
									</td>
									<td>
										<button type='button' class='btn btn-primary btn-xs btn-edit-del'>
											<i class='fas fa-edit' />
										</button>
										<button type='button' class='btn btn-danger btn-xs btn-edit-del'>
											<i class='fas fa-trash-alt' />
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* add orders  */}
					<div role='tabpanel' class='tab-pane user-manage-div active' id='addorder'>
						<form class='form-container'>
							<fieldset class='scheduler-border'>
								<legend class='scheduler-border'>Create Orders</legend>
								<table class='table table-borderless' style={{ width: 600 }}>
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
												<label for='email ' class='label-size'>
													Customer Name:
												</label>
											</td>
											<td>
												<input type='email' class='form-control input-size' id='email' />
											</td>
											<td>
												<label for='email' class='label-size'>
													Customer Adrress:
												</label>
											</td>
											<td>
												<input type='email' class='form-control input-size' id='email' />
											</td>
										</tr>

										<tr>
											<td>
												<label for='email' class='label-size'>
													Customer Phone:
												</label>
											</td>
											<td>
												<input type='email' class='form-control input-size' id='email' />
											</td>
											<td>
												<label for='email' class='label-size'>
													Product:
												</label>
											</td>
											<td>
												<select
													class='selectpicker '
													data-style='btn border'
													data-show-subtext='true'
													data-live-search='true'>
													<option data-subtext=''>Select Products Here</option>
													<option data-subtext=''>Iphone 6</option>
													<option data-subtext=''>Mac Book Pro</option>
													<option data-subtext=''>Dell Inspiron</option>
													<option data-subtext=''>Tecno Comon11</option>
													<option data-subtext=''>Hp</option>
													<option data-subtext='' disabled='disabled'>
														Keyboard
													</option>
												</select>
											</td>
										</tr>

										<tr>
											<td>
												<label for='email' class='label-size'>
													Quantity:
												</label>
											</td>
											<td>
												<input type='email' class='form-control input-size' id='email' />
											</td>
											<td>
												<label for='email' class='label-size'>
													Rate:
												</label>
											</td>
											<td>
												<input type='email' class='form-control input-size' id='email' draggable disabled />
											</td>
										</tr>

										<tr>
											<td>
												<label for='email' class='label-size'>
													Amount:
												</label>
											</td>
											<td>
												<input type='email' class='form-control input-size' id='email' draggable disabled />
											</td>
											<td>
												<label for='email' class='label-size'>
													Gross Amount:
												</label>
											</td>
											<td>
												<input type='email' class='form-control input-size' id='email' draggable disabled />
											</td>
										</tr>

										<tr>
											<td>
												<label for='email' class='label-size'>
													Vat %:
												</label>
											</td>
											<td>
												<input type='email' class='form-control input-size' id='email' draggable disabled />
											</td>
											<td>
												<label for='email' class='label-size'>
													Net Amount:
												</label>
											</td>
											<td>
												<input type='email' class='form-control input-size' id='email' draggable disabled />
											</td>
										</tr>

										<tr>
											<td />
											<td>
												<button class='btn btn-primary btn-raised'>
													<i class='fas fa-archive ' style={{ marginRight: 5 }} />
													Create Order
												</button>
												<button class='btn btn-warning btn-raised ' style={{ position: 'relative', left: '5px' }}>
													<i class='fas fa-arrow-left' style={{ marginRight: 5 }} />
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
			</div>
		);
	}
}
export default Orders;
