import React from 'react';
import "../css/tabs-css/backup.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../font-awsome/fontawesome-free-5.9.0-web/css/all.min.css";

//
const electron = window.require('electron');
const ipcRenderer=electron.ipcRenderer;
 const Backup = () => (
 <div className="backup-main">
    
 <form class="form-container ">
 <fieldset class="scheduler-border">
 <legend class="scheduler-border">Backup Information</legend>
 <table class="table table-borderless" style={{width:580}}>
 <thead>
   <tr>
     <th  scope="col" hidden="true"></th>
     <th  scope="col" hidden="true"></th>
    
   </tr>
 </thead>
 <tbody>
 <tr>
 <td><label for="email" class="label-size">Email:</label></td>
 <td><input type="email" class="form-control input-size" id="email" placeholder="E.g:mycompany@gmail.com"/></td>
  
 </tr>
 
   
 <tr>
 <td><label for="email" class="label-size">Password:</label></td>
 <td><input type="password" class="form-control input-size"   placeholder="E.g:password"/></td>
   
 </tr>
   
   <tr>
   <td><label for="email" class="label-size">Backup Name:</label></td>
   <td><input type="text" class="form-control input-size" id="email" placeholder="E.g:2018-Backup"/></td>
     
   </tr>
  
   <tr>
  
   <td>
   <button  class="btn btn-primary btn-raised btn-padding" ><i class="fas fa-cloud " style={{marginRight:5}}></i>Backup</button>
   <button  class="btn btn-primary btn-raised btn-padding" ><i class="fas fa-archive " style={{marginRight:5}}></i>Restore</button>
   <button  class="btn btn-warning btn-raised btn-padding" ><i class="fas fa-arrow-left" style={{marginRight:5}}></i>Back</button>
   </td>
   
   </tr>
 </tbody>
</table>
</fieldset>
 </form> 

 </div>

  );
 
  export default Backup;