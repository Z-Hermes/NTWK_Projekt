
# Albania Municipalities Database

## Overview
This project is a SQL-based database and API system that provides structured data about 26 major municipalities (bashki) in Albania.

It was developed as a learning project to demonstrate database design, SQL queries, backend API development, environment variable handling, and deployment using modern tools.

## Dataset Description
The database contains key information about each municipality, including population, area, region, mayor, political party, and postal code.

The dataset focuses on the most important municipalities in Albania based on population size and administrative relevance.

## Database Schema

Table: municipalities

- id (INT, Primary Key): Unique identifier  
- name (VARCHAR): Municipality name  
- population (INT): Number of inhabitants  
- area (DECIMAL): Area in square kilometers  
- region (VARCHAR): North, Central, or South  
- mayor (VARCHAR): Current mayor  
- party (VARCHAR): Political party  
- postal_code (VARCHAR): Postal code  

## Data Model

municipalities
--------------
id (PK)
name
population
area
region
mayor
party
postal_code

## API

POST /api/events

Creates a new event. This route is protected and requires authentication.

Headers:
Authorization: Basic <base64(username:password)>

Body:
{
  "title": "Event Name",
  "date": "2026-01-01"
}

Response:
{
  "id": 1,
  "title": "Event Name",
  "date": "2026-01-01"
}

## Authentication
The API uses Basic Authentication. Credentials are stored in a .env file.

Example:
API_USER=admin
API_PASS=yourpassword

Do not commit the .env file to version control.

## Project Structure

project-root/
│
├── src/
│   ├── routes/
│   │   └── api/
│   │       └── events/
│   │           └── +server.js
│   ├── lib/
│   │   └── db.js
│
├── static/
├── .env
├── package.json
└── README.md

## Example SQL Queries

Top 5 municipalities by population:
SELECT * FROM municipalities
ORDER BY population DESC
LIMIT 5;

Municipalities in the North:
SELECT * FROM municipalities
WHERE region = 'North';

Largest municipality by area:
SELECT * FROM municipalities
ORDER BY area DESC
LIMIT 1;

## Deployment

To deploy using Vercel:

1. Push the project to GitHub
2. Import the repository into Vercel
3. Add environment variables (API_USER, API_PASS)
4. Deploy the project

## Purpose
This project is intended for learning and demonstrating basic backend development, SQL database usage, and API creation.

## Disclaimer
The data used in this project is approximate and intended for educational purposes only.

## License
MIT License