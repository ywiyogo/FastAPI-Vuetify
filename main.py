# Base FastAPI Platform
from fastapi import FastAPI, Request, Depends, BackgroundTasks, HTTPException, status
from pydantic import BaseModel
from enum import Enum

# Database
import models
import schemas
from database import SessionLocal, engine
from sqlalchemy.orm import Session

# For allowing accessing the data from Vue App
from fastapi.middleware.cors import CORSMiddleware

# Security
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import jwt
from jwt import PyJWTError
from passlib.context import CryptContext
from datetime import datetime, timedelta





# JWT
# replace the secret key with the output of `openssl rand -hex 32`
SECRET_KEY = "47eefvueed944c5javascript019f7fastapi336248a5d20569yongkiewiyogo"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 5
# =======

# Security: OAuth and passlib functions
# ===========================#
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# FastAPI App main
app = FastAPI()
models.Base.metadata.create_all(bind=engine)
# CORS section
# ===========================
# Do not use http://localhost!
origins = [
    "http://127.0.0.1",
    "http://127.0.0.1:8080",
    "http://localhost",
    "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def verify_password(plain_password, hashed_password):
    res = pwd_context.verify(plain_password, hashed_password)

    return res


def get_password_hash(password):
    hashed_pass = pwd_context.hash(password)
    return hashed_pass


def authenticate_user(email: str, password: str):
    db = SessionLocal()
    user = db.query(
        models.Profile).filter(models.Profile.email == email).first()
    if not user:
        return False
    if not verify_password(password, user.hashed_passwd):
        print("Debug password cannot be verified")
        return False
    return user


# Security: JWT functions
# =======================
def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: str = Depends(oauth2_scheme)):
    """token is access_token in login function"""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])

        email: str = payload.get("sub")

        if email is None:
            raise credentials_exception
    except PyJWTError:
        raise credentials_exception

    db = SessionLocal()
    user = db.query(
        models.Profile).filter(models.Profile.email == email).first()
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(
        current_user: models.Profile = Depends(get_current_user)):
    if current_user.membership is models.Membership.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


@app.post("/login")  #must be the same endpoint as in OAuth2PasswordBearer
async def login_for_access_token(
        form_data: OAuth2PasswordRequestForm = Depends()):
    # OAuth form data has username, but the frontend passes the email
    print("debug2")
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    # the sub key should have a unique identifier across the entire application
    # and it should be a string.
    access_token = create_access_token(data={"sub": user.email},
                                       expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}


# ======================


# Database Helper function
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# API Endpoints
# ==============
@app.get("/profile/me")
async def read_my_profile(
        current_user: models.Profile = Depends(get_current_user)):
    return current_user


@app.get("/profiles")
async def read_profiles(req: Request,
                        token: str = Depends(get_current_active_user)):

    db = SessionLocal()
    return db.query(models.Profile).all()


@app.get("/")
async def home(req: Request, db: Session = Depends(get_db)):
    profiles = db.query(models.Profile)
    return True


@app.get("/profiles/{profile_id}", response_model=schemas.ProfileBase)
async def read_profiles(req: Request):
    db = SessionLocal()
    return db.query(
        models.Profile).filter(models.Profile.username == profile_id).all()


@app.post("/profile")
def create_profile(profile_req: schemas.ProfileCreate,
                   background_tasks: BackgroundTasks,
                   db: Session = Depends(get_db)):
    """ Create a profile to DB"""
    # create an object of Stock if not exist
    
    profile = db.query(models.Profile).filter(
        models.Profile.email == profile_req.username).first()
    if profile:
        print("Username exists, please choose another username.")
        return false
    profile = db.query(models.Profile).filter(
        models.Profile.email == profile_req.email).first()
    if profile:
        print("Email exists, please choose another email.")
        return false
    # create a new profile
    profile = models.Profile()
    profile.username = profile_req.username
    hashed_password = get_password_hash(profile_req.password)
    profile.hashed_passwd = hashed_password
    profile.email = profile_req.email
    profile.gender = profile_req.gender
    # add to db
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile


@app.put("/profile")
def update_profile(profile_req: schemas.ProfileUpdate,
                   background_tasks: BackgroundTasks,
                   db: Session = Depends(get_db)):

    db = SessionLocal()
    profile = db.query(models.Profile).filter(
        models.Profile.username == profile_req.username).first()
    if profile:
        profile.details = profile_req.details
        fake_hashed_password = get_password_hash(profile_req.password)
        profile.hashed_passwd = fake_hashed_password
        profile.language = profile_req.language
        profile.height = profile_req.height
        profile.smoker = profile_req.smoker
        db.commit()
    else:
        print("Object not found")
    db.close()
    return profile
