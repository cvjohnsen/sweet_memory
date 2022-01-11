# sweet_memory
https://dazzling-kare-5bcc4b.netlify.app/

Basic Template of Memory Grid! 
![game_wireframe](https://user-images.githubusercontent.com/79131508/148714803-d7098d65-1c24-4113-867e-4b6acc4b629a.jpg)

New stuff not mentioned in class yet:
DOMContentLoaded:
The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. 

Timing Events:
The window object allows execution of code at specified time intervals.
These time intervals are called timing events.
The two key methods to use with JavaScript are:
* setTimeout(function, milliseconds) Executes a function, after waiting a specified number of milliseconds.
* 
* setInterval(function, milliseconds) Same as setTimeout(), but repeats the execution of the function continuously.
The setTimeout() and setInterval() are both methods of the HTML DOM Window object.
https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

Approach Taken:
The ojective is to find as many matching pairs in 30 seconds. For single player, no matches result in losing the game. Multiple players can take turns playing, player with most points win. If there's a tied, players must rematch! Once a pair is found it'll be removed from the game board. Remaining cards should be played until timer is up. Gameboard is insipired by Ania Kubow's version of memory game. https://youtu.be/tjyDOHzKN0w 
Images: Unsplash.com and google.com

INSTRUCTIONS:
This is a concentration memory game.
Refresh page to start timer.
Find as many matches as you can in 30 seconds.
For every matched pairs you earn a point.

SINGLE PLAYER:
If you find a single match or more you win!
If you don't find any matches you lose!

MULTIPLE PLAYERS:
Each player will take a turn.
Players with most points wins.
If tied players must rematch.

Unsolved Problems/ Upcoming Features:
Add a start timer and reset button, so timer alert won't have to be implemented and players won't have to refresh page to start new game. Perhaps, add another player score board and function, so players don't have to record their own scores. Work more on the responsive aspect.
