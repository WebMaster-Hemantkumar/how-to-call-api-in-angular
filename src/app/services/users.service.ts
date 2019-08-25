import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

getDetails(){
  return [
{Name:"Hemant",Mobile:"9205262451",class:"M.tech"},
{Name:"Roma",Mobile:"9205262451",class:"MCA"},
{Name:"Sapna",Mobile:"9205262452",class:"BCA"},
{Name:"Pooja",Mobile:"9205262453",class:"MBA"},
{Name:"shalni",Mobile:"9205262456",class:"MS"},
{Name:"riyaz",Mobile:"9205262459",class:"MCA"},
  ];
}
}
