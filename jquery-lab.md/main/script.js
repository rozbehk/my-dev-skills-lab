let idIndex = 0;
$("#skill-button").click(function () {
  if ($("#skill-text").val() === "") {
    return;
  } else {
    var inputSkill = $("#skill-text").val();
    $("#skill-text").val("");
    $("#list").append(
      `<li class='remove' Id=${idIndex} "${inputSkill}":>${inputSkill}   `
    );
  }

  idIndex++;
});

$(document).on("click", ".remove", function () {
  $(this).remove();
});
