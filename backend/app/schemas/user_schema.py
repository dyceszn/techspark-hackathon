from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class UserBase(BaseModel):
    fullname: str
    email: str
    is_seller: bool


class UserCreate(UserBase):
    password: str
    phone_number: str
    default_address: str
    business_name: Optional[str] = None
    business_description: Optional[str] = None


class UserLogin(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    user_id: int
    email: str
    is_seller: bool
    customer_id: Optional[int] = None
    seller_id: Optional[int] = None
    created_at: datetime


class TokenResponse(BaseModel):
    user_id: int
    is_seller:bool
    #role: str
