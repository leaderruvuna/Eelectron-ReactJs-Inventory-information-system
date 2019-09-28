import React from 'react';
import "../css/tabs-css/products.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../font-awsome/fontawesome-free-5.9.0-web/css/all.min.css";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "bootstrap-select/dist/js/bootstrap-select.min.js";
class Products extends React.Component{
  render(){
    return(
      <div className="product-main">
      <ul class="nav nav-tabs user " role="tablist">
      <li class="nav-item ">
        <a class="nav-link active" href="#addpro" role="tab" data-toggle="tab"><i class="fas fa-dot-circle"></i>&nbsp;Add Products</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link  size" href="#managepro" role="tab" data-toggle="tab"><i class="fas fa-dot-circle"></i>&nbsp;Manage Prts</a>
      </li>
      
    </ul>
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane  " id="managepro">
      <form action="" class="navbar-form navbar-right order-search-form">
      <div class="input-group">
          <input type="Search" placeholder="Search..." class="form-control order-search" />
      </div>
      </form>
  
    <select class="browser-default custom-select order-select">
    <option selected>10</option>
    <option value="1">15</option>
    <option value="2">20</option>
    <option value="3">50</option>
  </select>
  
      <table id="dtBasicExample" class="table table-striped table-bordered table-product" cellspacing="0" 
      
      >
        <thead class="thead-dark">
          <tr>
            <th class="th-sm">Image
            </th>
            <th class="th-sm">SKU
            </th>
            <th class="th-sm">Product Name
            </th>
            <th class="th-sm">Product Category
            </th>
            <th class="th-sm">Price
            </th>
            <th class="th-sm">Qty
            </th>
            <th class="th-sm">Store
            </th>
            <th class="th-sm">Added By
            </th>
            <th class="th-sm">Date Added
            </th>
            <th class="th-sm">Availability
            </th>
            <th class="th-sm">Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td></td>
          <td>jumber green big</td>
          <td>jumber </td>
          <td>cloth </td>
          <td>800</td>
          <td>8</td>
          <td>Store 1</td>
          <td>james</td>
          <td>8-2-2019</td>
          <td>Active</td>
          <td><button type="button" class="btn btn-primary btn-xs btn-edit-del"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-danger btn-xs btn-edit-del"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
          <tr>
          <td></td>
          <td>jumber green big</td>
          <td>jumber </td>
          <td>cloth </td>
          <td>800</td>
          <td>8</td>
          <td>Store 1</td>
          <td>james</td>
          <td>8-2-2019</td>
          <td>Active</td>
          <td><button type="button" class="btn btn-primary btn-xs btn-edit-del"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-danger btn-xs btn-edit-del"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
          <tr>
          <td></td>
          <td>jumber green big</td>
          <td>jumber </td>
          <td>cloth </td>
          <td>800</td>
          <td>8</td>
          <td>Store 1</td>
          <td>james</td>
          <td>8-2-2019</td>
          <td>Active</td>
          <td><button type="button" class="btn btn-primary btn-xs btn-edit-del"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-danger btn-xs btn-edit-del"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
         </tbody>
      </table>
      </div>
  
      {/* user management  */}
      <div role="tabpanel" class="tab-pane user-manage-div active" id="addpro">
      <form class="form-container">
      <fieldset class="scheduler-border">
      <legend class="scheduler-border">Add Products</legend>
      <table class="table table-borderless" style={{width:600}}>
      <thead>
        <tr>
          <th  scope="col" hidden="true"></th>
          <th  scope="col" hidden="true"></th>
          <th  scope="col" hidden="true"></th>
          <th  scope="col" hidden="true"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td><label for="email " class="label-size">Product Name:</label></td>
          <td><input type="email" class="form-control input-size" id="email"/></td>
          <td><label for="email " class="label-size">Product Code:</label></td>
          <td><input type="email" class="form-control input-size" id="email"/></td>
        </tr>
      
        <tr>
        <td><label for="email" class="label-size">SKU:</label></td>
        <td><input type="email" class="form-control input-size" id="email"/></td>
        <td><label for="email" class="label-size">Price:</label></td>
        <td><input type="email" class="form-control input-size" id="email"/></td> 
        </tr>
        
        <tr>
        <td><label for="email" class="label-size">Qantity:</label></td>
        <td><input type="email" class="form-control input-size" id="email"/></td>
        <td><label for="email" class="label-size">Color:</label></td>
        <td><input type="email" class="form-control input-size" id="email"/></td>
          
        </tr>
        
  
        <tr>
        <td><label for="email" class="label-size">Size:</label></td>
        <td><input type="email" class="form-control input-size" id="email"/></td>
        <td><label for="email" class="label-size">Brands:</label></td>
        <td>
        <select class="selectpicker " data-style="btn border" data-show-subtext="true" data-live-search="true">
        <option data-subtext="" >Select brand</option>
        <option data-subtext="">Nokia</option>
        <option data-subtext="">Samsung</option>
        <option data-subtext="">Google pixel</option>
        <option data-subtext="">Iphone</option>
        <option data-subtext="">other</option>
       
      </select>
        </td>
          
        </tr>
      
        <tr>
        <td><label for="email" class="label-size">Category:</label></td>
        <td>
        <select class="selectpicker " data-style="btn border" data-show-subtext="true" data-live-search="true">
        <option data-subtext="" >Select Category</option>
        <option data-subtext="">big</option>
        <option data-subtext="">small</option>
        <option data-subtext="">xsmall</option>
        <option data-subtext="">xbig</option>
        <option data-subtext=""></option>
       
        </select>
        </td>
        <td><label for="email" class="label-size">Store:</label></td>
        <td>
        <select class="selectpicker " data-style="btn border " data-show-subtext="true" data-live-search="true">
        <option data-subtext="" >Select Store</option>
        <option data-subtext="">store1</option>
        <option data-subtext="">store2</option>
        <option data-subtext="">store3</option>
        <option data-subtext="">store4</option>
        <option data-subtext="">store5</option>
       
      </select>
        </td>
        </tr>
        
        <tr>
        <td><label for="description" class="label-size">Description:</label></td>
        <td><input type="text" class="form-control input-size input-description" id="email"/></td>
        <td><label for="email" class="label-size">Availability:</label></td>
        <td>
        <select class="selectpicker " data-style="btn border" data-show-subtext="true" data-live-search="true">
        <option data-subtext="" >Select availability</option>
        <option data-subtext="">Active</option>
        <option data-subtext="">Inactive</option>
        
       
      </select>
        </td>
        </tr>
        
        <tr>
        <td></td>
        <td>
        <button  class="btn btn-primary btn-raised btn-padding" ><i class="fas fa-archive " style={{marginRight:5}}></i>Save</button>
        <button  class="btn btn-warning btn-raised btn-padding" ><i class="fas fa-arrow-left" style={{marginRight:5}}></i>Back</button>
        </td>
        
        </tr>
      </tbody>
    </table>
    </fieldset>
      </form> 
      </div>
      
    </div>
      </div>
    )
  }
}
export default Products;