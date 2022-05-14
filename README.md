# verduraios
A stubborn and a bit fidgety solution to use YouTube 10.11.11546 on older iOS (7-10 32bit for now)

## HOW TO USE IT
1. First compile the tweak or download the precompiled deb file from the Download section
2. Obtain your Google Youtube API
3. Download and unzip the addon.zip file from Download section
4. Change API_KEY.js = YOUR_VALUE in all the.js file present in the js folder with your API Key
5. Install the tweak. It is set to "On" by default in the Settings, so you should be able to use it straight away

### AVAILABLE OPTIONS
- View Subscriptions
- View History
- View Watch Later Playlist
- View Liked Videos Playlist
- View Guide Builder page
- Search video by title
- Search playlists by title
- Search playlists by ChannelID
- Search channels by title
- Search channels by specific name (for statistics and upload video playlist)
- Read Comments

#### KNOWN ISSUE
- Still can't figure out how to parse the query from the controllview to the html page :/
- Unable to retrive private information (eg private videos, leave comments and like) as missing oAuth2 token
- Unable to retrive total liked count on video
- Unable to upload videos (this is is an issue with SLGoogleAuth on iOS).