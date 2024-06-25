## Here is the task

Give me an input string that outputs a SHA-256 hash that starts with 00000 .
in previous task we send the input something like this himanish640136 which return the hash
00000e7f0361373c79347629d139b6e11261474f368dffa9fec2d719b1395b00

In previos task we have intialy sending something like this prefix = "himanihs" , nonce = 640136 and combing both giving the
hash 00000e7f0361373c793 that has intial five zeros

in this we need to do the prefix = "slate => slate | value = 0
value => true | usd 19"
the above is the input and we have to find the nonce that will provide us the output of '00000' in prefix of hash

## problem solution given for nodejs
