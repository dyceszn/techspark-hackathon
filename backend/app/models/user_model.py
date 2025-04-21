from sqlmodel import SQLModel, Field
from datetime import datetime
from sqlalchemy.sql import func
from typing import Optional


# User Table
class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    fullname: str
    email: str
    password_hash: str
    role: str
    created_at: datetime = Field(
        sa_column_kwargs={"server_default": func.now()},
        nullable=False
    )


# Customer Table
class Customer(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    phone_number: str
    # address_id: int = Field(foreign_key="address.id")


# Seller Table
class Seller(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    business_name: str
    business_description: str
    contact_phone: str
    created_at: datetime = Field(
        sa_column_kwargs={"server_default": func.now()},
        nullable=False
    )


# class Address(SQLModel, table=True):
#     id: int = Field(primary_key=True)
#     customer_id: int = Field(primary_key=True, foreign_key="customer.id")
#     hostel: str
