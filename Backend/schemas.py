from pydantic import BaseModel
from datetime import date
from typing import List, Optional
from models import EmployeeStatus

# Department Schemas
class DepartmentBase(BaseModel):
    name: str
    description: Optional[str] = None

class DepartmentCreate(DepartmentBase):
    pass

class Department(DepartmentBase):
    id: int

    class Config:
        from_attributes = True

# Contract Schemas
class ContractBase(BaseModel):
    sign_date: date
    expiration_date: date

class ContractCreate(ContractBase):
    employee_id: int

class Contract(ContractBase):
    id: int
    employee_id: int

    class Config:
        from_attributes = True

# Employee Schemas
class EmployeeBase(BaseModel):
    name: str
    phone: Optional[str] = None
    address: Optional[str] = None
    department_id: Optional[int] = None

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeUpdate(BaseModel):
    phone: Optional[str] = None
    address: Optional[str] = None
    department_id: Optional[int] = None

class Employee(EmployeeBase):
    id: int
    status: EmployeeStatus
    contracts: List[Contract] = []
    
    class Config:
        from_attributes = True
