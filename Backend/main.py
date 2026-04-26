from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from datetime import date

import models, schemas
from database import SessionLocal, engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="HR Management System API", description="API for managing employees, departments, and contracts")

# Dependency
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- DEPARTMENTS ---

@app.post("/departments/", response_model=schemas.Department, tags=["Departments"])
def create_department(department: schemas.DepartmentCreate, db: Session = Depends(get_db)):
    db_department = db.query(models.Department).filter(models.Department.name == department.name).first()
    if db_department:
        raise HTTPException(status_code=400, detail="Department already registered")
    new_dept = models.Department(**department.model_dump())
    db.add(new_dept)
    db.commit()
    db.refresh(new_dept)
    return new_dept

@app.get("/departments/", response_model=List[schemas.Department], tags=["Departments"])
def get_departments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    departments = db.query(models.Department).offset(skip).limit(limit).all()
    return departments

# --- EMPLOYEES ---

@app.post("/employees/", response_model=schemas.Employee, tags=["Employees"])
def create_employee(employee: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    if employee.department_id:
        db_dept = db.query(models.Department).filter(models.Department.id == employee.department_id).first()
        if not db_dept:
            raise HTTPException(status_code=404, detail="Department not found")
            
    new_emp = models.Employee(**employee.model_dump())
    db.add(new_emp)
    db.commit()
    db.refresh(new_emp)
    return new_emp

@app.get("/employees/", response_model=List[schemas.Employee], tags=["Employees"])
def get_employees(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    employees = db.query(models.Employee).offset(skip).limit(limit).all()
    return employees

@app.get("/employees/{employee_id}", response_model=schemas.Employee, tags=["Employees"])
def get_employee(employee_id: int, db: Session = Depends(get_db)):
    db_emp = db.query(models.Employee).filter(models.Employee.id == employee_id).first()
    if not db_emp:
        raise HTTPException(status_code=404, detail="Employee not found")
    return db_emp

@app.put("/employees/{employee_id}", response_model=schemas.Employee, tags=["Employees"])
def update_employee(employee_id: int, employee_update: schemas.EmployeeUpdate, db: Session = Depends(get_db)):
    db_emp = db.query(models.Employee).filter(models.Employee.id == employee_id).first()
    if not db_emp:
        raise HTTPException(status_code=404, detail="Employee not found")
        
    if employee_update.department_id:
        db_dept = db.query(models.Department).filter(models.Department.id == employee_update.department_id).first()
        if not db_dept:
            raise HTTPException(status_code=404, detail="Department not found")
            
    update_data = employee_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_emp, key, value)
        
    db.commit()
    db.refresh(db_emp)
    return db_emp

@app.patch("/employees/{employee_id}/terminate", response_model=schemas.Employee, tags=["Employees"])
def terminate_employee(employee_id: int, db: Session = Depends(get_db)):
    db_emp = db.query(models.Employee).filter(models.Employee.id == employee_id).first()
    if not db_emp:
        raise HTTPException(status_code=404, detail="Employee not found")
        
    db_emp.status = models.EmployeeStatus.TERMINATED
    db.commit()
    db.refresh(db_emp)
    return db_emp

# --- CONTRACTS ---

@app.post("/contracts/", response_model=schemas.Contract, tags=["Contracts"])
def create_contract(contract: schemas.ContractCreate, db: Session = Depends(get_db)):
    db_emp = db.query(models.Employee).filter(models.Employee.id == contract.employee_id).first()
    if not db_emp:
        raise HTTPException(status_code=404, detail="Employee not found")
        
    if contract.expiration_date <= contract.sign_date:
        raise HTTPException(status_code=400, detail="Expiration date must be after sign date")
        
    new_contract = models.Contract(**contract.model_dump())
    db.add(new_contract)
    db.commit()
    db.refresh(new_contract)
    return new_contract

@app.get("/contracts/", response_model=List[schemas.Contract], tags=["Contracts"])
def get_contracts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    contracts = db.query(models.Contract).offset(skip).limit(limit).all()
    return contracts

@app.get("/contracts/expiring", response_model=List[schemas.Contract], tags=["Contracts"])
def get_expiring_contracts(days: int = 30, db: Session = Depends(get_db)):
    from datetime import date, timedelta
    target_date = date.today() + timedelta(days=days)
    contracts = db.query(models.Contract).filter(
        models.Contract.expiration_date <= target_date,
        models.Contract.expiration_date >= date.today()
    ).all()
    return contracts
