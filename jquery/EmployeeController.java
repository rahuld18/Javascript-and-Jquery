package controller;

import java.sql.Connection;

import model.Employees;

public class EmployeeController
 {
public static boolean addNewRecord(Employees E)
{ try{
  Connection cn=DbHelper.openConnection();
  String query="insert into employees(employeename,fname,dob,gender,permanentaddress,pstate,pcity,currentaddress,cstate,ccity,contactno,mobileno,emailid,qualification,designation,basicsalary,password,photograph)values('"+E.getEmployeename()+"','"+E.getFname()+"','"+E.getDob()+"','"+E.getGender()+"','"+E.getPermanentaddress()+"','"+E.getPstate()+"','"+E.getPcity()+"','"+E.getCurrentaddress()+"','"+E.getCstate()+"','"+E.getCcity()+"','"+E.getContactno()+"','"+E.getMobileno()+"','"+E.getEmailid()+"','"+E.getQualification()+"','"+E.getDesignation()+"','"+E.getBasicsalary()+"','"+E.getPassword()+"','"+E.getPhotograph()+"')";
 boolean st=DbHelper.executeUpdate(cn, query);
 return(st);
  
}
catch(Exception e)
	{
	System.out.println("Error:addNewRecord()"+e);
	}
return(false);
	
}
}
