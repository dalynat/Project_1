
function searchBandsInTown(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events/?app_id=codingbootcamp";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(data) {

      // Printing the entire object to console
    //   console.log(data);
      $(data).each(function(i, artist){
        var venue = artist.venue.name;
        var location = artist.venue.city;
        var date = artist.datetime;
        var lineup = artist.lineup.join(',  ');
        var tickets = artist.offers[0].url;
        // console.log(venue)
        // console.log(date)
        // console.log(lineup)
        // console.log(status)

            $('#concertBody').append($('<tr>')
                .append($('<td class="text1">').append(venue))
                .append($('<td class="text1">').append(location))
                .append($('<td class="text1">').append(date))
                .append($('<td class="text1">').append(lineup))
                .append($('<td class="text1">').append(tickets))
            )
        });
    });
}
function searchLastFM(artist){
  var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=cb2b429293b40e8889fc772ca5ba9188&format=json"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(data){
        // console.log(data)
        $(data).each(function(i, artist){


        var one = data.toptracks.track[1].name;
        var two = data.toptracks.track[2].name;
        var three = data.toptracks.track[3].name;
        var four = data.toptracks.track[4].name;
        var five = data.toptracks.track[5].name;
        var six = data.toptracks.track[6].name;
        var seven = data.toptracks.track[7].name;
        var eight = data.toptracks.track[8].name;
        var nine = data.toptracks.track[9].name;
        var ten = data.toptracks.track[10].name;

        var topten= [one + ', ' + two + ', ' + three + ', ' + four + ', ' + five + ', ' + six + ', ' + seven + ', ' + eight + ', ' + nine + ', ' + ten]
        console.log(topten)

        // console.log(one, two, three, four, five, six, seven, eight, nine, ten)
            // $('#topten').text('Top Tracks by:' + artist)
            $('#songs').text(topten)
    })
})
  }
  

  // Event handler for user clicking the select-artist button
  $("#search").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputArtist = $("#artist").val().trim();
    $('#concertBody tr').remove()
    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBandsInTown(inputArtist);
    searchLastFM(inputArtist)
  });
