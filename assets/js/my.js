    var tite = "<h1>{{title}}</h1>";
    var con = "<span>{{welMsg}}</span>";

    var navList = [
                    {nav: 'Home'},
                    {nav: 'ဗျည်းအက္ခရာများ'},
                    {nav: 'သရအက္ခရာများ'},
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
      template:'<a>{{toshow.nav}}</a>'
    })

    Vue.component('app-body',{
      template: "<div class='body'>" + con + ""  + tite + "</div>",
      data:function(){
        return{
          title:'မြန်မာစာ ဗျည်းအက္ခရာ (၃၃) လုံး',
          welMsg:'မြန်မာစာ သင်ပုန်းကြီး',
        }
      },
    })
    Vue.component('app-content',{
      props:['todo'],
      template: "<span :class = todo.color v-on:click = 'showPhrase(todo.phrase,todo.jpVoice,todo.color)'>{{todo.word}}</span>",
      methods:{
        showPhrase:function(phrase,jpVoice,color){
          app8.message = phrase;
          app8.jpVoice = jpVoice;
          app8.className = color;

        },
      }
    })
    var app8 = new Vue({
      el: '#app8',
      data:{
        title: "App8",
        navList: navList,
        navListMm: navListMm,
        wordList: wordList,
        message: "က - ကလေးငယ် ချစ်စဖွယ်",
        jpVoice: "ka_gyi - ka layy nge chit sa phwel",
        className:"yellow"
      },

    })
