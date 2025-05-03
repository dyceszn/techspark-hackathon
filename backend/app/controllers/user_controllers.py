from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.user_schema import UserCreate, UserResponse, UserLogin, TokenResponse
from app.models.cart_model import Cart
from passlib.context import CryptContext
from app.core.db import get_session
from app.models.user_model import User, Customer, Seller
from sqlmodel import select

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@router.post("/users/register", response_model=UserResponse)
def create_user(user_data: UserCreate, session=Depends(get_session)):
    hashed_password = pwd_context.hash(user_data.password)
    new_user = User(
        fullname=user_data.fullname,
        email=user_data.email,
        password_hash=hashed_password,
        default_address=user_data.default_address,
        is_seller=user_data.is_seller,
    )
    session.add(new_user)
    session.commit()
    session.refresh(new_user)

    response_data = UserResponse(
        user_id=new_user.id,
        email=new_user.email,
        is_seller=user_data.is_seller,
        created_at=new_user.created_at
    )

    if not user_data.is_seller:
        new_customer = Customer(
            user_id=new_user.id,
            phone_number=user_data.phone_number
        )
        session.add(new_customer)
        session.commit()
        session.refresh(new_customer)
        response_data.customer_id = new_customer.id


        #Adding Cart.
        new_cart = Cart(user_id=new_user.id) 
        session.add(new_cart)
        session.commit()
        session.refresh(new_cart)
        
    else:
        new_seller = Seller(
            user_id=new_user.id,
            business_name=user_data.business_name,
            business_description=user_data.business_description,
            contact_phone=user_data.phone_number
        )
        session.add(new_seller)
        session.commit()
        session.refresh(new_seller)
        response_data.seller_id = new_seller.id

    return response_data


@router.post("/users/login", response_model=TokenResponse)
def login_user(user_data: UserLogin, session=Depends(get_session)):
    stmt = select(User).where(User.email == user_data.email)
    user = session.exec(stmt).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not pwd_context.verify(user_data.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    return TokenResponse(user_id=user.id, is_seller=user.is_seller)
