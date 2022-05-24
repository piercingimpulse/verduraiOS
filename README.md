# verduraiOS
A stubborn and a bit fidgety solution to use YouTube 10.11.11546 on older iOS (7-10 32bit for now)

[VerduraiOS on Reddit](https://www.reddit.com/r/LegacyJailbreak/comments/uoxxyg/news_verduraios_a_petty_way_to_use_youtube/ "VerduraiOS on Reddit")

[Watch Video](https://www.youtube.com/watch?v=mxyB9FGudBY)

## HOW TO USE IT - API KEY METHOD
[Watch Video](https://www.youtube.com/watch?v=aIXa9EQ8fLk)
**ENSURE YOU HAVE YOUTUBE YOUTUBE 10.11.11546 INSTALLED! IF UNSURE, CHECK THE ITUNESMETADATA.PLIST IN THE YOUTUBE BUNDLE**
1. First download the repo and compile the tweak in THEOS or either download the deb file from the Download section
2. Obtain your Google Youtube API key
3. Download and unzip the web.zip file from Download section (skip this step if you have download the repo)
4. Set your API Key by editing the "API_KEY.js" file in the js folder.
5. Transfer all files present inside the web folder in Youtube.app folder - do not copy the folder web as directory! All HTML files and folders need to be in the same where the info.plist of Youtube is located - aka the MAIN FOLDER.
6. Spoof the info.plist file with the latest version of Youtube
7. Install the tweak. It is set to "On" by default in the Settings, so you should be able to use it straight away.

## HOW TO USE IT - WITHOUT API KEY
1. First download the repo and compile the tweak in THEOS or either download the deb file from the Download section
2. Download and unzip the weblight.zip file from Download section
3. Transfer all files present inside the weblight folder in Youtube.app folder - do not copy the folder weblight as directory! All HTML files and folders need to be in the same where the info.plist of Youtube is located - aka the MAIN FOLDER.
4. Spoof the info.plist file with the latest version of Youtube
5. Install the tweak. It is set to "On" by default in the Settings, so you should be able to use it straight away.
6. Use [Verdurify](<#VERDURIFY> "Verdurify") system to open Youtube pages.


### AVAILABLE OPTIONS
####HOME
Using youtube:/// scheme, it shows the homepage. It seems the only version of YouTube with the homepage visible at the moment.

####SEARCH
Need API Key. Use internal html file and Javascript to search public videos by title, to then using youtube:/// scheme to open the video with internal YouTube video player. This will not break in future unless changes in Youtube API policy.

####HISTORY
Using youtube:/// scheme, it shows the subscription feed page. It seems the only option available for the videos is "Save to Watch Later".

####WATCH LATER
Using youtube:/// scheme, it shows the watch later playlist. The picture for the album is obviusly unavailable, but the playlist it is playable!

####LIKED VIDEOS
Using youtube:/// scheme, it shows the liked videos playlist. The picture for the album is obviusly unavailable, but the playlist it is playable!

####GUIDE BUILDER
Using youtube:/// scheme, it shows the feed page.

####SEARCH CHANNELS
Need API Key. Use internal html file and Javascript to search public channels by title, or by ID to then using youtube:/// scheme to open either Upload playlists (when available) or the Channel page. This will work for a long time, unless changes in Youtube API policy. _NB: The rendering of Channels natively is very buggy_

####SEARCH PLAYLISTS
Need API Key. Use internal html file and Javascript to search public playlists by title, or by channel ID to then using youtube:/// scheme to open the the playlists (when available). This will work for a long time, unless changes in Youtube API policy. 

####READ COMMENTS
Need API Key. Use internal html file and Javascript to search public comments using the video id, to then show the comments on the side view. This will work for a long time, unless changes in Youtube API policy. 

#VERDURIFY
Your daily greens with Javascript: paste any video id, playlist id or www.youtube.com link in here to have a direct parsing to the Youtube App. Very useful in case you don't want to use API Key (see Method without API Key) and just rely on the Search Hack. REMEMBER TO REMOVE HTTP:// - HTTPS:// from the url!

### TRICKS AND SHORTCUT
- If you want extra tab, you can use the search button to generate more pages and therefore you can have more tabs!

#### KNOWN ISSUE
- Still can't figure out how to parse the query from the controllview to the html page and therefore implement a better search engine
- Unable to retrive private information (eg private videos, leave comments and like) as missing oAuth2 token (work in progress)
- Unable to retrive total liked count on video
- Unable to upload videos ~~(this is is an issue with SLGoogleAuth on iOS).~~ unfortunately I will have to rely on other ways since the client id used to upload video has been disabled, it will mean to create a single instance of webview with internal HTML and Java possibly to fix this.
- Unable to read the Push Notification (if you turn them on you will get them, but can't open them for now :/) - if anyone knows in wich ViewController they are stored that will help!

#### THANKS TO
- Will Hutchinson Builds for the base javascript code I've implemented in this tweak. I would like to tag you, but I can't find your repo anymore :/
- SamDaaEpic for menu svg images and feedbacks on menu restyling
