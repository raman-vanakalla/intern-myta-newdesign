var W= window.innerWidth;
var H= window.innerHeight;


$('.menubar').css('height',H);
$('.navbar').css('height',H/9);
$('.navbar').css('margin-left',W/6)
$('#logo').css('height',H/3);
$('svg').css('height',H/16);
$('.chapSelect').css('height',8*H/9-28);
$('#homeIcon').hover(function(){
	$('#homeIcon path').css('fill','#00B6EF');
},
function()
{
	$('#homeIcon path').css('fill','white');
});

$('#userIcon').hover(function(){
	$('#userIcon path').css('fill','#00B6EF');
},
function()
{
	$('#userIcon path').css('fill','white');
});

$('#bell').hover(function(){
	$('#bell path').css('fill','#00B6EF');
},
function()
{
	$('#bell path').css('fill','white');
});

$('.chapBody').hover(function()
{
   $('#percent').css('display','block');
},
function()
{
   $('#percent').css('display','none');
});
