

id= "23";
available = "true";
count = "49";
named = "Akintomide";
author = "Muiliyu";


let ans = {
  id: Number(id),
  available: Boolean(available),
  count: Number(count),
  name: named,
  author: author
}

console.log("Id: ", ans.id, "\t\tType of id: ", typeof(ans.id) 
              + "\nAvailable: ", ans.available, "\tType of available: ", typeof(ans.available) 
              + "\nCount: ", ans.count, "\t\tType of count: ", typeof(ans.count) 
              + "\nName: ", ans.name, "\tType of name: ", typeof(ans.name) 
              + "\nId : ", ans.author, "\t\tType of author: ", typeof(ans.author));
