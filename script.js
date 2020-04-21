var main = function () {
    "use strict";

    $("button").on("click", function (event) {

        var username = $("#username").val();
        
        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=" + username + "&api_key=57ee3318536b23ee81d6b27e36997cde&format=json", function(json) {

            var list = '';

            $.each(json.topartists.artist, function(i, item) {
                list += "<p>" + item.name + " - " + "scrobbles: " + item.playcount + "</p>";
            });

            $('#result').empty();
            $('#result').append(list);
        });
    });

};

$(document).ready(main);
