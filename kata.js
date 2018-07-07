/* IS IT A NUMBER?
Given a string s, write a method (function) that will return 
true if its a valid single integer or floating number or false if its not. */
    // 1. Use isNaN to check string
    
function isDigit(s) {
    if(!s.match(/\d/g)) {
        return false;
    } if (isNaN(s)) {
        return false;
    } else {
        return true;
    }
}

/* Must use regular expressions because of isNaN and type coercion. isNaN will return true if given an empty string
More information on special cases: https://tinyurl.com/mzvaevz

/ / used to enclose a regex 
\d is used to find a digit from 0-9
\D character that is NOT a digit
\w any alphanumeric character
\W a nonalphanumeric character
\s whitespace character (space, tab, newline, etc.)
\S nonwhitespace character 
. any character other than a newline

g makes global
i makes case insensitive

Used EJS, MDN, and above URL for reference with regex
*/

/* ADDING TO GITHUB (to this repo)
    ...cd codewars (name of directory)
    git commit -m "First 8kyu on this"
        >> [master] First 8kyu on this
        >> 1 file changed, 33 insertions(+)
    git push 
        >>  Counting objects: 3, done.
            Delta compression using up to 4 threads.
            Compressing objects: 100% (2/2), done.
            Writing objects: 100% (3/3), 751 bytes | 751.00 KiB/s, done.
            Total 3 (delta 0), reused 0 (delta 0)
            To https://github.com/gracehartzell/codewars.git
                d1d215c..18df35f  master -> master

    According to http://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html
    you only need to type git push since the repository exists at both ends (but to still be explicit 
    in what you want; therefore, on the next push I'll write it in full)
*/
// QUESTION: master is this particular branch name?

