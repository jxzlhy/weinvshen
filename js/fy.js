		var obj,j;
var page=0;
var nowPage=0;//当前页
var listNum=4;//每页显示<ul>数
var PagesLen;//总页数
var PageNum=-1;//分页链接接数(5个)
$(document).ready(function(){
obj=$(".li_list div");
j=obj.length
PagesLen=Math.ceil(j/listNum);
upPage(0)
})
function upPage(p){
nowPage=p
//内容变换
for (var i=0;i<j;i++){
obj[i].style.display="none"
}
for (var i=p*listNum;i<(p+1)*listNum;i++){
if(obj[i])obj[i].style.display="inline-block"
}
//分页链接变换
// sliS='<a href="###" onclick="upPage(0)">首页</a>  '
var up = nowPage-1;
sliS3='<a href="###" onclick=upPage('+up+') class="one">上一页</a>'
if (up<0) {
	// alert("jj")
	// up==0;
	sliS3 ='<a href="###" class="one">第一页</a>'
};
var next = nowPage+1;
sliS4 ='<a href="###" onclick=upPage('+next+') class="two">下一页</a>'
if (next>(PagesLen-1)) {
	sliS4 ='<a href="###" class="two">没有了</a>'
};
var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2)
var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1
var sliC="",startPage,endPage;
if (PageNum>=PagesLen) {startPage=0;endPage=PagesLen-1}
else if (nowPage<PageNum_2){startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1}//首页
else {startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t}
for (var i=startPage;i<=endPage;i++){
 if (i==nowPage)sliC+='<a href="###" onclick="upPage('+i+')">'+(i+1)+'</a> '
 else sliC+='<a href="###" onclick="upPage('+i+')">'+(i+1)+'</a> '
}
// sliE=' <a href="###" onclick="upPage('+(PagesLen-1)+')">尾页</a>  '
// sliE2=nowPage+1+"/"+PagesLen+"页"
  
$(".changpage").html(sliS3+sliC+sliS4);
}
//////////////////
var obj1,j1;
var page1=0;
var nowPage1=0;//当前页
var listNum1=4;//每页显示<ul>数
var PagesLen1;//总页数
var PageNum1=-1;//分页链接接数(5个)
$(document).ready(function(){
obj1=$(".li_list1 div");
j1=obj1.length
PagesLen1=Math.ceil(j1/listNum1);
upPage1(0)
})
function upPage1(p1){
nowPage1=p1
//内容变换
for (var k=0;k<j1;k++){
obj1[k].style.display="none"
}
for (var k=p1*listNum1;k<(p1+1)*listNum1;k++){
if(obj1[k])obj1[k].style.display="inline-block"
}
//分页链接变换
// sliS='<a href="###" onclick="upPage1(0)">首页</a>  '
var up1 = nowPage1-1;
sliS5='<a href="###" onclick=upPage1('+up1+') class="one">上一页</a>'
if (up1<0) {
	// alert("jj")
	// up1==0;
	sliS5 ='<a href="###" class="one">第一页</a>'
};
var next1 = nowPage1+1;
sliS6 ='<a href="###" onclick=upPage1('+next1+') class="two">下一页</a>'
if (next1>(PagesLen1-1)) {
	sliS6 ='<a href="###" class="two">没有了</a>'
};
var PageNum1_2=PageNum1%2==0?Math.ceil(PageNum1/2)+1:Math.ceil(PageNum1/2)
var PageNum1_3=PageNum1%2==0?Math.ceil(PageNum1/2):Math.ceil(PageNum1/2)+1
var sliD="",startPage1,endPage1;
if (PageNum1>=PagesLen1) {startPage1=0;endPage1=PagesLen1-1}
else if (nowPage1<PageNum1_2){startPage1=0;endPage1=PagesLen1-1>PageNum1?PageNum1:PagesLen1-1}//首页
else {startPage1=nowPage1+PageNum1_3>=PagesLen1?PagesLen1-PageNum1-1: nowPage1-PageNum1_2+1;var t1=startPage1+PageNum1;endPage1=t1>PagesLen1?PagesLen1-1:t1}
for (var k=startPage1;k<=endPage1;k++){
 if (k==nowPage1)sliD+='<a href="###" onclick="upPage1('+k+')">'+(k+1)+'</a> '
 else sliD+='<a href="###" onclick="upPage1('+k+')">'+(k+1)+'</a> '
}
// sliE=' <a href="###" onclick="upPage1('+(PagesLen-1)+')">尾页</a>  '
// sliE2=nowPage1+1+"/"+PagesLen+"页"
  
$(".changpage1").html(sliS5+sliD+sliS6);
}
// ///////////////
var obj2,j2;
var page2=0;
var nowPage2=0;//当前页
var listNum2=4;//每页显示<ul>数
var PagesLen2;//总页数
var PageNum2=-1;//分页链接接数(5个)
$(document).ready(function(){
obj2=$(".li_list2 div");
j2=obj2.length
PagesLen2=Math.ceil(j2/listNum2);
upPage2(0)
})
function upPage2(p2){
nowPage2=p2
//内容变换
for (var i=0;i<j2;i++){
obj2[i].style.display="none"
}
for (var i=p2*listNum2;i<(p2+1)*listNum2;i++){
if(obj2[i])obj2[i].style.display="inline-block"
}
//分页链接变换
// sliS='<a href="###" onclick="upPage2(0)">首页</a>  '
var up2 = nowPage2-1;
sliS7='<a href="###" onclick=upPage2('+up2+') class="one">上一页</a>'
if (up2<0) {
	sliS7 ='<a href="###" class="one">第一页</a>'
};
var next2 = nowPage2+1;
sliS8 ='<a href="###" onclick=upPage2('+next2+') class="two">下一页</a>'
if (next2>(PagesLen2-1)) {
	sliS8 ='<a href="###" class="two">没有了</a>'
};
var PageNum3_2=PageNum2%2==0?Math.ceil(PageNum2/2)+1:Math.ceil(PageNum2/2)
var PageNum3_3=PageNum2%2==0?Math.ceil(PageNum2/2):Math.ceil(PageNum2/2)+1
var sliE="",startPage2,endPage2;
if (PageNum2>=PagesLen2) {startPage2=0;endPage2=PagesLen2-1}
else if (nowPage2<PageNum3_2){startPage2=0;endPage2=PagesLen2-1>PageNum2?PageNum2:PagesLen2-1}//首页
else {startPage2=nowPage2+PageNum3_3>=PagesLen2?PagesLen2-PageNum2-1: nowPage2-PageNum3_2+1;var t=startPage2+PageNum2;endPage2=t>PagesLen2?PagesLen2-1:t}
for (var i=startPage2;i<=endPage2;i++){
 if (i==nowPage2)sliE+='<a href="###" onclick="upPage2('+i+')">'+(i+1)+'</a> '
 else sliE+='<a href="###" onclick="upPage2('+i+')">'+(i+1)+'</a> '
}
// sliE=' <a href="###" onclick="upPage2('+(PagesLen2-1)+')">尾页</a>  '
// sliE2=nowPage2+1+"/"+PagesLen2+"页"
  
$(".changpage2").html(sliS7+sliE+sliS8);
}
