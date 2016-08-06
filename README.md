# Stop Tracking Me on Reddit


## How to get it

### Install in Chrome

https://chrome.google.com/webstore/detail/stop-tracking-me-on-reddi/cbebgcijnnddaopldijabckkahpbimgi



## Short description

Reddit tracks every outbound link you click, even if you are logged out. Protect yourself from tracking with this extension.


## Long description

Reddit is tracking every out-going link you click. Even if you are not logged in, every news article, image, or website you visit from
Reddit is being recorded. 

I made this because there wasn't any other Chrome extension that would block Reddit link tracking in August, 2016.
If you are logged in, there is an option to disable link tracking in the Reddit preferences. If you are not logged in there is no way to disable tracking without using this extension.


## How to contribute

### Use this GitHub project


## Keywords

Reddit, privacy, tracking, do not track.



## Technical Explanation

Reddit uses link tracking by replacing outgoing links to https://out.reddit.com/. This is not obvious because when users hover the mouse over a link they see the final destination and not the tracking URL.

This extension disables tracking by replacing link URLs to https://out.reddit.com/ with the real destination.

