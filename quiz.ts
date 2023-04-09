

// Q1 HTML Tags
/**
 * 
    Strip all HTML tags from a string. HTML tags are enclosed in < and >.

    The regex will be applied on a line-by-line basis, meaning partial tags will need to be handled by the regex. Don't worry about opening or closing tags; we just want to get rid of them all.

    Note: This task is meant to be a learning exercise, and not necessarily the best way to parse HTML.
 * 
 */


const answer1 =

//Q2 Broken Keyboard
/**
 * 
   Oh no! It seems my friends spilled beer all over my keyboard last night and my keys are super sticky now. Some of the time whennn I press a key, I get two duplicates.

   Can you ppplease help me fix thhhis?
 * 
 */

const answer2 = 


//Q3 Match an E-mail
/**
 * Verify that a given e-mail address is valid.

   We all know how complex emails are, but despite this, let's give it a try and see what we can come up with.

   You could start by trying to match contact@regex101.com (denoted as <local-part>@<domain>.<top-level-domain>).
 */
// 문자열 중간에 알파벳으로 시작하는 부분을 어떻게 해야할지?
const wrongAnswer3 = /^[a-zA-Z0-9\.-]+@([a-z0-9-]+\.)*[a-z0-9-]+\.[a-z-]{2,6}$/