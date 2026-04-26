from sqlalchemy import Column, Integer, String, Date, ForeignKey, Enum
from sqlalchemy.orm import relationship
from database import Base
import enum

class EmployeeStatus(str, enum.Enum):
    ACTIVE = "Active"
    TERMINATED = "Terminated"

class Department(Base):
    __tablename__ = "departments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)

    employees = relationship("Employee", back_populates="department")


class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    phone = Column(String, nullable=True)
    address = Column(String, nullable=True)
    status = Column(Enum(EmployeeStatus), default=EmployeeStatus.ACTIVE)
    
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=True)
    
    department = relationship("Department", back_populates="employees")
    contracts = relationship("Contract", back_populates="employee")


class Contract(Base):
    __tablename__ = "contracts"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id"))
    sign_date = Column(Date)
    expiration_date = Column(Date)
    
    employee = relationship("Employee", back_populates="contracts")
