from pydantic import BaseModel
from typing import List
import enum


class Login(BaseModel):
    password: str
    email: str


class ProfileBase(BaseModel):
    username: str
    email: str

    class Config:
        orm_mode = True


class ProfileCreate(ProfileBase):
    password: str
    gender: str


class ProfileUpdate(ProfileCreate):
    details: str
    language: str
    height: int
    smoker: bool


# Security
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str = None
