

$(document).ready(function(){
  

  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');
  });

  $('.translate_wrapper .current_lang').click(function(e){
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
  });
  var lang = "en";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
      
    });
  document.title=titleLang[lang];
  $("[data-placeholder]").each(function() {
    var placeholder = $(this).attr("data-placeholder");
    $(this).attr("placeholder", arrLang[lang][placeholder]);
  });
  /*TRANSLATE*/


  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');

    var img = $(this).find('img').attr('src');
    var lang = $(this).attr('data-value');
  
    

    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);

 
    $(".translate").click(function() {
      var lang = $(this).attr("id");
      if(lang )
      $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
      });
      document.title=titleLang[lang];
      $("[data-placeholder]").each(function() {
        var placeholder = $(this).attr("data-placeholder");
        $(this).attr("placeholder", arrLang[lang][placeholder]);
      });
    });
  });
});


  var titleLang ={
    "en":"Forgot pasword",
    "cn":"忘记密码 114",
    "vn":"Quên mật khẩu"
  }
  var arrLang ={
    en:{
      "HOME": "Home",
      "forgot":"Forget Password System 114",
      "user": "Username",
      "name":"Full name",
      "email":"Email",
      "submit":"Submit",
      "string1":"Username : Card ID & Password : Last 6 digits of Identity Card"
    },
    cn:{
      "HOME":"首頁",
      "forgot":"忘记密码 114",
      "user":"用戶名",
      "name":"姓名",
      "email":"電子郵件",
      "submit":"確認",
      "string1":"用户为工號初始密碼為身份證號碼后六位"
    },
    vn:{
      "HOME":"Trang chủ",
      "forgot":"Quên mật khẩu hệ thống 114",
      "user":"Tên đăng nhập",
      "name":"Họ và tên",
      "email":"Email",
      "submit":"Xác nhận",
      "string1":"Tên đăng nhập là mã thẻ, mật khẩu mặc định là sáu số cuối CMND"
    }
  }

var tran=[
  {
    "en":"Username",
    "cn":"阮公",
    "user":"Tên đăng nhập"
  }
]