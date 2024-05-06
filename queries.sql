CREATE TABLE book_items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

INSERT INTO book_items (title) VALUES ('Ego Is the Enemy - by Ryan Holiday'), ('The Wisdom of No Escape - by Pema Chödrön'), ('Philosophy: a Complete Introduction - by Sharon Kaye')