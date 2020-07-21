
    // var app = new Vue({
    //   el: '#app1',
    //   data: {
    //     title: "App1",
    //     message: "Hello Vue. I'm comming."
    //   }
    // })

    // var app2 = new Vue({
    //   el: '#app2',
    //   data:{
    //     title: "App2",
    //     message: 'you loaded this page on ' + new Date().toLocaleString()
    //   }
    // })

    // var app3 = new Vue({
    //   el: '#app3',
    //   data: {
    //     title: "App3",
    //     seen: true
    //   }
    // })

    // var app4 = new Vue({
    //   el: '#app4',
    //   data:{
    //     title: "App4",
    //     todos:[
    //       {text: 'Learn Javascript'},
    //       {text: 'Learn Vue'},
    //       {text: 'Build something awesome'}
    //     ]
    //   }
    // })

    // var app5 = new Vue({
    //   el: '#app5',
    //   data:{
    //     title: "App5",
    //     message: "Hello Vue.js!"
    //   },
    //   methods:{
    //     reverseMessage: function(){
    //       this.message = this.message.split('').reverse().join('');
    //     }
    //   }
    // })

    // var app6 = new Vue({
    //     el:'#app6',
    //     data:{
    //         title: "App6",
    //         message: ""
    //     }
    // })


    // Vue.component('todo-item',{
    //     props:['todo'],
    //     template: '<li>{{todo.text}}</li>'
    // })
    // var app7 = new Vue({
    //     el:'#app7',
    //     data: {
    //         title: "App7",
    //         groceryList:[
    //             {id:0, text:'Vegetables'},
    //             {id:1, text:'Cheese'},
    //             {id:2, text:'Whatever else humans are supposed to eat'}
    //         ]
    //     }
    // })

    var tite = "<h1>{{title}}</h1>";
    var con = "<span>{{welMsg}}</span>";
    var kagyi = "<div class='mm_alphabert'><span v-on:click = 'showKagyi'>က</span>";
    var kakhway = "<span v-on:click = 'showKakway'>ခ</span>";
    var gange = "<span v-on:click = 'showGange'>ဂ</span>";
    var gagyi = "<span v-on:click = 'showGagyi'>ဃ</span>";
    var nga = "<span v-on:click = 'showNga'>င</span></div>";
    var phrase = "<div class='showPhrase'><p :class='className'>{{message}}</p></div>";
    
    var navList = [
                    {nav: 'Home'},
                    {nav: 'Service'},
                    {nav: 'About'},
                    {nav: 'Contact Us'}
                  ];
    var classList = [
                      {class: 'Basic',fees:'xxx,xxx',startDate:'2020/Aug'},
                      {class: 'Intermediate',fees:'xxx,xxx',startDate:'2020/Aug'},
                      {class: 'Advanced',fees:'xxx,xxx',startDate:'2020/Aug'},
                    ]
    Vue.component('app-nav',{
      props:['toshow'],
      template:'<a>{{toshow.nav}}</a>'
    })
    
    Vue.component('app-body',{
      template: "<div class='body'>" + tite + ""  + con + "" + kagyi+ "" + kakhway + "" + gange + "" + gagyi + "" + nga + "" + phrase +"</div>",
      data:function(){
        return{
          title:'Ur Online Education',
          welMsg:'Welcome to our O-EDU!',
          message: "",
          className:"origin"
        }
      },
      methods:{
        showKagyi:function(){
          this.message = "က - ကလေးငယ် ချစ်စဖွယ်";
          this.className = "yellow";
        },
        showKakway:function(){
          this.message = "ခ - ခရေကုံး မလေးပြုံး";
          this.className = "green";
        },
        showGange:function(){
          this.message = "ဂ - ဂဏန်းသင် ပြုံးရွှင်ရွှင်";
          this.className = "white";
        },
        showGagyi:function(){
          this.message = "ဃ - ";
          this.className = "red";
        },
        showNga:function(){
          this.message = "င - ငချိတ်ပေါင်း စားလို့ကောင်း";
          this.className = "blue";
        },
      }
    })
    Vue.component('app-content',{
      props:['conte'],
      template: "<div class='content'><h3>{{conte.class}}</h3><h4>{{conte.fees}}</h4><h4>{{conte.startDate}}</h4></div>"
    })
    var app8 = new Vue({
      el: '#app8',
      data:{
        title: "App8",
        navList: navList,
        contentList: classList,        
      },
      
    })

