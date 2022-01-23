var div = document.getElementById('content');

if (window.console && console.clear) console.clear();
var scrollbarWidth = div.offsetWidth - div.clientWidth - parseFloat(getComputedStyle(div).borderLeftWidth) - parseFloat(getComputedStyle(div).borderRightWidth);
if (window.console) console.log('Scrollbar width (including rounding errors):', scrollbarWidth);

['clientWidth', 'scrollWidth', 'clientHeight', 'scrollHeight'].forEach(function (id) {
    document.getElementById(id).style[id.replace(/^[a-z]+/, '').toLowerCase()] = div[id] + 'px';
});

div.addEventListener('scroll', function (e) {
    ['paddingTop', 'cssHeight', 'scrollHeight', 'clone'].forEach(function (id) {
        document.getElementById(id).style.marginTop = -div.scrollTop + 'px'
    });
    ['paddingLeft', 'cssWidth', 'scrollWidth', 'clone'].forEach(function (id) {
        document.getElementById(id).style.marginLeft = -div.scrollLeft + 'px'
    });
    document.getElementById('paddingRight').style.opacity = div.scrollLeft ? 0 : 1;
    document.getElementById('paddingBottom').style.opacity = div.scrollTop ? 0 : 1;
    document.getElementById('cssHeight').style.opacity = div.scrollTop ? 0 : 1;
    document.getElementById('paddingTop').classList[div.scrollTop ? 'add' : 'remove']('scrolled');
});

var clone = div.cloneNode(true);
clone.id = 'clone';
// scrollbar spaing
clone.style.width = (div.clientWidth -  parseFloat(getComputedStyle(div).paddingLeft) - parseFloat(getComputedStyle(div).paddingRight)) + 'px';
div.parentNode.appendChild(clone);
