    var tite = "<h1>{{title}}</h1>";
    var con = "<span>{{welMsg}}</span>";

    var navList = [
                    {nav: 'Home'},
                    {nav: 'Service'},
                    {nav: 'About'},
                    {nav: 'Contact Us'}
                  ];
    var wordList = [
                      {word: 'က',phrase:'က - ကလေးငယ် ချစ်စဖွယ်',color:'yellow'},
                      {word: 'ခ',phrase:'ခ - ခရေကုံး မလေးပြုံ',color:'green'},
                      {word: 'ဂ',phrase:'ဂ - ဂဏန်းသင် ပြုံးရွှင်ရွှင်',color:'white'},
                      {word: 'ဃ',phrase:'ဃ - ',color: 'red'},
                      {word: 'င',phrase:'င - ငချိတ်ပေါင်း စားလို့ကောင်း',color:'blue'},
                      {word: 'စ',phrase:'စ - စခန်းသာ တောင်တန်းပြာ',color:'yellow'},
                      {word: 'ဆ',phrase:'ဆ - ဆရာမ ရိုသေကြ',color:'green'},
                      {word: 'ဇ',phrase:'ဇ - ဇလပ်ဖြူသင်းကြူကြူ',color:'white'},
                      {word: 'ဈ',phrase:'ဈ - ',color: 'red'},
                      {word: 'ည',phrase:'ည - ညနေခင်း ရေခပ်ဆင်း',color:'blue'},
                      {word: 'ဋ',phrase:'ဋ - ',color:'yellow'},
                      {word: 'ဌ',phrase:'ဌ - ',color:'green'},
                      {word: 'ဍ',phrase:'ဍ - ',color:'white'},
                      {word: 'ဎ',phrase:'ဎ - ',color: 'red'},
                      {word: 'ဏ',phrase:'ည - ညနေခင်း ရေခပ်ဆင်း',color:'blue'},
                      {word: 'တ',phrase:'တ - တမာပင် ရွာအဝင်',color:'yellow'},
                      {word: 'ထ',phrase:'ထ - ထမင်းပွဲ လက်ဆုံနွှဲ',color:'green'},
                      {word: 'ဒ',phrase:'ဒ - ဒရယ်ရုံ သားမျိုးစုံ',color:'white'},
                      {word: 'ဓ',phrase:'ဓ - ဓနိတော',color: 'red'},
                      {word: 'န',phrase:'န - ',color:'blue'},
                      {word: 'ပ',phrase:'ပ - ',color:'yellow'},
                      {word: 'ဖ',phrase:'ဖ - ဖရုံယို အလွန်ချို',color:'green'},
                      {word: 'ဗ',phrase:'ဗ - ဗလကြီး ဆင်ပြောင်စီး',color:'white'},
                      {word: 'ဘ',phrase:'ဘ - ',color: 'red'},
                      {word: 'မ',phrase:'မ - မမလေး ဝလုံးရေး',color:'blue'},
                      {word: 'ယ',phrase:'ယ - ယမင်းခင် ကကြိုးဆင်',color:'yellow'},
                      {word: 'ရ',phrase:'ရ - ရထားကြီး ပျော်ပျော်စီး',color:'green'},
                      {word: 'လ',phrase:'လ - လဝါဝါ ထိန်ထိန်သာ',color:'white'},
                      {word: 'ဝ',phrase:'ဝ - ',color: 'red'},
                      {word: 'သ',phrase:'သ - ',color:'blue'},
                      {word: '-',phrase:'',color:'yellow'},
                      {word: 'ဟ',phrase:'ဟ - ',color:'green'},
                      {word: 'ဠ',phrase:'ဠ - ',color:'white'},
                      {word: 'အ',phrase:'အ - ',color: 'red'},
                      {word: '-',phrase:'',color:'blue'},
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
      template: "<span :class = 'todo.color' v-on:click = 'showPhrase(todo.phrase,todo.color)'>{{todo.word}}</span>",
      methods:{
        showPhrase:function(phrase,color){
          app8.message = phrase;
          app8.className = color;
        },
      }
    })
    var app8 = new Vue({
      el: '#app8',
      data:{
        title: "App8",
        navList: navList,
        wordList: wordList,
        message: "က - ကလေးငယ် ချစ်စဖွယ်",
        className:"yellow"
      },

    })
