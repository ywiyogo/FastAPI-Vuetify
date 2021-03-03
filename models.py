from sqlalchemy import Column, ForeignKey, String, Numeric, Integer, Boolean, DateTime, Enum
from sqlalchemy.orm import relationship
from database import Base
import enum


class Gender(str, enum.Enum):
    female = "female"
    male = "male"
    others = "others"


class Language(str, enum.Enum):
    english = "English"
    chinese = "Chinese"
    german = "German"
    indonesian = "Indonesian"
    others = "Others"


class Membership(str, enum.Enum):
    disabled = "disabled"
    trial = "trial"
    standard = "standard"


gender_enum = Enum(Gender, name="gender", create_type=False)
language_enum = Enum(Language, name="language", create_type=False)
membership_enum = Enum(Membership, name="membership", create_type=False)


class Profile(Base):
    __tablename__ = "profiles"

    email = Column(String(50), primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_passwd = Column(String)
    details = Column(String(500))
    language = Column(language_enum)
    height = Column(Integer)
    smoker = Column(Boolean)
    confirmation_time = Column(DateTime)
    membership = Column(membership_enum)
