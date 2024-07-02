import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <header>
        <div className="logo"> 
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand fs-1 fw-bolder">Capital Shop</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-support">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar-support">
                <ul className="navbar-nav mt-3">
                  <li className="nav-item"><a href="index.html" className="nav-link text-center">HOME</a></li>
                  <li className="nav-item"><a href="womans.html" className="nav-link text-center">WOMEN’S</a></li>
                  <li className="nav-item"><a href="mens.html" className="nav-link text-center">MEN’S</a></li>
                  <li className="nav-item"><a href="shop.html" className="nav-link text-center">BEBY-SHOP</a></li>
                  <li className="nav-item"><a href="about.html" className="nav-link text-center">ABOUT</a></li>
                  <li className="nav-item"><a className="nav-link text-center">BLOG</a></li>
                  <li className="nav-item"><a href="contact.html" className="nav-link text-center">CONTACT</a></li>
                </ul>
                <div className="login mt-3">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Section 1 */}
      <div className="section1">
        <div className="parent1">
          <h1 className="fw-bolder women">fashion Sale</h1>
          <p className="sitamet">Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-<br />unt labore edolore magna aliquapendisse ultrices gravida.</p>
          <h5 className="shop">SHOP NOW</h5>
          <h2 className="line1 text-danger">________</h2>
          <img src="4.jpg" className="img1" alt="Fashion Sale" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="section2">
        <h2 className="mt-4">NEW PRODUCT</h2>
        <h2 className="line2 text-danger">_____</h2>
      </div>

      {/* Section 3 */}
      <div className="section3">
        <div className="row">
          <div className="col-4 mt-3">
            <div className="card border border-white shadow">
              <div className="box3">
                <img src="bg2.jpg" alt="Men's Fashion" />
              </div>
              <div className="card-body">
                <p className="text-center">Men's Fashion</p>
                <p className="text-center star"><i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                <h5 className="text-center doller">$ 59.0</h5>
              </div>
            </div>
          </div>
          <div className="col-4 mt-3">
            <div className="card border border-white shadow">
              <div className="box3">
                <img src="bg3.jpg" alt="Women's Fashion" />
              </div>
              <div className="card-body">
                <p className="text-center">Women's Fashion</p>
                <p className="text-center star"><i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                <h5 className="text-center doller">$ 49.0</h5>
              </div>
            </div>
          </div>
          <div className="col-4 mt-3">
            <div className="card border border-white shadow">
              <div className="box3">
                <img src="bg4.jpg" alt="Baby Fashion" />
              </div>
              <div className="card-body">
                <p className="text-center">Baby Fashion</p>
                <p className="text-center star"><i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                <h5 className="text-center doller">$ 59.0</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <h2 className="mt-4">Trending This Week</h2>
        <h2 className="line2 text-danger">_____</h2>
      </div>

      {/* Section 4 */}
      <div className="section4">
        <div className="row">
          <div className="col-3 mt-3">
            <div className="card border border-white shadow">
              <div className="box3">
                <img src="bg5.jpg" alt="Cashmere Tank + Bag" />
              </div>
              <div className="card-body">
                <p className="text-center">Cashmere Tank + Bag</p>
                <p className="text-center star"><i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                <h5 className="text-center doller">$ 59.0</h5>
              </div>
            </div>
          </div>
          <div className="col-3 mt-3">
            <div className="card border border-white shadow">
              <div className="box3">
                <img src="bg6.jpg" alt="Cashmere Tank + Bag" />
              </div>
              <div className="card-body">
                <p className="text-center">Cashmere Tank + Bag</p>
                <p className="text-center star"><i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                <h5 className="text-center doller">$ 49.0</h5>
              </div>
            </div>
          </div>
          <div className="col-3 mt-3">
            <div className="card border border-white shadow">
              <div className="box3">
                <img src="bg7.jpg" alt="Cashmere Tank + Bag" />
              </div>
              <div className="card-body">
                <p className="text-center">Cashmere Tank + Bag</p>
                <p className="text-center star"><i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                <h5 className="text-center doller">$ 59.0</h5>
              </div>
            </div>
          </div>
          <div className="col-3 mt-3">
            <div className="card border border-white shadow">
              <div className="box3">
                <img src="bg8.jpg" alt="Cashmere Tank + Bag" />
              </div>
              <div className="card-body">
                <p className="text-center">Cashmere Tank + Bag</p>
                <p className="text-center star"><i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                <h5 className="text-center doller">$ 59.0</h5>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="section5 mt-5">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="d-block w-50" alt="...">
            <div class="box4">
            <h1 class="text-center text-danger">Customer Testimonial</h1>
            <p class="text-center"> Everybody is diffrent, which is why we offer styales for every body. Laborum <br /> fuga incidunt laboriosam volupats <br /> iure, delectus dignissimos facilis neque nulla earum.</p>
   
          </div>
</div>
</div>
<div class="carousel-item">
 <div class="d-block w-50" alt="...">
  <div class="box4">
  <h1 class="text-center text-primary">Customer Testimonial</h1>
  <p class="text-center"> Everybody is diffrent, which is why we offer styales for every body. Laborum<br /> fuga incidunt laboriosam volupats<br />iure, delectus dignissimos facilis neque nulla earum.</p>
   
</div>
</div>
</div>
<div class="carousel-item">
  <div class="d-block w-50" alt="...">
  <div class="box4">
  <h1 class="text-center text-success">Customer Testimonial</h1>
  <p class="text-center"> Everybody is diffrent, which is why we offer styales for every body. Laborum <br /> fuga incidunt laboriosam volupats <br />iure, delectus dignissimos facilis neque nulla earum.</p>
   
</div>
</div>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>


<div class="section6">
   	
   	<div class="child6">
   		
   		<div class="box6">
   			<h4 class="mt-4">HOT TREND</h4>
   			<h3 class="text-danger fw-bolder">_______</h3>
   		</div>
   		<div class="boxx6">
   			<p class="chain">Chain bucket bag</p>
   			<p class="text-center star6"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>	
   			<h5 class="text-center doller6">$ 59.0</h5>	 
   			<img src="img1.jpg" />
   		</div>

   		<div class="boxx6">
   			<p class="chain">Pendant earrings</p>
   			<p class="text-center star6"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>	
   			<h5 class="text-center doller6">$ 59.0</h5>	 
   			<img src="img2.jpg" />
   		</div>

   		<div class="boxx6">
   			<p class="chain">Cotton T-Shirt</p>
   			<p class="text-center star6"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>	
   			<h5 class="text-center doller6">$ 59.0</h5>	 
   			<img src="img3.jpg" />
   		</div>
   	</div>
   	<div class="child6">
   		
   		<div class="box6">
   			<h4 class="mt-4">BEST SELLER</h4>
   			<h3 class="text-danger fw-bolder">_______</h3>
   		</div>
   		<div class="boxx6">
   			<p class="chain">Cotton Men's jins</p>
   			<p class="text-center star6"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>	
   			<h5 class="text-center doller6">$ 59.0</h5>	 
   			<img src="img4.jpg" />
   		</div>

   		<div class="boxx6">
   			<p class="chain">Zip-pockets pebbled</p>
   			<p class="text-center star6"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>	
   			<h5 class="text-center doller6">$ 59.0</h5>	 
   			<img src="img5.jpg" />
   		</div>

   		<div class="boxx6">
   			<p class="chain">Round leather bag</p>
   			<p class="text-center star6"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>	
   			<h5 class="text-center doller6">$ 59.0</h5>	 
   			<img src="img6.jpg" />
   		</div>
   	</div>
   	<div class="child6">
   		
   		<div class="box6">
   			<h4 class="mt-4">FEATURE</h4>
   			<h3 class="text-danger fw-bolder">_______</h3>
   		</div>

   		<div class="boxx6">
   			<p class="chain">Bow wrap skirt</p>
   			<p class="text-center star6"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>	
   			<h5 class="text-center doller6">$ 59.0</h5>	 
   			<img src="img7.jpg" />
   		</div>

   		<div class="boxx6">
   			<p class="chain">Metallic earrings</p>
   			<p class="text-center star6"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>	
   			<h5 class="text-center doller6">$ 59.0</h5>	 
   			<img src="img8.jpg" />
   		</div>

   		<div class="boxx6">
   			<p class="chain">Flap cross-body bag</p>
   			<p class="text-center star6"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>	
   			<h5 class="text-center doller6">$ 59.0</h5>	 
   			<img src="img9.jpg" />
   		</div>
   	</div>
   </div>


   <div class="section2">
    	<h2 class="mt-4">Latest News</h2>
        <h2 class="line2 text-danger">_____</h2>
    </div>

    <div class="section3">
    	
    	<div class="row"> 
		<div class="col-4 mt-3"> 
		<div class="card border border-white shadow">
			<div class="box3">
			<img src="bg9.jpg" />
		</div>
			<div class="card-body">
			 	<h6 class="text-center text-danger">What Curling Irons Are The Best Ones</h6>
			 	<p class="text-center star mt-2">Consectetur adipisicing elit. Laborum fuga incidunt laboriosam delectus..</p>	
			 	<p class="text-center doller fw-bolder">Read More</p>		 
			</div>
		  </div>
		</div>

		<div class="col-4 mt-3">
		<div class="card border border-white shadow">
			<div class="box3">
			<img src="bg10.jpg" />
		    </div>
			<div class="card-body">
			 	 <h6 class="text-center text-danger">Vogue's To Autumn/ Winter 2019 Shoes</h6>
			 	<p class="text-center star mt-2">Consectetur adipisicing elit. Laborum fuga incidunt laboriosam delectus..</p>	
			 	<p class="text-center doller fw-bolder">Read More</p>		 	 
			</div>
		  </div>
		</div>

		 

		<div class="col-4 mt-3"> 
		<div class="card border border-white shadow">
			<div class="box3">
			<img src="bg11.jpg" />
		    </div>
			<div class="card-body">
			 <h6 class="text-center text-danger">What Curling Irons Are The Best Ones</h6>
			 	<p class="text-center star mt-2">Consectetur adipisicing elit. Laborum fuga incidunt laboriosam delectus..</p>	
			 	<p class="text-center doller fw-bolder">Read More</p>		 	 
			</div>
		  </div>
		</div>

	  </div>
	</div>



  <div class="section9 mt-5">
   	
   	<div class="box9">
   		<h1 class="mt-5 ms-5">Capital Shop</h1>
   		<p class="ms-5">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor incididunt<br /> cilisis.</p>
   		<div class="imglogo ms-5">
   		 
   		</div>
   	</div>
   	<div class="boxx9">
   		<h3 class="ms-5 mt-5">QUICK LINKS</h3>
   		<p class="ms-5">About</p>
   		<p class="ms-5">Blogs</p>
   		<p class="ms-5">Contact</p>
   		<p class="ms-5">FAQ</p>
   	</div>
   	<div class="boxx9">
   		<h3 class="mt-5 ms-5">ACCOUNT</h3>
   		<p class="ms-5">My Account</p>
   		<p class="ms-5">Orders Tracking</p>
   		<p class="ms-5">Checkout</p>
   		<p class="ms-5">Wishlist</p>
   	</div>
   	<div class="box9">
   		<h3 class="ms-2 mt-5">NEWSLETTER</h3>
   		<input type="text" name="" placeholder="Email" />
   		<button class="btn btn-primary sub">SUBSCRIBE</button>

   		<div class="icon ms-4 mt-4">
   			<span><i class="bi bi-facebook"></i> <i class="bi bi-twitter"></i> <i class="bi bi-youtube"></i> <i class="bi bi-instagram"></i> <i class="bi bi-pinterest"></i> </span>
   		</div>
   	</div>
   </div>

    
 





</div>




 
    
  );
}

export default App;
