from pydantic import BaseModel
from datetime import datetime


class ReviewBase(BaseModel):
    user_id:int
    product_id:int
    description:str

class ReviewCreate(ReviewBase):
    created_at:datetime

class ReviewEdit(BaseModel):
    description:str
    edited_at:datetime
