// Searchbar Event Handler

$(function (){
    
    
    var searchField = $('#query');
    var icon = $('#submit-btn');
    
    //Focus Handler
    
    $(searchField).on('focus', function(){
        
        $(this).animate({
            
            width: '100%'
            
        }, 400);
         $(icon).animate({
            
            right: '2%'
            
        }, 400);
        
    });
    
    //Blur EventHandler
    
    $(searchField).on('blur', function(){
    
    if(searchField.val() == 0){
        
        $(searchField).animate({
            
            width: '45%'
            
        }, 400);
        
        $(icon).animate({
            
            right: '58%'
            
        }, 400);
        
    };
  });  
    
    // cancels default action of the form
    
    $('#search-form').submit(function(e){
        
        e.preventDefault();
        
    })
    
    });
   
    
   function search(){
       
       //Clear Results
       
       $('#results').html('');
       $('.buttons').html('');
       
       //Get Form Input
       
       q = $('#query').val();
       
       //Run GET request on API
       
       $.get("https://www.googleapis.com/youtube/v3/channels",
             {
            
             part: 'snippet, id, contentDetails, statistics, status',
          
             forUsername: q,
             key: API_KEY},
             
             function(data){ 
           
           var nextPageToken = data.nextPageToken; //gets the pages of videos
           var prevPageToken = data.prevPageToken;
           
           console.log(data);
           
           $.each(data.items, function(i, items){
               
               //Get Output
               var output = getOutput(items)
               //Display Output
               
               $('#results').append(output)
               
               
           });
           
           //Display Results
           
           var buttons = getButtons(prevPageToken, nextPageToken);
           
           //Display Button
           
           $('.buttons').append(buttons)
       }
            
            );
     
   }

//Next Page Function

function nextPage(){
    
    var token = $('#next-button').data('token'); // .data('token') same as using data-token value.
    
    var q = $('#next-button').data('query');
    
    
       //Clear Results
       
       $('#results').html('');
       $('.buttons').html('');
       
       //Get Form Input
       
       q = $('#query').val();
       
       //Run GET request on API
       
       $.get(
           "https://www.googleapis.com/youtube/v3/channels",
           {
            
            part: 'snippet, id, contentDetails, statistics, status',
             forUsername: q,
            pageToken: token,
             key: API_KEY},
             
             function(data){ 
           
           var nextPageToken = data.nextPageToken; //gets the pages of videos
           var prevPageToken = data.prevPageToken;
           
           console.log(data);
           
           $.each(data.items, function(i, items){
               
               //Get Output
               var output = getOutput(items)
               //Display Output
               
               $('#results').append(output)
               
               
           });
           
           //Display Results
           
           var buttons = getButtons(prevPageToken, nextPageToken);
           
           //Display Button
           
           $('.buttons').append(buttons)
       }
            
            );
     
    
    
}

//Previous Page Function

function prevPage(){
    
    var token = $('#prev-button').data('token'); // .data('token') same as using data-token value.
    
    var q = $('#prev-button').data('query');
    
    
       //Clear Results
       
       $('#results').html('');
       $('.buttons').html('');
       
     // Get Form Input
	q = $('#query').val();
       
       //Run GET request on API
       
       $.get(
           "https://www.googleapis.com/youtube/v3/channels",
           {
            
            part: 'snippet, id, contentDetails, statistics, status',
             forUsername: q,
            pageToken: token,
             key: API_KEY},
             
             function(data){ 
           
           var nextPageToken = data.nextPageToken; //gets the pages of videos
           var prevPageToken = data.prevPageToken;
           
           console.log(data);
           
           $.each(data.items, function(i, items){
               
               //Get Output
               var output = getOutput(items)
               //Display Output
               
               $('#results').append(output)
               
               
           });
           
           //Display Results
           
           var buttons = getButtons(prevPageToken, nextPageToken);
           
           //Display Button
           
           $('.buttons').append(buttons)
       }
            
            );
     
    
    
};
  
  

//Build Output

function getOutput(items){
         
   var channelId = items.id;
   var description = items.snippet.description;
   var title = items.snippet.title; 
   var thumb = items.snippet.thumbnails.high.url;
   var channelDate = items.snippet.publishedAt;
   var uploadsPlaylist = items.contentDetails.relatedPlaylists.uploads;
   var viewCount = items.statistics.viewCount;
   var subscriberCount = items.statistics.subscriberCount;
   var videoCount = items.statistics.videoCount;
   var privacyStatus = items.status.privacyStatus;

    //Build Output String
    
    var outPut = '<li>' +
        '<div class = "list-left">' +
        '<img src="'+thumb+'">' +
        '<b>Channel status:</b> '+privacyStatus+'<br>' +
        '</div>' +
        '<div class ="list-right">' +
        '<h3><a data-fancybox data-type="iframe" href="youtube://www.youtube.com/channel/'+channelId+'">'+title+'</a></h3>' +
        '<b>Views:</b> '+viewCount+' | <b>Subscirbers:</b> '+subscriberCount+'<br>' +
        '<b>Joined on:</b> '+channelDate+'<br>' +
        '<p>'+description+'</p>'+
        '<a href="youtube:///www.youtube.com/playlist?list='+uploadsPlaylist+'"><span class="ctitle">Uploaded Videos playlist ('+videoCount+')</span></a><br>' +
        '<b>Channel ID:</b><input onClick="this.setSelectionRange(0, this.value.length)" type="text" id="'+channelId+'" value="'+channelId+'">' +
        '</li>' +
        '<div class ="clearfix"></div>'
        
    return outPut;
         
     }; 

//Build Buttons

function getButtons(prevPageToken, nextPageToken){
    
    if(!prevPageToken){ //if there is no previous page
        
        var btnoutput = '<div class="button-container">'+'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' + 'onclick ="nextPage();">Next Page</button></div>';
        
    } else {
        
         var btnoutput = '<div class="button-container">'+'<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"'+'onclick= "prevPage();"> Prev Page</button>' +
            '<button id="next-button" class="paging-button" data-token="'+nextPageToken+'"data-query="'+q+'"' +
            'onclick="nextPage();">Next Page</button></div>';
        
    }
    
    return btnoutput;
    
}