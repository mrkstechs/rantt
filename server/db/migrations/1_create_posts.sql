DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL,
    name varchar(255),
    body varchar(255) NOT NULL
);