'use strict'
document.getElementById("botton1").addEventListener("click", () => {
        var id_name = document.getElementById("botton1");
        var text = id_name.firstElementChild.innerText;//bottoの中のpタグの内容をｇet

        if (text === "閉じる") {
                id_name.style.background = "rgb(46, 196, 255)";
                id_name.firstElementChild.innerText = "詳細";
                hideAndShow(0, "theme-detail1");

        } else {
                id_name.style.background = "pink";
                id_name.firstElementChild.innerText = "閉じる";
                hideAndShow(1, "theme-detail1");

        }

});

document.getElementById("botton2").addEventListener("click", () => {
        var id_name = document.getElementById("botton2");
        var text = id_name.firstElementChild.innerText;//bottoの中のpタグの内容をｇet

        if (text === "閉じる") {
                id_name.style.background = "rgb(46, 196, 255)";
                id_name.firstElementChild.innerText = "詳細";
                hideAndShow(0, "theme-detail2");

        } else {
                id_name.style.background = "pink";
                id_name.firstElementChild.innerText = "閉じる";
                hideAndShow(1, "theme-detail2");

        }

});

document.getElementById("botton3").addEventListener("click", () => {
        var id_name = document.getElementById("botton3");
        var text = id_name.firstElementChild.innerText;//bottoの中のpタグの内容をｇet

        if (text === "閉じる") {
                id_name.style.background = "rgb(46, 196, 255)";
                id_name.firstElementChild.innerText = "詳細";
                hideAndShow(0, "theme-detail3");

        } else {
                id_name.style.background = "pink";
                id_name.firstElementChild.innerText = "閉じる";
                hideAndShow(1, "theme-detail3");

        }

});



function hideAndShow(state, classname) {

        var class_name = document.getElementsByClassName(classname);
        if (state) {
                // class_name.style.display = "block";
                for (var i = 0; i < class_name.length; i++) {
                        class_name[i].style.display = "block";
                }
        } else {
                // class_name.style.display = "none";
                for (var i = 0; i < class_name.length; i++) {
                        class_name[i].style.display = "none";
                }

        }

}