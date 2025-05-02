from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from init_db import init_db
from app.controllers import user_controllers
from app.controllers import product_controllers


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(title="UniMart API", lifespan=lifespan)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_controllers.router)
app.include_router(product_controllers.router)


@app.get("/")
def home():
    return {"message": "Welcome to UniMart API"}
