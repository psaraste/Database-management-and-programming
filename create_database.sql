-- Active: 1732714575720@@127.0.0.1@5432@postgres@public

CREATE TABLE User_(
    user_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_name VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    year_of_birth SMALLINT
);



CREATE TABLE Favorite(
    favorite_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id int REFERENCES User_(user_id),
    movie_id int REFERENCES Movie(movie_id)
);



CREATE TABLE Review(
    review_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    stars SMALLINT CHECK (stars >= 0 AND stars <= 5),
    review_text TEXT,
    movie_id int REFERENCES Movie(movie_id),
    user_id int REFERENCES User_(user_id)
);



CREATE TABLE Movie(
    movie_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    movie_name VARCHAR(255),
    publishing_year SMALLINT,
    genre_id int REFERENCES Genre(genre_id)
);



CREATE TABLE Genre(
    genre_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    genre_name VARCHAR(255) NOT NULL
);
