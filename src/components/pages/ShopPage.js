import React from "react";
import { Paginate } from "../nav/Paginate";

const ShopPage = () => {
  return (
    <div>

<div class="filter">
    <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span class="fa fa-filter pl-1"></span></button>
</div>
<div id="mobile-filter">
<div>
        <h6 class="p-1 border-bottom"><b>Supplies </b></h6>
        <ul>
            <li><a href="#">Mountain</a></li>
            <li><a href="#">Rafting</a></li>
            <li><a href="#">Trekking</a></li>
            <li><a href="#">Exploring</a></li>
            <li><a href="#">Fishing</a></li>
        </ul>
    </div>
    <div>
        <h6 class="p-1 border-bottom">Filter By</h6>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                <span class="fa fa-circle pr-1" id="men"></span>Men
            </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                <span class="fa fa-circle pr-1" id="women"></span>Women
            </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                <span class="fa fa-circle pr-1" id="children"></span>Children
            </a></li>
        </ul>
    </div>
    <div>
        <h6>Cost</h6>
        <form class="ml-md-2">
            <div class="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="type" id="higher"/>
                <label for="higher" class="pl-1 pt-sm-0 pt-1">Higher</label>
            </div>
            <div class="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="type" id="lower"/>
                <label for="lower" class="pl-1 pt-sm-0 pt-1">Lower</label>
            </div>
            <div class="form-inline border rounded p-md-2 p-sm-1">
                <input type="radio" name="type" id="sales"/>
                <label for="sales" class="pl-1 pt-sm-0 pt-1">Sales</label>
            </div>
        </form>
    </div>
</div>
<section id="sidebar" className="my-5 border">
    <div>
        <h2 className="text-center mb-4 text-info">SHOP</h2>
        <h6 class="p-1 border-bottom"><b>Supplies </b></h6>
        <ul>
            <li><a href="#">Mountain</a></li>
            <li><a href="#">Rafting</a></li>
            <li><a href="#">Trekking</a></li>
            <li><a href="#">Exploring</a></li>
            <li><a href="#">Fishing</a></li>
        </ul>
    </div>
    <div>
        <h6 class="p-1 border-bottom">Filter By</h6>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                <span class="fa fa-circle pr-1" id="men"></span>Men
            </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                <span class="fa fa-circle pr-1" id="women"></span>Women
            </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                <span class="fa fa-circle pr-1" id="children"></span>Children
            </a></li>
        </ul>
    </div>
    <div>
        <h6 className="border-bottom">Cost</h6>
        <form class="ml-md-2 ">
            <div class="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="type" id="higher"/>
                <label for="higher" class="pl-1 pt-sm-0 pt-1">Higher</label>
            </div>
            <div class="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="type" id="lower"/>
                <label for="lower" class="pl-1 pt-sm-0 pt-1">Lower</label>
            </div>
            <div class="form-inline border rounded p-md-2 p-sm-1">
                <input type="radio" name="type" id="sales"/>
                <label for="sales" class="pl-1 pt-sm-0 pt-1">Sales</label>
            </div>
        </form>
    </div>
</section>

{/* card section */}

<section id="products">
<div class="container my-5">
    <div class="row">
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1 mt-3">
            <div class="card cardShop">
                <img class="card-img-top cardShop-img-top" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap"/>
                <div class="card-body cardShop-body">
                  <p class="card-text no-interaction">Wooden chair with legs</p>
                  <p className="no-interaction">$90</p>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 offset-lg-0 col-sm-4 offset-sm-2 col-11 offset-1 mt-3">
        <div class="card cardShop">
                <img class="card-img-top cardShop-img-top" src="https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap"/>
                <div class="card-body cardShop-body">
                  <p class="card-text no-interaction">Ugly chair and table set</p>
                  <p className="no-interaction">$100</p>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1 mt-3">
        <div class="card cardShop">
                <img class="card-img-top cardShop-img-top" src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap"/>
                <div class="card-body cardShop-body">
                  <p class="card-text no-interaction">Leather Lounger</p>
                  <p className="no-interaction">$950</p>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1 mt-3">
        <div class="card cardShop">
                <img class="card-img-top cardShop-img-top" src="https://images.unsplash.com/photo-1537182534312-f945134cce34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="card image cap"/>
                <div class="card-body cardShop-body">
                  <p class="card-text no-interaction">Tree Trunk table set</p>
                  <p className="no-interaction">$390</p>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1 mt-3">
        <div class="card cardShop">
                <img class="card-img-top cardShop-img-top" src="https://images.pexels.com/photos/3230274/pexels-photo-3230274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap"/>
                <div class="card-body cardShop-body">
                  <p class="card-text no-interaction">Red Leather Bar Stool</p>
                  <p className="no-interaction">$30</p>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1 mt-3">
        <div class="card cardShop">
                <img class="card-img-top cardShop-img-top" src="https://images.pexels.com/photos/3773571/pexels-photo-3773571.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap"/>
                <div class="card-body cardShop-body">
                  <p class="card-text no-interaction">Modern Dining Table</p>
                  <p className="no-interaction">$740</p>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1 mt-3">
        <div class="card cardShop">
                <img class="card-img-top cardShop-img-top" src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap"/>
                <div class="card-body cardShop-body">
                  <p class="card-text no-interaction">Boring Dining Table</p>
                  <p className="no-interaction">$760</p>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1 mt-3">
        <div class="card cardShop">
                <img class="card-img-top cardShop-img-top" src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap"/>
                <div class="card-body cardShop-body">
                  <p class="card-text no-interaction">An Ugly Office</p>
                  <p className="no-interaction">$90</p>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<footer class="container-fluid bg-light px-0">
        <div class="container py-lg-5 py-4">
        <Paginate/>    
        </div>
        <div class="container-fluid bg-dark text-center py-2">
            <span class="text-muted">Copyrigth 2022-2023 IncaAdventure SA - pending pattent &#174;</span>
        </div>
    </footer>

    </div>
  );
};

export default ShopPage;
