// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

  

$$('.open-login-screen').on('click', function () {
  myApp.loginScreen();
  myApp.alert('Anda sudah keluar!','Lapor RT');
});

function blmLogin(){
    myApp.alert('Anda belum login!','Lapor RT');
}

$$('#home').on('click', function () {
  myApp.closeModal();
  myApp.alert('Anda belum login!','Lapor RT');
  document.getElementById("tentuan").innerHTML = '<li>'+
                    '<a class="menu close-panel tab-link" href="#tab5">'+
                        '<div class="item-title menu">Profil</div> <!-- Menu Item -->'+
                    '</a>'+
                '</li>'+
                '<li>'+
                    '<a class="menu close-panel tab-link" onclick="blmLogin()">'+
                        '<div class="item-title menu">Administrasi</div>'+
                    '</a>'+
                '</li>'+
                '<li class="accordion-item">'+
                    '<a class="menu close-panel tab-link" onclick="blmLogin()">'+
                        '<div class="item-inner">'+
                            '<div class="item-title menu">Iuran</div>'+
                        '</div>'+
                    '</a>'+
                '</li>'+
                '<li>'+
                    '<a class="menu close-panel tab-link" onclick="blmLogin()">'+
                        '<div class="item-title menu">Organisasi</div>'+
                    '</a>'+
                '</li>'+
                '<li>'+
                    '<a class="open-login-screen" href="#">'+
                        '<div class="item-title menu"> Login</div>'+
                    '</a>'+
                '</li>'+
                '<div class="title">'+
                    'Information'+
                '</div>'+
                    '<div class="content-block" style="text-align: justify;">'+
                        '<p>Aplikasi ini merupakan aplikasi administrator RT antar warga untuk mempermudah maskyarakat.</p>'+
                        '<p class="copyright">2017 Informatika Paramadina. ALL RIGHTS RESERVED</p>'+
                        '<p> Developed by: TIM anak Mampang</p>'+
                    '</div>';
    document.getElementById("tab").innerHTML = 
                '<a href="#tab1" id="tab1" class="tab-link active"><i class="f7-icons">home_fill</i></a>'+
                '<a onclick="blmLogin()" id="tab2" class="tab-link"><i class="f7-icons">chat_fill</i></a>'+
                '<a onclick="blmLogin()" id="tab3" class="tab-link"><i class="f7-icons">add_round_fill</i></a>'+
                '<a href="#tab4" id="tab4" class="tab-link"><i class="f7-icons">bell_fill</i></a>'+
                '<a href="#" data-panel="right" class="tab-link open-panel"><i class="f7-icons">more_round_fill</i></a>';
});


$$('.close-login-screen').on('click', function () {
    var user ='';
    var pass ='';
    var $section_user = '';
    var section = false;
    user = document.getElementById('user').value;
    pass = document.getElementById('pass').value;
    $.post('http://localhost/laport/admin/req/login.php',{user:'get',username:user,password:pass},function(res){
    console.log(res);
        section = true;
        $section_user = res[0].username;
        if($section_user == ''){
         myApp.alert('Login Gagal! Periksa akun anda atau pilih home untuk masuk','Lapor RT',function () {
         myApp.loginScreen();
            });
        }else{
            if(res[0].level_id==4){
                myApp.closeModal();
            myApp.alert('Login Berhasil! Hi '+$section_user,'Lapor RT');
            document.getElementById("tentuan").innerHTML = '<li>'+
                        '<a class="menu close-panel tab-link" href="#tab5">'+
                            '<div class="item-title menu">Profil</div> <!-- Menu Item -->'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="menu close-panel tab-link" href="#tab6">'+
                            '<div class="item-title menu">Administrasi</div>'+
                        '</a>'+
                    '</li>'+
                    '<li class="accordion-item">'+
                        '<a class="menu close-panel tab-link" href="#tab7">'+
                            '<div class="item-inner">'+
                                '<div class="item-title menu">Iuran</div>'+
                            '</div>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="menu close-panel tab-link" href="#tab8">'+
                            '<div class="item-title menu">Organisasi</div>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="open-login-screen" href="#">'+
                            '<div class="item-title menu"> Logout</div>'+
                        '</a>'+
                    '</li>'+
                    '<div class="title">'+
                        'Information'+
                    '</div>'+
                        '<div class="content-block" style="text-align: justify;">'+
                            '<p>Aplikasi ini merupakan aplikasi administrator RT antar warga untuk mempermudah maskyarakat.</p>'+
                            '<p class="copyright">2017 Informatika Paramadina. ALL RIGHTS RESERVED</p>'+
                            '<p> Developed by: TIM anak Mampang</p>'+
                        '</div>';
            document.getElementById("tab").innerHTML = 
                    '<a href="#tab1" id="tab1" class="tab-link active"><i class="f7-icons">home_fill</i></a>'+
                    '<a href="#tab2" id="tab2" class="tab-link"><i class="f7-icons">chat_fill</i></a>'+
                    '<a href="#tab3" id="tab3" class="tab-link"><i class="f7-icons">add_round_fill</i></a>'+
                    '<a href="#tab4" id="tab4" class="tab-link"><i class="f7-icons">bell_fill</i></a>'+
                    '<a href="#" data-panel="right" class="tab-link open-panel"><i class="f7-icons">more_round_fill</i></a>';
            }else if(res[0].level_id==3){
                myApp.closeModal();
                myApp.alert('Login Berhasil! Hi Pak '+$section_user,'Lapor RT');
                document.getElementById("tentuan").innerHTML = '<li>'+
                        '<a class="menu close-panel tab-link" href="#tab5">'+
                            '<div class="item-title menu">Profil</div> <!-- Menu Item -->'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="menu close-panel tab-link" href="#tab6">'+
                            '<div class="item-title menu">Administrasi</div>'+
                        '</a>'+
                    '</li>'+
                    '<li class="accordion-item">'+
                        '<a class="menu close-panel tab-link" href="#tab7">'+
                            '<div class="item-inner">'+
                                '<div class="item-title menu">Iuran</div>'+
                            '</div>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="menu close-panel tab-link" href="#tab8">'+
                            '<div class="item-title menu">Organisasi</div>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="menu close-panel tab-link" href="#tab6">'+
                            '<div class="item-title menu">Data Warga</div>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="open-login-screen" href="#">'+
                            '<div class="item-title menu"> Logout</div>'+
                        '</a>'+
                    '</li>'+
                    '<div class="title">'+
                        'Information'+
                    '</div>'+
                        '<div class="content-block" style="text-align: justify;">'+
                            '<p>Aplikasi ini merupakan aplikasi administrator RT antar warga untuk mempermudah maskyarakat.</p>'+
                            '<p class="copyright">2017 Informatika Paramadina. ALL RIGHTS RESERVED</p>'+
                            '<p> Developed by: TIM anak Mampang</p>'+
                        '</div>';
                document.getElementById("tab").innerHTML = 
                    '<a href="#tab1rt" id="tab1" class="tab-link active"><i class="f7-icons">home_fill</i></a>'+
                    '<a href="#tab2rt" id="tab2" class="tab-link"><i class="f7-icons">chat_fill</i></a>'+
                    '<a href="#tab3rt" id="tab3" class="tab-link"><i class="f7-icons">add_round_fill</i></a>'+
                    '<a href="#tab4rt" id="tab4" class="tab-link"><i class="f7-icons">bell_fill</i></a>'+
                    '<a href="#" data-panel="right" class="tab-link open-panel"><i class="f7-icons">more_round_fill</i></a>';
            }
            
            }
    })
    if(!section || user == '' || pass ==''){
         myApp.alert('Login Gagal! Periksa akun anda atau pilih home untuk masuk','Lapor RT',function () {
         myApp.loginScreen();
            });
    }
});


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}