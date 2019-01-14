# [Tries: Contacts](https://www.hackerrank.com/challenges/ctci-contacts/problem)

Check out the resources on the page's right side to learn more about tries. The video tutorial is by Gayle Laakmann McDowell, author of the best-selling interview book Cracking the Coding Interview.

We're going to make our own Contacts application! The application must perform two types of operations:

1. add name, where is a string denoting a contact name. This must store as a new contact in the application.
2. find partial, where is a string denoting a partial name to search the application for. It must count the number of contacts starting with and print the count on a new line.
   Given sequential add and find operations, perform each operation in order.

### Input Format

The first line contains a single integer, , denoting the number of operations to perform.
Each line of the subsequent lines contains an operation in one of the two forms defined above.

### Constraints

- 1 <= n <= 10<sup>5</sup>
- 1 <= |_name_| <= 21
- 1 <= |_partial_| <= 21
- It is guaranteed that and contain lowercase English letters only.
- The input doesn't have any duplicate for the operation.

### Output Format

For each find `partial` operation, print the number of contact names starting with on a new line.

### Sample Input

```
4
add hack
add hackerrank
find hac
find hak
```

### Sample Output

```
2
0
```

### Explanation

We perform the following sequence of operations:

1. Add a contact named hack.
2. Add a contact named hackerrank.
3. Find and print the number of contact names beginning with hac. There are currently two contact names in the application and both of them start with hac, so we print on a new line.
4. Find and print the number of contact names beginning with hak. There are currently two contact names in the application but neither of them start with hak, so we print on a new line.


----------------------
## Solution:

```js

```