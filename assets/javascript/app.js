/***********************************************
 * Project: My Guitar Hub
 * Developer: Sean Bryan
 * Date: 2019-05-26
 ***********************************************/
$(document).ready(function () {
    //JQuery References
    var title = $("#song-title-input");
    var artist = $("#artist-input");
    var genre = $("#genre-input");
    var proficiency = $("#proficiency-input");

    //Firebase Configurations
    var firebaseConfig = {
        apiKey: "AIzaSyDQuKbESj040xKw40aHacSDni_cbbp0QBI",
        authDomain: "guitar-songs-ca432.firebaseapp.com",
        databaseURL: "https://guitar-songs-ca432.firebaseio.com",
        projectId: "guitar-songs-ca432",
        storageBucket: "guitar-songs-ca432.appspot.com",
        messagingSenderId: "953844895516",
        appId: "1:953844895516:web:c2acec717f58abe1"
    };
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    /**
     * Function that captures song input details from modal to be 
     * saved to the database
     */
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

        if (title && artist) {
            addSongToDatabase(song);
        }
    }

    function displayInventory(snapshot) {
        $("#table-body").empty();
        snapshot.forEach(function (childSnapshot) {
            childSnapshot.forEach(function (song) {
                var inventoryId = song.key;
                console.log(inventoryId);
                var newRow = $("<tr>");
                newRow.addClass("inventory-item table-entry");
                newRow.append(displayTableEntry("table-title", song.val().title));
                newRow.append(displayTableEntry("table-artist", song.val().artist));
                newRow.append(displayTableEntry("table-genre", song.val().genre));
                newRow.append(displayTableEntry("table-proficiency", song.val().proficiency));
                if (null != song.val().title) {
                    newRow.attr("id", inventoryId);
                    var removeBtn = $("<button>", { class: "btn waves-effect remove", id: inventoryId, text: "Remove" });
                    newRow.append(removeBtn);
                }
                else {
                    var emptyTable = $("<td>");
                    newRow.append(emptyTable)
                }

                // Append the new row to the table
                $("#song-list-table > tbody").prepend(newRow);
            });
        });
        $('#song-list-table').DataTable();
    }

    /**
    * Populate a new table cell, assign an id, and return the value
    * @param id 
    * @param value 
    */
    function displayTableEntry(id, value) {
        var newEntry = $("<td>");
        newEntry.attr("id", id);
        newEntry.text(value);
        return newEntry;
    }

    function addSongToDatabase(song) {
        var row = database.ref("/song/");

        row.push(song);
    }

    // $("#my-input").on("keyup", function () {
    //     var value = $(this).val().toLowerCase();
    //     $("#song-list-table tr").filter(function () {
    //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //     });
    // });

    // $('#song-list-table').DataTable();
    // $('#song-list-table').DataTable( {
        // "order": [[ 3, "desc" ]]
    // } );

    /**
     * Listens for changes to the values on the data base
    */
    database.ref().on("value", function (snapshot) {
        displayInventory(snapshot);
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

    /** On-Click for topic buttons */
    $(document).on("click", ".add-song-button", addASong);
});