from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.review_schema import ReviewCreate, ReviewEdit
from app.core.db import get_session
from app.models.review_models import Review
from datetime import datetime
from sqlmodel import select

router = APIRouter(prefix="/reviews")

#Add Review
@router.post("/products/{product_id}", status_code=status.HTTP_201_CREATED)
def add_review(product_id: int, data: ReviewCreate, session=Depends(get_session)):
    review = Review(
        product_id=product_id,
        user_id=data.user_id,
        description=data.description,
        created_at=datetime.utcnow(),
    )
    session.add(review); session.commit(); session.refresh(review)
    return {"status": "Review created successfully"}


#Edit Review
@router.put("/users/{user_id}/{review_id}")
def edit_review(user_id: int, review_id: int, data: ReviewEdit, session=Depends(get_session)):
    review = session.get(Review, review_id)
    if not review or review.user_id != user_id:
        raise HTTPException(status_code=404, detail="Review not found")
    review.description = data.description; review.edited_at = datetime.utcnow()
    session.add(review); session.commit(); session.refresh(review)
    return {"status": "Review edited successfully"}

#Delete Review
@router.delete("/users/{user_id}/{review_id}", status_code=status.HTTP_200_OK)
def delete_review(user_id: int, review_id: int, session=Depends(get_session)):
    review = session.get(Review, review_id)
    if not review or review.user_id != user_id:
        raise HTTPException(status_code=404, detail="Review not found")
    session.delete(review); session.commit()
    return {"status": "Review deleted successfully"}

#Show Reviews by product
@router.get("/products/{product_id}")
def show_product_reviews(product_id: int, session=Depends(get_session)):
    reviews = session.exec(select(Review).where(Review.product_id == product_id)).all()
    if not reviews:
        raise HTTPException(status_code=404, detail=f"No reviews for product {product_id}")
    return reviews

#Show Review by Users
@router.get("/users/{user_id}")
def show_user_reviews(user_id: int, session=Depends(get_session)):
    reviews = session.exec(
        select(Review).where(Review.user_id == user_id)
    ).all()
    if not reviews:
        raise HTTPException(status_code=404, detail=f"No reviews for user {user_id}")
    return reviews
