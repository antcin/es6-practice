const channel = [
   {name:'HBO',premium:true},
   {name:'LIFE',premium:false},
   {name:'Max',premium:true},
   {name:'Cooking channel',premium:false},
   {name:'WOBI',premium:false}
];
const user = {
   name:'Francis',
   premium:true,
   premiumChannels:function(){
       // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
       const $this = this //
       return channels.filter(function(channel){
         return channel.premium && $this.premium //when this is called inside another function, it is not equal to the object but to the function; in this case, there's no reference to the premium object. With ES5, workaround is to create a variable outside function. This variable will store the this keyword and whenever we say this outside the function, $this is going to be the user object ("alias")
       })
   },
   channels:function(){
       // GET THE NON-PREMIUM CHANNELS
       return channels.filter(function(channel){
         return channel.premium === false;
       })
   }
}
console.log(user.premiumChannels())
// brings HBO and MAX
console.log(user.channels())
// brings LIFE, COOCKING CHANNEL AND WOBI
