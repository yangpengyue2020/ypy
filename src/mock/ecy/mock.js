let Mock = require("mockjs");
const arr = [
  {
    imgsrc: require("@/assets/ecy/1.jpg"),
    title: "迎着光走阴霾迟早会散去",
    author: "麦抖-美迪",
    num: "36.0万",
  },
  {
    imgsrc: require("@/assets/ecy/2.jpg"),
    title: "有组织派来扶贫的吗",
    author: "听渝-甜甜",
    num: "15.0万",
  },{
    imgsrc: require("@/assets/ecy/3.jpg"),
    title: "新主播，等你呀",
    author: "岩雀-小阿桃",
    num: "64.0万",
  },{
    imgsrc: require("@/assets/ecy/4.jpg"),
    title: "叮",
    author: "嬴城-开心",
    num: "2.8万",
  },
  {
    imgsrc: require("@/assets/ecy/1.jpg"),
    title: "迎着光走阴霾迟早会散去",
    author: "麦抖-美迪",
    num: "36.0万",
  },
  {
    imgsrc: require("@/assets/ecy/2.jpg"),
    title: "有组织派来扶贫的吗",
    author: "听渝-甜甜",
    num: "15.0万",
  },{
    imgsrc: require("@/assets/ecy/3.jpg"),
    title: "新主播，等你呀",
    author: "岩雀-小阿桃",
    num: "64.0万",
  },{
    imgsrc: require("@/assets/ecy/4.jpg"),
    title: "叮",
    author: "嬴城-开心",
    num: "2.8万",
  },
  {
    imgsrc: require("@/assets/ecy/1.jpg"),
    title: "迎着光走阴霾迟早会散去",
    author: "麦抖-美迪",
    num: "36.0万",
  },
  {
    imgsrc: require("@/assets/ecy/2.jpg"),
    title: "有组织派来扶贫的吗",
    author: "听渝-甜甜",
    num: "15.0万",
  },{
    imgsrc: require("@/assets/ecy/3.jpg"),
    title: "新主播，等你呀",
    author: "岩雀-小阿桃",
    num: "64.0万",
  },{
    imgsrc: require("@/assets/ecy/4.jpg"),
    title: "叮",
    author: "嬴城-开心",
    num: "2.8万",
  },
  {
    imgsrc: require("@/assets/ecy/1.jpg"),
    title: "迎着光走阴霾迟早会散去",
    author: "麦抖-美迪",
    num: "36.0万",
  },
  {
    imgsrc: require("@/assets/ecy/2.jpg"),
    title: "有组织派来扶贫的吗",
    author: "听渝-甜甜",
    num: "15.0万",
  },{
    imgsrc: require("@/assets/ecy/3.jpg"),
    title: "新主播，等你呀",
    author: "岩雀-小阿桃",
    num: "64.0万",
  },{
    imgsrc: require("@/assets/ecy/4.jpg"),
    title: "叮",
    author: "嬴城-开心",
    num: "2.8万",
  },
  
];
Mock.mock("/api/ecy", "post", function (config) {
  console.log("config", config);
  const {name} = JSON.parse(config.body);
  console.log(name)
  if(name == 1){
    return arr
  }
  if(name ==2){
    return arr.slice(3)
  }
  if(name ==3){
    return arr.slice(1)
  }
  if(name ==4){
    return arr.slice(2)
  }
  if(name ==5){
    return arr
  }
 
});
