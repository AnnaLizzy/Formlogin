var urlstatic_JS = $("#urlstatic_JS").text();
var langcode = 'en';




$(document).ready(function() {

    var fields = document.querySelectorAll('input[type="password"]');
    for (var i = 0; i < fields.length; i++) {
        fields[i].autocomplete = "on";
    }

    //Sự kiện nhấn vào chọn ngôn ngữ
    $(".dropdown-item").click(function() {
        var lang = $(this).text();
        if (lang.indexOf('Việt') > 0) {
            lang = 'vn';
            $("#img_lang")
                .removeAttr('src')
                .prop('src', urlstatic_JS + 'images/Flags/vn.png');
            $("#txt_lang").text("Vietnamese");
            Change_Lang(lang);
            setcookie_lang(lang, 365);
            SHOW_LANG_();
        };
        if (lang.indexOf('English') > 0) {
            lang = 'en';
            $("#img_lang")
                .removeAttr('src')
                .prop('src', urlstatic_JS + 'images/Flags/en.png');
            $("#txt_lang").text("English");
            Change_Lang(lang);
            setcookie_lang(lang, 365);
            SHOW_LANG_();
        };
        if (lang.indexOf('中文') > 0) {
            lang = 'cn';
            $("#img_lang")
                .removeAttr('src')
                .prop('src', urlstatic_JS + 'images/Flags/cn.jpg');
            $("#txt_lang").text("中文");
            Change_Lang(lang);
            setcookie_lang(lang, 365);
            SHOW_LANG_();
        };

    });

});



//Lấy thông tin trên ngữ trên server
function GET_LANG() {
    $.ajax({
        url: '/get_lang/',
        dataType: "json",
        async: false,
        success: function(response) {
        try {
                      var item = response["returndata"];
            if (item.lang.indexOf('ang') > 0) {
                langcode = item.lang;
                if (langcode == 'en' || langcode == 'vn' || langcode == 'cn') {
                    setcookie_lang(langcode, 365);
                } else {
                    setcookie_lang('en', 365);
                }

            }
        }
        catch(err) {
            setcookie_lang('en', 365);
        }

        },
    });
}



//Thay đổi thông tin ngôn ngữ trên DB
function Change_Lang(lang) {
    // GET AJAX request
    $.ajax({
        type: 'GET',
        url: "/change_lang/",
        data: {
            lang: lang
        },
        success: function(response) {
            GET_LANG();
        },
    })
}

//set logo language for buton
function set_Icon_langbutton(lang) {
    if (lang == 'vn') {
        $("#img_lang")
            .removeAttr('src')
            .prop('src', urlstatic_JS + 'images/vn.png');
        $("#txt_lang").text(' Việt Nam');
    }

    if (lang == 'cn') {
        $("#img_lang")
            .removeAttr('src')
            .prop('src', urlstatic_JS + 'images/cn.jpg');
        $("#txt_lang").text(' 中文');
    }
    if (lang == 'en') {
        $("#img_lang")
            .removeAttr('src')
            .prop('src', urlstatic_JS + 'images/en.png');
        $("#txt_lang").text(' English');
    }
}
//
function SHOW_LANG_() {
    var lang = getcookie_lang();
    set_Icon_langbutton(lang);
    // console.log("Đang dịch");
    var jsonUrl = "/static/lang/i18n/" + lang + ".json";

    _elements = document.querySelectorAll("[data-i18n]");

    function translate(translation) {
        Array.prototype.slice.call(_elements, 0).forEach(function(element) {
            var keys = element.dataset.i18n.split(".");
            var text = keys.reduce(function(obj, i) { return obj[i] }, translation);
            if (text) {
                element.innerHTML = text;
                $(element)
                    .removeAttr('placeholder')
                    .prop('placeholder', text);
            }
        });

    }

    $.ajax({
        url: jsonUrl,
        dataType: "json",
        async: false,
        success: translate,
        error: function() {
            console.log("Không dịch được");
        }
    });
}