// need to make function for mark all as read 
// need to make function for clicking each one individually 
// need to change the number inside notifications based on number of unread 
var notifications = document.querySelector(".amnt-notis");


// this is if we click mark all as read
$(".mark-as-read").click(function() {
    var elements = $(".unread");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("unread");
    } // for

    // dot section 
    var dots = $(".dot");

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.add("read-dot");
    } // for

    // update the notifications

    // ask how to do the following line with jQuery
    var notiValue = notifications.innerHTML;
    notiValue -= notiValue;
    notifications.innerHTML = "" + notiValue;
});

// this is if we click each notification individually 
$(".unread").click(function() {
    // now i have added an event listener to each unread element
    this.classList.remove("unread");

    $(this).find(".dot").addClass("read-dot");
    // need to access the dot and add read-dot still 

    var notiValue = notifications.innerHTML;
    if (notiValue == 0) {
        notiValue = notiValue;
    } else {
        notiValue--;
    } // if
    notifications.innerHTML = "" + notiValue;
});
