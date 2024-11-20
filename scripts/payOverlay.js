function openPayPage(album) {
	var iframe = document.getElementById('pay-iframe');
	iframe.src = '/shop/pay.html?album=' + encodeURIComponent(album);
	document.getElementById('pay-overlay').style.display = 'block';
}

function closePayPage() {
	document.getElementById('pay-overlay').style.display = 'none';
}

document.getElementById('pay-overlay').addEventListener('click', function (event) {
	if (event.target === this) {
		closePayPage();
	}
});