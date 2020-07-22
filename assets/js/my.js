    var tite = "<h1>{{title}}</h1>";
    var con = "<span>{{welMsg}}</span>";

    var navList = [
                    {nav: 'ホーム'},
                    {nav: '子音アルファベット'},
                    {nav: '母音アルファベット'},
                    {nav: '作った目的'},
                  ];
    var navListMm = [
                    // {nav: 'Home'},
                    {nav: 'ဗျည်းအက္ခရာများ'},
                    // {nav: 'သရအက္ခရာများ'},
                  ];
    var yellow = "yellow";
    var green = "green";
    var white = "white";
    var red = "red";
    var blue = "blue";
    var wordList = [
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
                      {word: 'ဓ',phrase:'ဓ - ဓနိတော',jpVoice:'da_wat_chite - da ni taw',color: red},
                      {word: 'န',phrase:'န - ',jpVoice:'na_nge - ',color:blue},
                      {word: 'ပ',phrase:'ပ - ',jpVoice:'pa_saute - ',color:yellow},
                      {word: 'ဖ',phrase:'ဖ - ဖရုံယို အလွန်ချို',jpVoice:'pha_wa_htoke - pha yone yo a lon cho',color:green},
                      {word: 'ဗ',phrase:'ဗ - ဗလကြီး ဆင်ပြောင်စီး',jpVoice:'ba_lat_chite - ba la gyii sin pyaung see',color:white},
                      {word: 'ဘ',phrase:'ဘ - ',jpVoice:'ba_gone - ',color: red},
                      {word: 'မ',phrase:'မ - မမလေး ဝလုံးရေး',jpVoice:'ma - ma ma layy wa lone yayy',color:blue},
                      {word: 'ယ',phrase:'ယ - ယမင်းခင် ကကြိုးဆင်',jpVoice:'ya_pa_lat - ya minn khin ka kyo sin',color:yellow},
                      {word: 'ရ',phrase:'ရ - ရထားကြီး ပျော်ပျော်စီး',jpVoice:'ya_gaute - ya htarr gyi pyaw pyaw see',color:green},
                      {word: 'လ',phrase:'လ - လဝါဝါ ထိန်ထိန်သာ',jpVoice:'la - la war war htain htain thar',color:white},
                      {word: 'ဝ',phrase:'ဝ - ',jpVoice:'wa - ',color: red},
                      {word: 'သ',phrase:'သ - သပြေညို အောင်ပွဲကြို',jpVoice:'tha - tha pyay nyo aung pwe kyo',color:blue},
                      {word: '-',phrase:'',jpVoice:'',color:yellow},
                      {word: 'ဟ',phrase:'ဟ - ဟ ဟာ ဟား ရယ်လိုက်ရ',jpVoice:'ha - ha ha ha yee lite ya',color:green},
                      {word: 'ဠ',phrase:'ဠ - ',jpVoice:'la_gyi - ',color:white},
                      {word: 'အ',phrase:'အ - အမိမြေ ဒို့တိုင်းပြည် ငါတို့ချစ်တဲ့ မြေ',jpVoice:'a - a mi myay do tine pyay ngar do chit te myay',color: red},
                      {word: '-',phrase:'',jpVoice:'',color:blue},
                    ]

    Vue.component('app-nav',{
      props:['toshow'],
      template:"<a v-on:click='showPage(toshow.nav)'>{{toshow.nav}}</a>",
      methods:{
        showPage:function(pageTitle){
          if(pageTitle == "ホーム"){
            home.pgClassName = "home";
            page1.pgClassName = "page1 hide";
            page2.pgClassName = "page2 hide";
            lastPage.pgClassName = "lastPage hide";
            page1.pageTitle = "";
          }
          if(pageTitle == "子音アルファベット"){
            page1.pgClassName = "page1";
            home.pgClassName = "home hide";
            page2.pgClassName = "page2 hide";
            lastPage.pgClassName = "lastPage hide";
            page1.pageTitle = pageTitle;
          }
          if(pageTitle == "母音アルファベット"){
            page2.pgClassName = "page2";
            home.pgClassName = "home hide";
            page1.pgClassName = "page1 hide";
            lastPage.pgClassName = "lastPage hide";
            page1.pageTitle = pageTitle;
          }
          if(pageTitle == "作った目的"){
            lastPage.pgClassName = "lastPage";
            home.pgClassName = "home hide";
            page1.pgClassName = "page1 hide";
            page2.pgClassName = "page2 hide";
            page1.pageTitle = pageTitle;
          }
          menu.menu = "menu";

        },
      },
    })
    Vue.component('menu-icon',{
      template:'<div v-on:click = "showMenu()" class="menu-icon"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div>',
      methods:{
        showMenu:function(){
          menu.menu = "menu show";
        },
      }
    })
    Vue.component('off-icon',{
      template:'<div v-on:click = "showMenu()" class="off-icon"><img src="assets/img/close.svg"/></div>',
      methods:{
        showMenu:function(){
          menu.menu = "menu";
        },
      }
    })

    var bodyTitle = {mm: 'မြန်မာစာ ဗျည်းအက္ခရာ (၃၃) လုံး',jp:'ミャンマー子音３３アルファベット', en: "Myanmar 33 Cosonant Alphabet"};
    var bodyWelmsg = {mm: 'မြန်မာစာ သင်ပုန်းကြီး', jp: 'ミャンマーサー黒板', en: 'Myanmar Blackboard'};

    Vue.component('app-body',{
      template: "<div class='body'>" + con + ""  + tite + "</div>",
      data:function(){
        return{
          title: bodyTitle.jp,
          welMsg:bodyWelmsg.jp,
        }
      },
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
        title: "App8",
        navList: navList,
        navListMm: navListMm,
        wordList: wordList,
        message: "က - ကလေးငယ် ချစ်စဖွယ်",
        jpVoice: "ka_gyi - ka layy nge chit sa phwel",
        className:"yellow",
        menu:"menu",
        pageTitle : "",
        pgClassName : "page1 hide",
        selectedWord: 'က'
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
        navList: navList,
        navListMm: navListMm,
        menu:"menu",
        pageTitle : "",
        pgClassName : "home",

      },
      mouted(){
        page1.pgClassName = "page1 hide";
        page2.pgClassName = "page2 hide";
      }

    })
    var page2 = new Vue({
      el: '#page2',
      data:{
        navList: navList,
        navListMm: navListMm,
        menu:"menu",
        pageTitle : "母音アルファベット",
        pgClassName : "page2 hide",

      },
      mouted(){
        home.pgClassName = "home hide";
        page1.pgClassName = "page1 hide";
      }

    })
    var lastPage = new Vue({
      el: '#lastPage',
      data:{
        navList: navList,
        navListMm: navListMm,
        menu:"menu",
        pageTitle : "作った目的",
        pgClassName : "lastPage hide",

      },
      mouted(){
        home.pgClassName = "home hide";
        page1.pgClassName = "page1 hide";
      }

    })


    var menu = new Vue({
      el: '#menu',
      data:{
        menu:"menu hide",
        navList: navList,
        pgClassName: "home",
      },

    })
