<div class="headd">Contact</div>
<div class="pb-80 pt-5">
		<div class="container">
			<h1 class="text-center text-uppercase pb-4">contact us</h1>

			<div class="row">
				<div class="col-lg-7 col-md-6 col-sm-12">
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-12">
							<div class="box-div">
								<h3>Azerbaijan</h3>

								<div class="contact-us">
									<div>
										<span>Address:</span>
										<span class="pl-6">Ashiq Molla Cuma Street 3, Office Center, Baku.</span>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-6 col-md-6 col-sm-12 p-top-30-px">
							<div class="box-div">
								<h3>Sri Lanka</h3>
								<div class="contact-us">
									<div>
										<span>Address:</span>
											<span class="pl-6"></span>357/A, R. A, Sir Henry de Mel Mawatha, Colombo 03.</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="pt-30">
						<div class="box-div">
							<h3>Pakistan</h3>
								<div class="contact-us">
									<div>
										<span>Address:</span>
											<span class="pl-6"></span>House # 17C, Street # 30, sector G6/2, Islamabad, Pakistan.
									</div>
								</div>
						</div>
					</div>
					<div class="pt-30">
						<div class="box-div">
							<h3>Contact Details</h3>
								<div class="contact-us">
								    <div>
										<span class="tel">Hotline:</span>
										<a href="tel:+994505982258" class="d-inline-block pl-8">
											<span class="d-block">+(994) 50 598 22 58</span>
										</a>
										<a href="tel:+994124045485" class="d-inline-block pl-68">
											<span class="d-block">+(994) 12 404 54 85</span>
										</a>
									</div>
									<div>
									    <span>E-mail: </span><a class="d-inline-block pb-2" href="mailto:info@brightnord.com">info@brightnord.com</a>
									</div>
								</div>
						</div>
					</div>
				</div>

				<div class="col-lg-5 col-md-6 col-sm-12 mobyux">
					<iframe width="100%" height="480" scrolling="no" style="border:0;" src="/conn/elaqeformu.php">
                    </iframe>
				</div>
			</div>
		</div>
	</div>
	
	<div>
		<div class="container-fluid p-0 position-relative">
			<span class="find-us d-none d-md-block" href="#">
				<span class="fw-bold">find us</span>
				<span><i class="fas fa-map-signs logo-location"></i></span>
			</span>

			<span class="d-inline-block mobile-find-us fw-bold d-md-none" href="#">
				<i class="fas fa-search-location"></i>
				<span>find us</span>
			</span>

			<div id="map" class="map-style"></div>
		</div>
	</div>
	
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmuy79KEiGsKJR5hiueSfAtaXuwcHgpwI&callback=initMap"></script>
	<script>
	    function initMap() {
    var uluru = {
        lat: 40.408627,
        lng: 49.859598
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        ///////
        styles: [{
        "elementType": "geometry",
        "stylers": [{
            "color": "#e2e2e2"
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#523735"
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#f5f1e6"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#c9b2a6"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#dcd2be"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#ae9e90"
        }]
    }, {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dfd2ae"
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dfd2ae"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#93817c"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#55ac6a"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#447530"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f1e6"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#fdfcf8"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f8c967"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#e9bc62"
        }]
    }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e98d58"
        }]
    }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#db8555"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#806b63"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dfd2ae"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#8f7d77"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#e2e2e2"
        }]
    }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dfd2ae"
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#b9d3c2"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#92998d"
        }]
    }]

        /////
    });
    
    var image = {
        url: '/img/marker-map.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(50,50),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0,0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(22,42)
    };
    
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image
    });
}
	</script>