import React from 'react';
import '../css/tabs-css/brand.scss';
import '../font-awsome/fontawesome-free-5.9.0-web/css/all.min.css';

const Brand_Popup = () => (
	<div className='brand-popup'>
		<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#modalCart'>
			Launch modal
		</button>

		<div
			class='modal fade'
			id='modalCart'
			tabindex='-1'
			role='dialog'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div class='modal-dialog' role='document'>
				<div class='modal-content'>
					<div class='modal-header'>
						<h4 class='modal-title' id='myModalLabel'>
							Your cart
						</h4>
						<button type='button' class='close' data-dismiss='modal' aria-label='Close'>
							<span aria-hidden='true'>×</span>
						</button>
					</div>

					<div class='modal-body'>
						<table class='table table-hover'>
							<thead>
								<tr>
									<th>#</th>
									<th>Product name</th>
									<th>Price</th>
									<th>Remove</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope='row'>1</th>
									<td>Product 1</td>
									<td>100$</td>
									<td>
										<a>
											<i class='fas fa-times' />
										</a>
									</td>
								</tr>
								<tr>
									<th scope='row'>2</th>
									<td>Product 2</td>
									<td>100$</td>
									<td>
										<a>
											<i class='fas fa-times' />
										</a>
									</td>
								</tr>
								<tr>
									<th scope='row'>3</th>
									<td>Product 3</td>
									<td>100$</td>
									<td>
										<a>
											<i class='fas fa-times' />
										</a>
									</td>
								</tr>
								<tr>
									<th scope='row'>4</th>
									<td>Product 4</td>
									<td>100$</td>
									<td>
										<a>
											<i class='fas fa-times' />
										</a>
									</td>
								</tr>
								<tr class='total'>
									<th scope='row'>5</th>
									<td>Total</td>
									<td>400$</td>
									<td />
								</tr>
							</tbody>
						</table>
					</div>

					<div class='modal-footer'>
						<button type='button' class='btn btn-outline-primary' data-dismiss='modal'>
							Close
						</button>
						<button class='btn btn-primary'>Checkout</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default Brand_Popup;
