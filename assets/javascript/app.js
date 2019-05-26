/***********************************************
 * Project: My Guitar Hub
 * Developer: Sean Bryan
 * Date: 2019-05-26
 ***********************************************/

 //JQuery References
var title = $("#song-title-input");
var artist = $("#artist-input");
var genre = $("#genre-input");
var proficiency = $("#proficiency-input");

$(document).ready(function () {

    function addASong() {
        event.preventDefault();

        var song = {
            title: title.val().trim(),
            artist: artist.val().trim(),
            genre: genre.val().trim(),
            proficiency: proficiency.val().trim()
        };
        title.val("");
        artist.val("");
        genre.val("");
        proficiency.val("");

        console.log(song);

        // if (userid !== "") {
        //     comicbookRef = firebase.database().ref(userid + "/comicbooks");
        //     comicbookRef.push(newComic);
        // } else {
        //     displayInventory(newComic, null);
        // };
    }

    /** On-Click for topic buttons */
    $(document).on("click", ".add-song-button", addASong);
});