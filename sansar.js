const express = require('express');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  } 
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "Sansar öpüldü");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();


const sansar = new Discord.Client();
sansar.login(process.env.token)
const sansar2 = new Discord.Client();
sansar2.login(process.env.token2)
const sansar3 = new Discord.Client();
sansar3.login(process.env.token3)
const sansar4 = new Discord.Client();
sansar4.login(process.env.token4)
const sansar5 = new Discord.Client();
sansar5.login(process.env.token5)
const sansar6 = new Discord.Client();
sansar6.login(process.env.token6)
const sansar7 = new Discord.Client();
sansar7.login(process.env.token7)




sansar.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === sansar.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let sansardm = await data.get(msg.author.id)
        
        if (sansardm === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4j Leave = Leave")    
          await sleep(4500)
          await msg.channel.send("https://discord.gg/43E5AfM4UG")
          await sleep(6500)
          await msg.channel.send("dn")  
      }
      }
    }
  }
})



sansar.on("ready", () => {
      setInterval(() => {
       let kanal = sansar.channels.cache.get("")  
       kanal.send("J4j bot deilim")


      }, 50000);
})  


sansar.on("ready", () => {
      setInterval(() => {
       let kanal = sansar.channels.cache.get("")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 

 
sansar.on("ready", () => {
      setInterval(() => {
       let kanal = sansar.channels.cache.get("")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 
sansar2.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === sansar2.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let sansardm2 = await data.get(msg.author.id)
        
        if (sansardm2 === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4j Leave = Leave")    
          await sleep(4500)
          await msg.channel.send("https://discord.gg/43E5AfM4UG")
          await sleep(6500)
          await msg.channel.send("dn")  
      }
      }
    }
  }
})



sansar2.on("ready", () => {
      setInterval(() => {
       let kanal = sansar2.channels.cache.get("828407265357725757")  
       kanal.send("J4j bot deilim")


      }, 50000);
})  


sansar2.on("ready", () => {
      setInterval(() => {
       let kanal = sansar2.channels.cache.get("828407265357725757")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 

 
sansar2.on("ready", () => {
      setInterval(() => {
       let kanal = sansar2.channels.cache.get("828407265357725757")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 


 
 sansar3.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === sansar3.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let sansardm3 = await data.get(msg.author.id)
        
        if (sansardm3 === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4j Leave = Leave")    
          await sleep(4500)
          await msg.channel.send("https://discord.gg/43E5AfM4UG")
          await sleep(6500)
          await msg.channel.send("dn")  
      }
      }
    }
  }
})



sansar3.on("ready", () => {
      setInterval(() => {
       let kanal = sansar3.channels.cache.get("746014645147664414")  
       kanal.send("J4j bot deilim")


      }, 50000);
})  


sansar3.on("ready", () => {
      setInterval(() => {
       let kanal = sansar3.channels.cache.get("746014645147664414")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 

 
sansar3.on("ready", () => {
      setInterval(() => {
       let kanal = sansar3.channels.cache.get("746014645147664414")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 
 

 sansar4.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === sansar4.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let sansardm4 = await data.get(msg.author.id)
        
        if (sansardm4 === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4j Leave = Leave")    
          await sleep(4500)
          await msg.channel.send("https://discord.gg/43E5AfM4UG")
          await sleep(6500)
          await msg.channel.send("dn")  
      }
      }
    }
  }
})



sansar4.on("ready", () => {
      setInterval(() => {
       let kanal = sansar4.channels.cache.get("801533384106835968")  
       kanal.send("J4j bot deilim")


      }, 50000);
})  


sansar4.on("ready", () => {
      setInterval(() => {
       let kanal = sansar4.channels.cache.get("801533384106835968")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 

 
sansar4.on("ready", () => {
      setInterval(() => {
       let kanal = sansar4.channels.cache.get("801533384106835968")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 
 


 sansar5.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === sansar4.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let sansardm5 = await data.get(msg.author.id)
        
        if (sansardm5 === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4j Leave = Leave")    
          await sleep(4500)
          await msg.channel.send("https://discord.gg/43E5AfM4UG")
          await sleep(6500)
          await msg.channel.send("dn")  
      }
      }
    }
  }
})



sansar5.on("ready", () => {
      setInterval(() => {
       let kanal = sansar5.channels.cache.get("828552635815821333")  
       kanal.send("J4j bot deilim")


      }, 50000);
})  


sansar5.on("ready", () => {
      setInterval(() => {
       let kanal = sansar5.channels.cache.get("828552635815821333")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 

 
sansar5.on("ready", () => {
      setInterval(() => {
       let kanal = sansar5.channels.cache.get("828552635815821333")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 
 
 sansar6.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === sansar6.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let sansardm6 = await data.get(msg.author.id)
        
        if (sansardm6 === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4j Leave = Leave")    
          await sleep(4500)
          await msg.channel.send("https://discord.gg/43E5AfM4UG")
          await sleep(6500)
          await msg.channel.send("dn")  
      }
      }
    }
  }
})



sansar6.on("ready", () => {
      setInterval(() => {
       let kanal = sansar6.channels.cache.get("812841929061564457")  
       kanal.send("J4j bot deilim")


      }, 50000);
})  


sansar6.on("ready", () => {
      setInterval(() => {
       let kanal = sansar6.channels.cache.get("812841929061564457")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 

 
sansar6.on("ready", () => {
      setInterval(() => {
       let kanal = sansar6.channels.cache.get("812841929061564457")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 

 sansar7.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === sansar7.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let sansardm7 = await data.get(msg.author.id)
        
        if (sansardm7 === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4j Leave = Leave")    
          await sleep(4500)
          await msg.channel.send("https://discord.gg/43E5AfM4UG")
          await sleep(6500)
          await msg.channel.send("dn")  
      }
      }
    }
  }
})



sansar7.on("ready", () => {
      setInterval(() => {
       let kanal = sansar7.channels.cache.get("791258478404304896")  
       kanal.send("J4j bot deilim")


      }, 50000);
})  


sansar7.on("ready", () => {
      setInterval(() => {
       let kanal = sansar7.channels.cache.get("791258478404304896")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 

 
sansar7.on("ready", () => {
      setInterval(() => {
       let kanal = sansar7.channels.cache.get("791258478404304896")  
 kanal.send("J4j bot deilim")


      }, 50000);
}) 