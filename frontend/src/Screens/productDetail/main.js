
export const change_img =function() {
    var x = document.getElementById("main_img")

    const OnEvent = (doc) => {
        return {
            on: (type, selector, callback) => {
                doc.addEventListener(type, (event) => {
                    if (!event.target.matches(selector)) return;
                    callback.call(event.target, event);
                }, false);
            }
        }
    };


    OnEvent(document).on('click', '.prod_img', function (e) {


        var newURL = e.target.getAttribute("src")

        x.removeAttribute("src")
        x.setAttribute("src", newURL)
        // alert("Hello")
    });

}   