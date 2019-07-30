// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // Add a new burger.
    $(".add-da-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: 0 //false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".change-status").on("click", function (event) {
        event.preventDefault();

        console.log("CLICKED!")
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newDevoured = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed eaten to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});
