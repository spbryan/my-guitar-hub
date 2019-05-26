/***********************************************
 * Project: My Guitar Hub
 * Developer: Sean Bryan
 * Date: 2019-05-26
 ***********************************************/

$(document).ready(function () {

    function addASong() {
        alert("boom");
    }

    $('#exampleModal').on('show.bs.modal', function (event) {
        debugger;
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
      })

    /** On-Click for topic buttons */
    $(document).on("click", ".add-song-button", addASong);
});