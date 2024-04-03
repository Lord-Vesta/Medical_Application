CREATE database medical
use medical

CREATE table
    CredentialData (
        Email varchar(50),
        passwords varchar(50),
        UserId int IDENTITY (1, 1) PRIMARY KEY
    )
CREATE TABLE
    personalInfo (
        firstName varchar(50),
        secondName varchar,
        MobileNumber bigint,
        DateOfBirth datetime,
        age int,
        weight float,
        height varchar,
        BMI float,
        countryOfOrigin varchar,
        diabetes BIT,
        cardiac BIT,
        bloodPressure BIT,
        diseaseTypeandDescription varchar
    )
CREATE TABLE
    FamilyData (
        FathersName varchar,
        FathersAge int,
        FathersCountry varchar,
        MothersName varchar,
        diabetic BIT,
        cardiac BIT,
        bloodPressure BIT
    )
create TABLE
    docs (
        aadharFront varchar,
        aadharBack varchar,
        insuranceFront varchar,
        insuranceBack varchar
    )
select
    *
from
    docs
select
    *
from
    FamilyData
select
    *
from
    personalInfo
select
    *
from
    CredentialData