-- QUIZ


--1. Select the code which produces this table:
--  ============================
--  | name	      | population |
--  ----------------------------
--  | Bahrain	  | 1234571    |
--  | Swaziland	  | 1220000    |
--  | Timor-Leste | 1066409    |
--  ============================

SELECT name, population
FROM world
WHERE population BETWEEN 1000000 AND 1250000

-- 2. Pick the result you would obtain from this code:
SELECT name, population
FROM world
WHERE name LIKE "Al%"

--  =========================
--  | name	   | population |
--  -------------------------
--  | Albania	 | 3200000    |
--  | Algeria	 | 32900000   |
--  =========================

-- 3. Select the code which shows the countries that end in A or L
SELECT name
FROM world
WHERE name LIKE '%a' OR name LIKE '%l';

-- 4. Pick the result from the query
SELECT name, length(name)
FROM world
WHERE length(name)=5 AND region='Europe';

--  =========================
--  | name	 | length(name) |
--  -------------------------
--  | Italy	 | 5            |
--  | Malta	 | 5            |
--  | Spain	 | 5            |
--  =========================

-- 5. 
-- ===================================================================
--  | name	      |   region    | area    | population | gdp         |
--  -----------------------------------------------------------------|
--  | Afghanistan | South Asia  | 652225  | 26000000   |             |
--  | Albania  	  | Europe      | 28728   | 3200000    | 6656000000  |
--  | Algeria     | Middle East | 2400000 | 32900000   | 75012000000 |
--  | Andorra     | Europe      | 468     | 64000      |             |
--  ==================================================================
    SELECT name, area*2 FROM world WHERE population = 64000

-- ANSWER: Andorra | 936

-- 6. Select the code that would show the countries with an area larger than 50000 and a population smaller than 10000000

SELECT name, area, population
FROM world
WHERE area > 50000 AND population < 10000000

-- 7. Select the code that shows the population density of China, Australia, Nigeria and France
SELECT name, population/area
FROM world
WHERE name IN ('China', 'Nigeria', 'France', 'Australia')

-- BBC QUIZ (https://sqlzoo.net/wiki/BBC_QUIZ)

-- 1. Select the code which gives the name of countries beginning with U
SELECT name
FROM world 
WHERE name LIKE 'U%'

-- 2. Select the code which shows just the population of United Kingdom?
SELECT population
FROM world
WHERE name = 'United Kingdom'

-- 3. Select the answer which shows the problem with this SQL code - the intended result should be the continent of France:
SELECT continent
FROM world
WHERE 'name' = 'France'
-- 'name' should be name

-- 4. Select the result that would be obtained from the following code:
SELECT name, population/10
FROM world
WHERE population < 10000

-- Nauru | 990

-- 5. Select the code which would reveal the name and population of countries in Europe and Asia
SELECT name, population
FROM world
WHERE continent IN ('Europe', 'Asia')

-- 6. Select the code which would give two rows
SELECT name FROM world
WHERE name IN ('Cuba', 'Togo')

-- 7. Select the result that would be obtained from this code:
SELECT name FROM world
WHERE continent = 'South America'
AND population > 40000000

-- Brazil
-- Colombia