$(document).ready(function () {
  if ($(document).width() < 992) {
    $("#dropDownMenu").addClass("d-none");
  }
  $("#navbarSupportedContent").on("show.bs.collapse", function () {
    // When the menu is opened (shown), change the toggle icon
    $(".navbar-toggler .fa").removeClass("fa-bars").addClass("fa-times");
  });

  $("#navbarSupportedContent").on("hide.bs.collapse", function () {
    // When the menu is closed (hidden), revert to the default icon
    $(".navbar-toggler .fa").removeClass("fa-times").addClass("fa-bars");
  });
  const isClosed = $("#dropDownMenu").hasClass("d-none");
  const isOpen = $("#dropDownMenu:not(.d-none)");
  $("#dropdownOpener").click(function () {
    $("#dropDownMenu").toggleClass("d-none slow");
    if (isClosed) {
      $("#dropDownArrow").toggleClass("fa-chevron-down");
      $("#dropDownArrow").toggleClass("fa-chevron-up");
    }
  });

  /* .............. contact form .............. */
  $("#contact_form").validate({
    rules: {
      name: {
        required: true,
        pattern: /^[A-Za-z\s]+$/, // Regular expression to allow letters and spaces
      },
      email: {
        required: true,
        email: true, // Use the 'email' rule to validate email addresses
      },
      message: {
        required: true,
        pattern: /^[A-Za-z\s]+$/ // Regular expression to allow letters and spaces
      },
    },
    messages: {
      name: {
        required: "Please enter your name.",
        pattern: "Name can only contain letters and spaces.",
      },
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address.",
      },
      message: {
        required: "Please enter your message.",
        pattern: "Message can only contain letters and spaces.",
      }
    },
    submitHandler: function (form) {
      // Your custom submit logic here
      // For example, you can use AJAX to submit the form data to the server
      $.ajax({
          url: "sendmail.php",
          method: "POST",
          data: $(form).serialize(),
          success: function (response) {
            if(response=="success"){
              $("#success_modal").modal("show");
              setTimeout(()=>{
                $("#success_modal").modal("hide");
                $("#contact_form")[0].reset();
              },4000);
            }else{
              $("#error_modal").modal("show");
              setTimeout(()=>{
                $("#error_modal").modal("hide");
              },4000);
            }
            // console.log("Form submitted successfully:", response);
          },
          error: function (xhr, textStatus, errorThrown) {
              console.error("Form submission failed:", errorThrown);
          }
      });
    },
  });
});
