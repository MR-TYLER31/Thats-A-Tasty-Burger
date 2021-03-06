// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg")
        .val()
        .trim()
    };
    if ($("#burg").val() === "") {
      alert("please add burger");
    } else {
      // Send the POST request.
      $.ajax("/api/add", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });

  $(".eat").on("click", function(event) {
    event.preventDefault();

    let id = $(this).attr("data-id");

    console.log(id);
    $.ajax("/api/eat/" + id, {
      type: "PUT"
    }).then(function(resp) {
      console.log(resp);
      location.reload();
    });
  });

  $(".remove").on("click", function(event) {
    event.preventDefault();

    let id = $(this).attr("data-id");

    console.log(id);
    $.ajax("/api/remove/" + id, {
      type: "DELETE"
    }).then(function(resp) {
      console.log(resp);
      location.reload();
    });
  });
});
