import React from 'react';
import "../css/tabs-css/brand.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../font-awsome/fontawesome-free-5.9.0-web/css/all.min.css";


class Brands extends React.Component{
  render(){
    return(
      <div className="brand-main">
    
<button type="button" class="btn btn-primary group-button btn-raised"><i class="fas fa-plus-square" style={{marginRight:5}}></i>Add Brand</button>
<form action="" class="navbar-form navbar-right search-form">
   <div class="input-group">
       <input type="Search" placeholder="Search..." class="form-control" />
      
   </div>
</form>
<select class="browser-default custom-select select-position">
  <option selected>10</option>
  <option value="1">15</option>
  <option value="2">20</option>
  <option value="3">50</option>
</select>

    <table id="dtBasicExample" class="table table-striped table-bordered table-add-group" cellspacing="0" width="100%">
      <thead class="thead-dark">
        <tr>
          <th class="th-sm">Brand
          </th>
          <th class="th-sm">Status
          </th>
          <th class="th-sm">Action
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>DELL</td>
        <td>Active</td>
        <td><button type="button" class="btn btn-primary btn-xs btn-edit-del center-block"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-danger btn-xs btn-edit-del"><i class="fas fa-trash-alt"></i></button></td>
        </tr>
        <tr>
          <td>HP</td>
          <td>Active</td>
          <td><button type="button" class="btn btn-primary btn-xs btn-edit-del"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-danger btn-xs btn-edit-del"><i class="fas fa-trash-alt"></i></button></td>
        </tr>
        <tr>
          <td>MAC</td>
          <td>Active</td>
          <td><button type="button" class="btn btn-primary btn-xs btn-edit-del"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-danger btn-xs btn-edit-del"><i class="fas fa-trash-alt"></i></button></td>
        </tr>
       </tbody>
     </table>
    </div>

    )
  }
}
 
export default Brands;