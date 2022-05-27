DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (id VARCHAR(40), name text, email text, password text);

CREATE TABLE address (id VARCHAR(40), line1 text, line2 text, city text, state text, zip text, phone VARCHAR(13));

CREATE TABLE billing (id VARCHAR(40), credit text, expiry text, cvv text, zip text);

