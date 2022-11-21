import Head from "next/head"
import Image from "next/image";
import { text } from "stream/consumers"
import styles from  "../styles/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faBars,
  faCaretDown,
  faCheck,
  faPhoneVolume,
  faCartShopping,
  faTruck,
  faRotate,
  faHeadset,
  faMobileScreen,
  faLocationDot,
  faShieldCat
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar,
  faCalendar,
  faHeart,
  faUser,
  faComment,
  faEnvelope,
  faCopyright
} from "@fortawesome/free-regular-svg-icons"
import{
  faFacebook,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faCcVisa,
  faCcDiscover,
  faCcMastercard,
  faCcPaypal
} from "@fortawesome/free-brands-svg-icons"
import cat1 from "../public/photo/cat1.jpg";
import cat2 from "../public/photo/cat2.jpg";
import person from "../public/photo/person.jpg";
import header from "../public/photo/header.jpg";
import food1 from "../public/photo/food1.jpg";
import food2 from "../public/photo/food2.jpg";
import food3 from "../public/photo/food3.jpg";
import food4 from "../public/photo/food4.jpg";
import food5 from "../public/photo/food5.jpeg";
import food6 from "../public/photo/food6.jpg";
import dog1 from "../public/photo/dog1.jpg";
import dog2 from "../public/photo/dog2.jpg";

export default function Home(){
 return(
  <div>
    <Head>
      <title>site</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
    </Head>
    <main className="main">
      <div className="head1">
        <div className="logo">
          <h1><FontAwesomeIcon className="sheildcat" icon={faShieldCat}/>DOG</h1>
        </div>
        <div className="search">
          <form className="searchform">
            <input className="searchinput" type="type" placeholder="Search our store"/>
            <button className="searchbutton">Search</button>
          </form>
        </div>
        <div className="head1icon">
          <div>
            <FontAwesomeIcon className="healthicon" icon={faUser}/>
            <FontAwesomeIcon className="healthicon" icon={faHeart}/>
            <FontAwesomeIcon className="healthicon" icon={faCartShopping}/>
          </div>
        </div>
      </div>
      <div className="head2">
        <div className="hum">
          <div className="hum2">
            <p>ALL CATEGRIES</p><p><FontAwesomeIcon className="baricon" icon={faBars}/></p>
          </div>
        </div>
        <div className="mainlist">
          <li >HOME<FontAwesomeIcon className="arrowicon"  icon={faCaretDown}/></li>
          <li >COLLECTION<FontAwesomeIcon className="arrowicon"  icon={faCaretDown}/></li>
          <li>BLOG</li>
          <li >PAGES<FontAwesomeIcon className="arrowicon" icon={faCaretDown}/></li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
        </div>
        <div className="phonenumber">
          <FontAwesomeIcon className="phoneicon" icon={faPhoneVolume}/>(0752)4892848
        </div>
      </div>
      <div className="header" style={{backgroundImage: `url(${header.src})`}}>
        <div className="text">
          <p>get up to 50% off</p>
          <h1>Winter Sale For<br/> Cats Food</h1>
          <div className="shopnow">
            SHOP NOW
          </div>
        </div>
      </div>
      <div className="best">
        <h1>Best Sellers</h1>
        <p>hifhiewufhhfuhfdiohowiejnendendewkdfoewjfjf<br/>neufhiewufhhf</p>
      </div>
      <div className="foodtype">
        <ul>
          <li className="li">Dogs Food</li>
          <li className="li">Cats Food</li>
          <li className="li">Fishs Food</li>
        </ul>
      </div>
      <div className="products">
        <div className="product">
          <div className="photo">
            <Image className="food" src={food1} alt="food1"/>
            <div className="sale">SALE</div>
            <div className="off">-20%</div>
          </div>
          <div className="Description">
            <p>Product</p>
            <p className="price">$223.00 USD</p>
            <p className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
        </div>
        <div className="product">
          <div className="photo">
            <Image className="food" src={food2} alt="food2"/>
            <div className="sale">SALE</div>
            <div className="off">-20%</div>
          </div>
          <div className="Description">
            <p>Product</p>
            <p className="price">$223.00 USD</p><span className="kha">$74575</span> <span className="dar">-13%</span>
            <p className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
        </div>
        <div className="product">
          <div className="photo">
            <Image className="food" src={food3} alt="food3"/>
            <div className="sale">SALE</div>
            <div className="off">-20%</div>
          </div>
          <div className="Description">
            <p>Product</p>
            <p className="price">$223.00 USD</p><span className="kha">$74575</span> <span className="dar">-13%</span>
            <p className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />               
            </p>
          </div>
        </div>
        <div className="product">
          <div className="photo">
            <Image className="food" src={food4} alt="food4"/>
            <div className="sale">SALE</div>
            <div className="off">-20%</div>
          </div>
          <div className="Description">
            <p>Product</p>
            <p className="price">$223.00 USD</p><span className="kha">$74575</span> <span className="dar">-13%</span>
            <p className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />                 
            </p>
          </div>
        </div>
        <div className="product">
          <div className="photo">
            <Image className="food" src={food5} alt="food5"/>
            <div className="sale">SALE</div>
            <div className="off">-20%</div>
          </div>
          <div className="Description">
            <p>Product</p>
            <p className="price">$223.00 USD</p><span className="kha">$74575</span> <span className="dar">-13%</span>
            <p className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />                  
            </p>
          </div>
        </div>
        <div className="product">
          <div className="photo">
            <Image className="food" src={food6} alt="food6"/>
            <div className="sale">SALE</div>
            <div className="off">-20%</div>
          </div>
          <div className="Description">
            <p>Product</p>
            <p className="price">$223.00 USD</p><span className="kha">$74575</span> <span className="dar">-13%</span>
            <p className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />               
            </p>
          </div>
        </div>
      </div>
      <div className="new" style={{backgroundImage:`url(${cat2.src})`}}>
        <div className="introduction">
          <p className="newseason">New season trends!</p>
          <h1>Best Summer Collection</h1>
          <h3>Sale Get up to 50% Off</h3>
          <div className="shop">shop now</div>
        </div> 
      </div>
      <div className="latest">
        <div className="up">
          <h2>Latest News</h2>
          <p>uhfewhfiuekuhiuhihuhuhihoihugigiuhwfiuh<br/>uhviuhfhlhuiuhhewifhi</p>
        </div>
        <div className="items">
          <div className="item">
          <div className="imagecat"><Image className="animals" src={dog1} alt={"dog1"} /></div>
            <div className="descriptioncat">
              <h3>Cats Blog That Help Cats</h3>
              <span><FontAwesomeIcon className="calendaricon" icon={faCalendar} /> may 26,2016</span><span><FontAwesomeIcon className="commenticon" icon={faComment} /> 0 comments</span>
              <p>hgrughireugheihgfbdberbfdbdbnn<br/>rfwefewfewfedfdbdbbdbfdwfwfffewf<br/>efewfwfwfwfdbffdbdfbdbweffefwff<br/>eefbdfewf..</p>
            </div>
          </div>
          <div className="item">
            <div className="imagecat"><Image className="animals" src={cat1} alt={"cat2"} /></div>
            <div className="descriptioncat">
              <h3>Answer your Question cat</h3>
              <span><FontAwesomeIcon className="calendaricon" icon={faCalendar} /> may 26,2016</span><span><FontAwesomeIcon className="commenticon" icon={faComment} /> 0 comments</span>
              <p>hgrughireugheihgfbdberbfdbdbnn<br/>rfwefewfewfedfdbdbbdbfdwfwfffewf<br/>efewfwfwfwfdbffdbdfbdbweffefwff<br/>eefbdfewf..</p>
            </div>
          </div>
          <div className="item">
            <div className="imagecat"><Image className="animals" src={dog2} alt={"dog2"} /></div>
            <div className="descriptioncat">
              <h3>Share the Love for printing</h3>
              <span><FontAwesomeIcon className="calendaricon" icon={faCalendar} /> may 26,2016</span><span><FontAwesomeIcon className="commenticon" icon={faComment} /> 0 comments</span>
              <p>hgrughireugheihgfbdberbfdbdbnn<br/>rfwefewfewfedfdbdbbdbfdwfwfffewf<br/>efewfwfwfwfdbffdbdfbdbweffefwff<br/>eefbdfewf..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourclient">
        <div className="descriptionour">
          <h2>Our Client Say!</h2>
          <p>uhfiufhiewhfhfijroerjdvmpsdmvpmvopmmvdosdmvfoerfojojf<br/>ijfoioejojfodmvspdovmsomvdpmovovpmsdvopmoewjoewjojfowjf<br/>jbbewjdpovmpsodmvsdomvopmfhbejhf</p>
        </div>         
        <div className="slid">
          <div className="left">{"<"}</div>
          <div className="human">
            <span className="imagehuman"><img className="person" src={person.src}/></span>
            <span className="Specifications">
              <p>Alden Smith</p>
              <h5>Designer</h5>
            </span>
          </div>
          <div className="right">{">"}</div>
        </div>
      </div>
      <div className="transfer">
        <div className="section">
          <FontAwesomeIcon className="latesticon" icon={faTruck}/>
          <h3>Free Delivery</h3>
          <p>oefmpwknfvfjdnknfdbnfd;dvmof<br/>oforifwolifhildvknifjwjof</p>
        </div>
        <div className="space"></div>
        <div className="section">
          <FontAwesomeIcon className="latesticon" icon={faRotate}/>
          <h3>30 Day Return</h3>
          <p>oefmpwknfvfjdnknfdbnfd;dvmof<br/>oforifwolifhildvknifjwjof</p>
        </div>
        <div className="space"></div>
        <div className="section">
          <FontAwesomeIcon className="latesticon" icon={faHeadset}/>
          <h3>24/7 support</h3>
          <p>oefmpwknfvfjdnknfdbnfd;dvmof<br/>oforifwolifhildvknifjwjof</p>
        </div>
      </div>
      <div className="subscribe">
        <div className="sub">
          <h1>Subscribe Oure Newsletters</h1>
        </div>
        <div className="email">
          <form className="formemail">
            <input className="emailinput" placeholder="Enter Email Address" type="text"/>
            <button className="bu" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="bigsection">
          <div className="brand">
            <span><h1><FontAwesomeIcon className="sheildcat" icon={faShieldCat}/>DOCA</h1></span>
            <span><p>ifoewhifoehuhihwih<br/>jbdbdsbhohoiisdbjb<br/>hoebhef</p></span>
            <span>
            <FontAwesomeIcon className="sochal" icon={faFacebook}/>
            <FontAwesomeIcon className="sochal" icon={faTwitter}/>
            <FontAwesomeIcon className="sochal" icon={faGoogle}/>
            <FontAwesomeIcon className="sochal" icon={faYoutube}/>
            <FontAwesomeIcon className="sochal" icon={faInstagram}/>
            </span>
          </div>
          <div className="sot">
            <div className="part">               
              <ul className="unl">
                <h4>Useful Link</h4>
                <li>beef dog rewards</li>
                <li>air dried salmon</li>
                <li>gison dog rewards</li>
                <li>air dried lumb</li>
                <li>air dried beef</li>
                <li>cat range chicken</li>
              </ul>
            </div>
            <div className="part">
              <ul className="unl">
                <h4>Category</h4>
                <li>Cats Food</li>
                <li>Dogs Food</li>
                <li>Fishs Food</li>
                <li>New Products</li>
              </ul>
            </div>
            <div className="part">
              <ul className="unl">
                <h4>My Account</h4>
                <li>My Orders</li>
                <li>My Cart</li>
                <li>My Addresses</li>
                <li>Sign In</li>                 
              </ul>
            </div>
            <div className="part">
              <ul className="unl">
                <h4>Contact Info</h4>
                <li className="home">
                  <span><FontAwesomeIcon icon={faLocationDot}/></span><span> 123 street,old traffort<br/>new york.USA</span>
                </li>
                <li className="home">
                  <span><FontAwesomeIcon icon={faEnvelope}/></span> <span>info@gmail.com</span>
                </li>
                <li className="home">
                  <span><FontAwesomeIcon icon={faMobileScreen}/></span><span> +910 345 567 24</span>
                </li>                 
              </ul>
            </div>
          </div>
        </div>
        <div className="small">
          <div className="year"> <FontAwesomeIcon className="copyright" icon={faCopyright}/> 2022 All Rights Received by Hastech </div>
          <div className="ccs">
            <FontAwesomeIcon className="cc" icon={faCcVisa}/>
            <FontAwesomeIcon className="cc" icon={faCcDiscover}/>
            <FontAwesomeIcon className="cc" icon={faCcMastercard}/>
            <FontAwesomeIcon className="cc" icon={faCcPaypal}/>
          </div>
        </div>
      </div>
    </main>
 </div>
 )
}