from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class UserBase(BaseModel):
    fullname: str
    email: str
    role: str


class UserCreate(UserBase):
    password: str
    phone_number: str
    business_name: Optional[str] = None
    business_description: Optional[str] = None


class UserLogin(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    user_id: int
    email: str
    role: str
    customer_id: Optional[int] = None
    seller_id: Optional[int] = None
    created_at: datetime


class TokenResponse(BaseModel):
    user_id: int
    role: str
