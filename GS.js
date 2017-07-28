var cssimagescratch = '<style>#hplogo{background:url(https://scratch.mit.edu/images/logo_sm.png) no-repeat}}</style>';
var logoscratch = 'https://scratch.mit.edu/images/logo_sm.png';
var logogoogle ='/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
var icongoogle = '/images/branding/product/ico/googleg_lodp.ico';
var iconscratch = 'https://scratch.mit.edu/favicon.ico';
if(window.location.href.indexOf('search?') + 1) {
document.write(document.documentElement.innerHTML.replace(logogoogle,logoscratch));
}
else{
document.write(document.documentElement.innerHTML + cssimagescratch);
}
document.write(document.documentElement.innerHTML.replace('Google','Scratch Search'));
document.write(document.documentElement.innerHTML.replace('Google','Scratch Search'));
document.write(document.documentElement.innerHTML.replace(icongoogle,iconscratch));



