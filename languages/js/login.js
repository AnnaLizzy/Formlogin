

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
      "en":"Login System 114",
      "cn":"忘记密码 114",
      "vn":"Đăng nhập hệ thống 114"
    }
    var arrLang ={
      en:{       
        "login":"Login System 114",
        "user": "Username",  
        "pass":"Password",   
        "submit":"Submit",
        "remember":"Remember Me" ,
        "forgot":"Forget Password"
      },
      cn:{      
        "login":"忘记密码 114",
        "user":"用戶名",        
        "pass":"tiếng trung",   
        "submit":"確認",
        "remember":"記住密碼" ,
        "forgot":"忘记密码",    
      },
      vn:{     
        "login":"Đăng nhập hệ thống 114",
        "user":"Tên đăng nhập",
        "pass":"Mật khẩu",      
        "submit":"Xác nhận",
        "remember":"Nhớ mật khẩu",
        "forgot":"Quên mật khẩu "
      }
    }
 