import React from 'react';
import "../../assets/css/tabs-css/groups.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "bootstrap-select/dist/js/bootstrap-select.min.js";

class Groups extends React.Component{
  render(){
    return(
      <div className="group-main">
    <ul class="nav nav-tabs group" role="tablist">
    <li class="nav-item">
    <a class="nav-link active " href="#managegroup" role="tab" data-toggle="tab"><i class="fas fa-dot-circle"></i>&nbsp;Add Grps</a>
    </li>
    <li class="nav-item">
      <a class="nav-link  size" href="#addgroup" role="tab" data-toggle="tab"><i class="fas fa-dot-circle"></i>&nbsp;Manage Grps</a>
    </li>
   
    
  </ul>
  
  <div class="tab-content">
    {/*add group*/}
    <div role="tabpanel" class="tab-pane " id="addgroup">
    
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
      <th class="th-sm">Group Name
      </th>
      <th class="th-sm">Create
      </th>
      <th class="th-sm">Update
      </th>
      <th class="th-sm">View
      </th>
      <th class="th-sm">Delete
      </th>
      <th class="th-sm">Action
      </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Staff</td>
    <td><i class="fas fa-check"></i></td>
    <td><i class="fas fa-check"></i></td>
    <td><i class="fas fa-check"></i></td>
    <td><i class="fas fa-times"></i></td>
    <td><button type="button" class="btn btn-primary btn-xs btn-edit-del"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-danger btn-xs btn-edit-del"><i class="fas fa-trash-alt"></i></button></td>
    </tr>
    <tr>
      <td>Admin</td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
      <td><button type="button" class="btn btn-primary btn-xs btn-edit-del"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-danger btn-xs btn-edit-del"><i class="fas fa-trash-alt"></i></button></td>
    </tr>
    <tr>
      <td>Other</td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-times"></i></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-times"></i></td>
      <td><button type="button" class="btn btn-primary btn-xs btn-edit-del"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-danger btn-xs btn-edit-del"><i class="fas fa-trash-alt"></i></button></td>
    </tr>
   </tbody>
  
</table>
    </div>
    {/*manage group*/}
   <div role="tabpanel" class="tab-pane active" id="managegroup">
   <div class="form-group">
    <label for="exampleFormControlSelect1" class="group_name">Group Name:</label>
    
      <select class="selectpicker  group-select" data-style="btn border" data-show-subtext="true" data-live-search="true" style={{position:'relative',left:'15px'}}>
      <option data-subtext="">Select group </option>  
        <option data-subtext="">staff</option>
        <option data-subtext="">admin</option>
        <option data-subtext="">seller</option>
        <option data-subtext="">manager</option>
        <option data-subtext="">other</option>
         
         
        </select>
  </div>  
   
   <label for="exampleInputEmail1" class="group_name">Permission:</label>
  <table class="table table-striped table-manage-group" >
  <thead class="thead-dark">
    <tr>
      <th scope="col">Properties</th>
      <th scope="col">Create</th>
      <th scope="col">Update</th>
      <th scope="col">View</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Users</td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="create1"/>
      <label class="custom-control-label" for="create1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="update1"/>
      <label class="custom-control-label" for="update1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="view1"/>
      <label class="custom-control-label" for="view1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="delete1"/>
      <label class="custom-control-label" for="delete1"></label>
       </div>
      </td>
     
    </tr>
    <tr>
      
      <td>Group</td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="create1"/>
      <label class="custom-control-label" for="create1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="update1"/>
      <label class="custom-control-label" for="update1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="view1"/>
      <label class="custom-control-label" for="view1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="delete1"/>
      <label class="custom-control-label" for="delete1"></label>
       </div>
      </td>
     
    </tr>
    <tr>
      
      <td>Brand</td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="create1"/>
      <label class="custom-control-label" for="create1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="update1"/>
      <label class="custom-control-label" for="update1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="view1"/>
      <label class="custom-control-label" for="view1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="delete1"/>
      <label class="custom-control-label" for="delete1"></label>
       </div>
      </td>
     
    </tr>
    <tr>
      
      <td>Category</td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="create1"/>
      <label class="custom-control-label" for="create1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="update1"/>
      <label class="custom-control-label" for="update1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="view1"/>
      <label class="custom-control-label" for="view1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="delete1"/>
      <label class="custom-control-label" for="delete1"></label>
       </div>
      </td>
     
    </tr>
    <tr>
      
    <td>Store</td>
    <td> 
    <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="create1"/>
    <label class="custom-control-label" for="create1"></label>
     </div>
    </td>
    <td> 
    <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="update1"/>
    <label class="custom-control-label" for="update1"></label>
     </div>
    </td>
    <td> 
    <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="view1"/>
    <label class="custom-control-label" for="view1"></label>
     </div>
    </td>
    <td> 
    <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="delete1"/>
    <label class="custom-control-label" for="delete1"></label>
     </div>
    </td>
   
  </tr>
  <tr>
      
      <td>Attribute</td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="create1"/>
      <label class="custom-control-label" for="create1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="update1"/>
      <label class="custom-control-label" for="update1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="view1"/>
      <label class="custom-control-label" for="view1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="delete1"/>
      <label class="custom-control-label" for="delete1"></label>
       </div>
      </td>
     
    </tr>
    <tr>
      
      <td>Products</td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="create1"/>
      <label class="custom-control-label" for="create1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="update1"/>
      <label class="custom-control-label" for="update1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="view1"/>
      <label class="custom-control-label" for="view1"></label>
       </div>
      </td>
      <td> 
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="delete1"/>
      <label class="custom-control-label" for="delete1"></label>
       </div>
      </td>
     
    </tr>
    <tr>
      
      
     
    </tr>
  </tbody>
</table>
   <button  class="btn btn-primary btn-raised " style={{position:'relative',left:'55px'}}><i class="fas fa-archive " style={{marginRight:5}}></i>Save</button>
   <button  class="btn btn-warning btn-raised " style={{position:'relative',left:'65px'}}><i class="fas fa-arrow-left" style={{marginRight:5}}></i>Back</button>
   </div>

  </div>
  {/* add group here */}
  
  </div>
    )
  }
}
 
  export default Groups;