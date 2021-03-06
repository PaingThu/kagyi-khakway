

    var navList = [
                    {nav: 'ホーム'},
                    {nav: '子音アルファベット'},
                    {nav: '母音アルファベット'},
                    {nav: '作った目的'},
                  ];
    var lmcNavListCo = [
                      {nav: '子音アルファベット書き方'},
                      {nav: 'その他１'},
                      {nav: 'その他２'},
                    ]
    var lmcNavListVo = [
                      {nav: '母音アルファベット書き方'},
                      {nav: 'その他１'},
                      {nav: 'その他２'},
                    ]
    var yellow = "yellow";
    var green = "green";
    var white = "white";
    var red = "red";
    var blue = "blue";
    var consoList = [
                      {word: 'က',phrase:'က - ကလေးငယ် ချစ်စဖွယ်',jpVoice:'ka_gyi - ka layy nge chit sa phwel', color:yellow},
                      {word: 'ခ',phrase:'ခ - ခရေကုံး မလေးပြုံ',jpVoice:'kha_kwayy - kha yay kone ma layy pyone',color:green},
                      {word: 'ဂ',phrase:'ဂ - ဂဏန်းသင် ပြုံးရွှင်ရွှင်',jpVoice:'ga_nge - gan nann thin pyone shwin shwin',color:white},
                      {word: 'ဃ',phrase:'ဃ - ',jpVoice:'ga_gyi - ',color: red},
                      {word: 'င',phrase:'င - ငချိတ်ပေါင်း စားလို့ကောင်း',jpVoice:'nga - nga chate paung sarr lo kaung',color:blue},
                      {word: 'စ',phrase:'စ - စခန်းသာ တောင်တန်းပြာ',jpVoice:'sa_lone - sa khann thar taung tan pyar',color:yellow},
                      {word: 'ဆ',phrase:'ဆ - ဆရာမ ရိုသေကြ',jpVoice:'sa_lane - sa yar ma yo thay gya',color:green},
                      {word: 'ဇ',phrase:'ဇ - ဇလပ်ဖြူသင်းကြူကြူ',jpVoice:'za_gwel - za lat phyu thinn kyu kyu',color:white},
                      {word: 'ဈ',phrase:'ဈ - ',jpVoice:'za_myin_zwe - ',color: red},
                      {word: 'ည',phrase:'ည - ညနေခင်း ရေခပ်ဆင်း',jpVoice:'nya - nya nay khinn yay khat sinn',color:blue},
                      {word: 'ဋ',phrase:'ဋ - ',jpVoice:'ta_talin_jate - ',color:yellow},
                      {word: 'ဌ',phrase:'ဌ - ',jpVoice:'hta_win_be - ',color:green},
                      {word: 'ဍ',phrase:'ဍ - ',jpVoice:'da_yin_gaute -',color:white},
                      {word: 'ဎ',phrase:'ဎ - ',jpVoice:'da_yin_mote -',color: red},
                      {word: 'ဏ',phrase:'ဏ - ',jpVoice:'na_gyi -',color:blue},
                      {word: 'တ',phrase:'တ - တမာပင် ရွာအဝင်',jpVoice:'ta_win_pu - ta mar pin ywar a win',color:yellow},
                      {word: 'ထ',phrase:'ထ - ထမင်းပွဲ လက်ဆုံနွှဲ',jpVoice:'hta_sin_htoo - hta minn pwe lat sone hnwel',color:green},
                      {word: 'ဒ',phrase:'ဒ - ဒရယ်ရုံ သားမျိုးစုံ',jpVoice:'da_dwayy - da yal yone tharr myo sone',color:white},
                      {word: 'ဓ',phrase:'ဓ - ဓနိတန်း ပင်လယ်ကမ်း',jpVoice:'da_wat_chite - da ni taw',color: red},
                      {word: 'န',phrase:'န - နဖူးပြင် နံ့သာတင်',jpVoice:'na_nge - ',color:blue},
                      {word: 'ပ',phrase:'ပ - ပလွေမှုတ် ကိုဖိုးတုတ်',jpVoice:'pa_saute - ',color:yellow},
                      {word: 'ဖ',phrase:'ဖ - ဖရုံယို အလွန်ချို',jpVoice:'pha_wa_htoke - pha yone yo a lon cho',color:green},
                      {word: 'ဗ',phrase:'ဗ - ဗလကြီး ဆင်ပြောင်စီး',jpVoice:'ba_lat_chite - ba la gyii sin pyaung see',color:white},
                      {word: 'ဘ',phrase:'ဘ - ဘဘိုးအို စီးလိုကြို',jpVoice:'ba_gone - ',color: red},
                      {word: 'မ',phrase:'မ - မမလေး ဝလုံးရေး',jpVoice:'ma - ma ma layy wa lone yayy',color:blue},
                      {word: 'ယ',phrase:'ယ - ယမင်းခင် ကကြိုးဆင်',jpVoice:'ya_pa_lat - ya minn khin ka kyo sin',color:yellow},
                      {word: 'ရ',phrase:'ရ - ရထားကြီး ပျော်ပျော်စီး',jpVoice:'ya_gaute - ya htarr gyi pyaw pyaw see',color:green},
                      {word: 'လ',phrase:'လ - လဝါဝါ ထိန်ထိန်သာ',jpVoice:'la - la war war htain htain thar',color:white},
                      {word: 'ဝ',phrase:'ဝ - ဝတုတ်တုတ် ဖိုး၀ရုပ်',jpVoice:'wa - ',color: red},
                      {word: 'သ',phrase:'သ - သပြေညို အောင်ပွဲကြို',jpVoice:'tha - tha pyay nyo aung pwe kyo',color:blue},
                      {word: '-',phrase:'',jpVoice:'',color:yellow},
                      {word: 'ဟ',phrase:'ဟ - ဟ ဟာ ဟား ရယ်လိုက်ရ',jpVoice:'ha - ha ha ha yee lite ya',color:green},
                      {word: 'ဠ',phrase:'ဠ - ',jpVoice:'la_gyi - ',color:white},
                      {word: 'အ',phrase:'အ - အမိမြေ ဒို့တိုင်းပြည် ငါတို့ချစ်တဲ့ မြေ',jpVoice:'a - a mi myay do tine pyay ngar do chit te myay',color: red},
                      {word: '-',phrase:'',jpVoice:'',color:blue},
                    ]
    var vowelList = [
                      {word: 'အ',jpVoice:'ka + a  → ka', symbol:' '},
                      {word: 'အာ',jpVoice:'ka + ar  → kar',symbol:'ာ'},
                      {word: 'ဣ',jpVoice:'ka + i  → ki',symbol:'ိ'},
                      {word: 'ဤ',jpVoice:'ka + i-  → ki-',symbol: 'ီ'},
                      {word: 'ဥ',jpVoice:'ka + u  → ku',symbol:'ု'},
                      {word: 'ဦ',jpVoice:'ka + u-  → ku-',symbol:'ူ'},
                      {word: 'ဧ',jpVoice:'ka + ay  → kay',symbol:'ေ'},
                      {word: 'အဲ',jpVoice:'ka + e  → ke',symbol:'ဲ'},
                      {word: 'ဩ',jpVoice:'ka + aw  → kaw',symbol: 'ော'},
                      {word: 'ဪ',jpVoice:'ka + aww  → kaw-',symbol:'ော်'},
                      {word: 'အံ',jpVoice:'ka + an  → kan',symbol:'ံ'},
                      {word: 'အား',jpVoice:'karr + arr  → karr',symbol:'ား'},
                    ]
    var bodyTitle = {page1:{mm: 'မြန်မာစာ ဗျည်းအက္ခရာ (၃၃) လုံး',jp:'ミャンマー子音３３アルファベット', en: "Myanmar 33 Cosonant Alphabet"},
                     page2:{mm: 'မြန်မာစာ သင်ရိုးသရအက္ခရာ (၁၂) လုံး',jp:'ミャンマーカリキュラム母音１２アルファベット', en: "Myanmar Carriculum 12 Vowel Alphabet"},
                     lastPage:{mm: 'မြန်မာစာသင်ပုန်းကြီး ဖန်တီးရသော ရယ်ရွယ်ချက်',jp:'作った目的', en: "The purpose of creating this app"}};
    var bodyMsg = {mm: 'မြန်မာစာ သင်ပုန်းကြီး', jp: 'ミャンマー語黒板', en: 'Myanmar Blackboard'};
    var vowelExplain = "子音は子音だけで発音が出られません。子音を母音で"


    Vue.component('app-nav',{
      props:['toshow'],
      template:"<a v-on:click='showPage(toshow.nav)'>{{toshow.nav}}</a>",
      methods:{
        showPage:function(pageTitle){
          if(pageTitle == "ホーム"){
            addClassBody("bg-origin");
            allHide();
            home.pgClassName = "home";
            appHeader.pageTitle = "";

          }
          if(pageTitle == "子音アルファベット"){
            addClassBody("bg-white");
            allHide();
            appTitle.pgClassName = "appTitle";
            page1.pgClassName = "page1";
            more.more = "more";
            appHeader.pageTitle = pageTitle;
            appTitle.title = bodyTitle.page1.jp;
            appTitle.subTitle = bodyMsg.jp;
            lmc.lmcNavList = lmcNavListCo;
          }
          if(pageTitle == "母音アルファベット"){
            addClassBody("bg-white");
            allHide();
            appTitle.pgClassName = "appTitle";
            page2.pgClassName = "page2";
            more.more = "more";
            appHeader.pageTitle = pageTitle;
            appTitle.title = bodyTitle.page2.jp;
            appTitle.subTitle = bodyMsg.jp;
            lmc.lmcNavList = lmcNavListVo;
          }
          if(pageTitle == "作った目的"){
            addClassBody("bg-white");
            allHide();
            appTitle.pgClassName = "appTitle";
            lastPage.pgClassName = "lastPage";
            appTitle.title = bodyTitle.lastPage.jp;
            appTitle.subTitle = bodyMsg.jp;
            appHeader.pageTitle = pageTitle;
          }
          menu.menu = "menu";
          more.pageTitle = pageTitle;

        },
      },
    })
    Vue.component('menu-icon',{
      template:'<div v-on:click = "showMenu()" class="menu-icon"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div>',
      methods:{
        showMenu:function(){
          menu.menu = "menu show";
          lmc.lmc = "hide";
        },
      }
    })
    var logoImg = '<img src="assets/img/mamawawa.png"/>';
    var menuTitle = '<span>'+bodyMsg.jp+'</span>'
    var closeBtn = '<img src="assets/img/close.svg"/>';
    var logoText = '<span>မမ ဝဝ ထထ က အက ပထမ</span>'
    Vue.component('off-icon',{
      template:'<div v-on:click = "showMenu()" class="off-icon">'+menuTitle+closeBtn+'</div>',
      methods:{
        showMenu:function(){
          menu.menu = "menu";
        },
      }
    })

    Vue.component('menu-logo',{
      template:'<div class="menu-logo">'+logoImg+'<br>'+logoText+'</div>'
    })

    var appHeader = new Vue({
      el: '#appHeader',
      data:{
        navList: navList,
        menu:"menu",
        pageTitle: "",
        pgClassName: "home",
        title:"",
        welMsg:"",
      },
    })

    var title = "<h1>{{this.$parent.title}}</h1>";
    var con = "<span>{{this.$parent.subTitle}}</span>";
    Vue.component('app-body',{
      template: "<div class='body'>" + con + ""  + title + "</div>",
    })

    var appTitle = new Vue({
      el: "#appTitle",
      data:{
        pgClassName: "hide",
        title:"",
        subTitle:"",
      },

    })

    var mmFlg = "<div class='mm-flg-img'><img src='assets/img/mmFlg.png'></div>"
    var hbTitle = "<h1>ミャンマー語</h1>";
    var letStudy = "<h2>勉強しましょう</h2>"
    var hbContent = "<div class='hb-content'><span>က</span><span>ခ</span><span>ဂ</span><span>ဃ</span><span>င</span></div>"
    var mamawawa = "<div class='mamawawa'><span>မမ ဝဝ ထထ က အက ပထမ</span></div>"
    var mamaImg = "<div class='mama-img'><img src='assets/img/mamawawa.png'></div>"
    Vue.component('home-body',{
      template:"<div v-on:click='hideMenu()' class='home-body'>" + mmFlg + hbTitle + letStudy + hbContent +  mamawawa + mamaImg +"</div>",
      methods:{
        hideMenu:function(){
          menu.menu="menu hide";
        },
      }
    })
    var home = new Vue({
      el: '#home',
      data:{
        pgClassName : "home",
      },
      mouted(){
        if(appHeader.pgClassName == "home"){
          pgClassName = "home";
          appHeader.pageTitle = "";
        }else{
          pgClassName = "home hide";
        }
      }
    })

    Vue.component('app-content',{
      props:['todo'],
      template: "<span :class = '[todo.color, {active: this.$parent.selectedWord == todo.word}]' v-on:click = 'showPhrase(todo)'>{{todo.word}}</span>",
      methods:{
        showPhrase:function(todo){
          page1.message = todo.phrase;
          page1.jpVoice = todo.jpVoice;
          page1.className = todo.color;
          menu.menu = "menu";
          this.$parent.selectedWord = todo.word;
        },
      }
    })
    var page1 = new Vue({
      el: '#page1',
      data:{
        consoList: consoList,
        message: "က - ကလေးငယ် ချစ်စဖွယ်",
        jpVoice: "ka_gyi - ka layy nge chit sa phwel",
        className:"yellow",
        menu:"menu",
        pgClassName : "page1 hide",
        selectedWord: 'က',
      },
      mouted(){
        if(appHeader.pgClassName == "page1"){
          pgClassName = "page1";
          appHeader.pageTitle = "子音アルファベット";
        }else{
          pgClassName = "page1 hide";
        }
      }
    })

    var labelPh1 = "<label class='phrase1'>";
    var labelPh2 = "<label class='phrase2'>";
    var labelPh3 = "<label class='phrase3'>";
    var closeLabel = "</label>";
    Vue.component('vowel',{
      props:['todo'],
      template: "<span :class = '{active: this.$parent.selectedWord == todo.word}' v-on:click = 'showPhrase(todo)'>{{todo.word}}<br><label>{{todo.symbol}}</label></span>",
      methods:{
        showPhrase:function(todo){
          page2.phrase1 = "က + " + todo.word;
          page2.phrase2 = "က・" + todo.symbol;
          page2.phrase3 = "က" + todo.symbol;
          page2.jpVoice = todo.jpVoice;
          menu.menu = "menu";
          this.$parent.selectedWord = todo.word;
        },
      }
    })
    var page2 = new Vue({
      el: '#page2',
      data:{
        vowelList: vowelList,
        phrase1: "က + အ",
        phrase2: "က ・  ",
        phrase3: "က",
        jpVoice: "ka + a  → ka",
        menu:"menu",
        pgClassName : "page2 hide",
        selectedWord: 'အ',
      },
      mouted(){
        if(appHeader.pgClassName == "page2"){
          pgClassName = "page2";
          appHeader.pageTitle = "母音アルファベット";
        }else{
          pgClassName = "page2 hide";
        }
      }

    })
    var lastPage = new Vue({
      el: '#lastPage',
      data:{
        menu:"menu",
        pgClassName : "lastPage hide",
      },
      mouted(){
        if(appHeader.pgClassName == "lastPage"){
          pgClassName = "lastPage";
          appHeader.pageTitle = "作った目的";
        }else{
          pgClassName = "lastPage hide";
        }
      }

    })


    var menu = new Vue({
      el: '#menu',
      data:{
        menu:"menu hide",
        navList: navList,
      },
    })

    Vue.component('lmc-nav',{
      props:['toshow'],
      template:"<a v-on:click='showPage(toshow.nav)'>{{toshow.nav}}</a>",
      methods:{
        showPage:function(pageTitle){
          if(pageTitle == "ホーム"){
            addClassBody("bg-origin");
            allHide();
            home.pgClassName = "home";
            appHeader.pageTitle = "";

          }
          if(pageTitle == "子音アルファベット"){
            addClassBody("bg-white");
            allHide();
            appTitle.pgClassName = "appTitle";
            page1.pgClassName = "page1";
            more.more = "more";
            appHeader.pageTitle = pageTitle;
            appTitle.title = bodyTitle.page1.jp;
            appTitle.subTitle = bodyMsg.jp;
          }
          if(pageTitle == "母音アルファベット"){
            addClassBody("bg-white");
            allHide();
            appTitle.pgClassName = "appTitle";
            page2.pgClassName = "page2";
            more.more = "more";
            appHeader.pageTitle = pageTitle;
            appTitle.title = bodyTitle.page2.jp;
            appTitle.subTitle = bodyMsg.jp;
          }
          if(pageTitle == "作った目的"){
            addClassBody("bg-white");
            allHide();
            appTitle.pgClassName = "appTitle";
            lastPage.pgClassName = "lastPage";
            appTitle.title = bodyTitle.lastPage.jp;
            appTitle.subTitle = bodyMsg.jp;
            appHeader.pageTitle = pageTitle;
          }
          menu.menu = "menu";
          more.pageTitle = pageTitle;

        },
      },
    })
    var lmc = new Vue({
      el:'#learnMoreContents',
      data:{
        lmcNavList: lmcNavListCo,
        lmc:"hide",
      }
    })

    Vue.component('learn-more',{
      template:"<span v-on:click='learnMore()'>{{this.$parent.pageTitle}}についてもっと勉強</span>",
      methods:{
        learnMore:function(){
          if(lmc.lmc == "lmc"){
            lmc.lmc = "hide";
          }else{
            lmc.lmc = "lmc";
          }
          menu.menu = "menu";

        },
      }
    })
    var more = new Vue({
      el: '#more',
      data:{
        more: 'hide',
        pageTitle: '',
      }
    })

    function allHide() {
      appTitle.pgClassName = "hide";
      home.pgClassName = "home hide";
      page1.pgClassName = "page1 hide";
      page2.pgClassName = "page2 hide";
      lastPage.pgClassName = "lastPage hide";
      more.more = "hide";
      lmc.lmc = "hide";
    }

    function addClassBody(bgColor){
      $('body').removeClass();
      $('body').addClass(bgColor);
    }
