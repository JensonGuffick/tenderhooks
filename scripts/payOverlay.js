function openPayPage(album) {
				    var iframe = document.getElementById('pay-iframe');
				    iframe.src = '/shop/pay?album=' + encodeURIComponent(album);
				    document.getElementById('pay-overlay').style.display = 'block';
				}
				
				// Function to close the pay page overlay
				function closePayPage() {
				    document.getElementById('pay-overlay').style.display = 'none';
				}
				
				// Add click event to close the overlay when clicked outside the iframe
				document.getElementById('pay-overlay').addEventListener('click', function(event) {
				    if (event.target === this) {
				        closePayPage();
				    }
				});