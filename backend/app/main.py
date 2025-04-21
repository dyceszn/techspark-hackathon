from fastapi import FastAPI
from contextlib import asynccontextmanager
from init_db import init_db
from app.controllers import user_controllers


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(title="UniMart API", lifespan=lifespan)
app.include_router(user_controllers.router)


@app.get("/")
def home():
    return {"message": "Welcome to UniMart API"}
