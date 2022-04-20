import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaRupeeSign, GiTargetPrize } from "react-icons/fa";
import "./event.css";
import { db } from "../firebase";

import { Alert, Button, Form } from "react-bootstrap";

import MaterialIconsReact from "material-icons-react";
import { Navigate } from "react-router-dom";
import { LoaderComp } from "../components/Statistic";

export const DetailsComponent = () => {
  return (
    <div>
      <div style={{ height: "320px" }} class="reg_box   ">
        <div class="max_width  ">
          <div class="registered_count  ">
            <h2>Bookings</h2>
            <div class="text  ">
              {" "}
              8<span class="  ">Registered</span>
            </div>
          </div>
          <div class="item  ">
            <div class="icon  ">
              <img
                alt="View Icon"
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-view-icon.svg"
                width="16"
                height="16"
                class=" "
                loading="lazy"
              ></img>
              <span class=" ">Views</span>
            </div>
            <div class="text  "> 32,391 </div>
          </div>
          <div class="item   ">
            <div class="icon  ">
              <img
                width="16"
                height="16"
                alt="Remaining time"
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-days-left-icon.svg"
                class=" "
                loading="lazy"
              ></img>
              <span class=" "> days left</span>
            </div>
            <div class="text  "> 22 </div>
          </div>
          <div class="item   ">
            <div class="icon   ">
              <img
                alt="Required size of team"
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-team-size-icon.svg"
                width="16"
                height="16"
                class=" "
                loading="lazy"
              ></img>
              <span class=" ">Team Size</span>
            </div>
            <div class="text   "> 1 - 2 Members </div>
          </div>
          <div class="item  ">
            <div class="icon  ">
              <img
                width="16"
                height="16"
                alt="Deadline Icon"
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-date-time-icon.svg"
                class=" "
                loading="lazy"
              ></img>
              <span class=" ">Booking Deadline</span>
            </div>
            <div class="text  "> 21 Apr 22, 12:00 AM</div>
          </div>
          <div class="item  ">
            <div class="icon  ">
              <img
                width="16"
                height="16"
                alt="Registration Fee"
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/svg-images/d2c-rupee-icon.svg"
                class=" "
                loading="lazy"
              ></img>
              <span class=" "> Registration Fee </span>
            </div>
            <div class="text  "> Rs.50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DateandTime = (props) => {
  return (
    <div class="other_dtls date_box  ">
      <div class="title  ">
        <strong class=" ">
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-date-time-icon.svg"
            alt="Competition Date"
            width="20"
            height="20"
            class=" "
            loading="lazy"
          ></img>{" "}
          Date and time{" "}
        </strong>
        <button class="add_calendar   ">
          {" "}
          Add to Calendar
          <em class="material-icons  ">-&gt;</em>
        </button>
      </div>
      <div class="dtls  ">
        <div class=" ">
          <span class=" ">Start Date</span>
          <p class=" ">{props.start}</p>
        </div>
        <div class=" ">
          <span class=" ">End Date</span>
          <p class=" ">{props.end}</p>
        </div>
      </div>
    </div>
  );
};
const EventTitleComp = (props) => {
  return (
    // <h1>jhgjgkjg</h1>
    <div className="logo_box  ">
      <div className="img  ">
        <img
          width="110"
          height="110"
          noloading="true"
          class="  "
          alt=" competitions"
          src="https://th.bing.com/th/id/OIP.TnGtqMVagkMwIe6hXYYsOAHaHV?w=179&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        ></img>
      </div>
      <div class="cptn  ">
        <h1>
          {" "}
          {props.name}
          <span className="cap-content">College Event</span>
        </h1>
        <h2 className=" blue-text h3 ">
          <a class="cursor-pointer  ">
            Annasaheb dange College of Engineering and Technology Ashta
          </a>
        </h2>
        <h6>
         
        </h6>
      </div>
    </div>
  );
};

const Banner = (props) => {
  return (
    <div
      className="logo_box"
      style={{
        borderRadius: "15px",
        background: "#ffffff",
        objectFit: "cover",
        padding: "10px",
      }}
    >
      {console.log(props.url)}
      <img
        src={props.url}
        style={{
          width: "100%",
          height: "310px",
          borderRadius: "15px",
          OObjectFit: "fill",
          overflow: "hidden",
        }}
      ></img>
    </div>
  );
};

const BookingForm = (props) => {
  return (
    <div
      style={{
        display: "block",
        width: 330,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 30,
      }}
    >
      <h4>React-Bootstrap Form Component</h4>
      <Form>
        <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your your email address"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Click here to submit form
        </Button>
      </Form>
    </div>
  );
};

const Flight = [
  {
    src: "https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg",
    style: {
      height: "51px",
      margin: "22px 12px",
    },
    label: "rgb(13, 28, 83)",
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png",
    style: {
      height: "26px",
      margin: "34px 16px",
    },
    label: "rgb(90, 5, 49)",
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png",
    style: {
      height: "23px",
      margin: "41px 12px",
    },
    label: "rgb(230, 26, 56)",
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg",
    style: {
      height: "46px",
      margin: "22px 15px",
    },
    label: "rgb(252, 178, 50)",
  },
  {
    src: "https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg",
    style: {
      height: "51px",
      margin: "22px 12px",
    },
    label: "rgb(13, 28, 83)",
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png",
    style: {
      height: "26px",
      margin: "34px 16px",
    },
    label: "rgb(90, 5, 49)",
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png",
    style: {
      height: "23px",
      margin: "41px 12px",
    },
    label: "rgb(230, 26, 56)",
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg",
    style: {
      height: "46px",
      margin: "22px 15px",
    },
    label: "rgb(252, 178, 50)",
  },
];

const Cell = (props) => {
  const { index } = props;
  const [active, handleActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      id="cardContainer"
      style={{
        height: active ? `300px` : `100px`,
        transition: "0.9s",
      }}
    >
      <div id="firstDisplay">
        <div id="flightDetail">
          <div id="detailLabel">{props.val.CParentEvent}</div>
          <h6 style={{ fontWeight: "bold" }}>{props.val.CName}</h6>
          <div id="detailLabel">{props.val.College}</div>
        </div>
        <div id="flightDetail" style={{}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              id="detailLabel"
              style={{ fontWeight: "bold" }}
            >
              Coordinators
            </div>
           <span style={{fontWeight:'600',fontSize:'12px'}}>{props.val.CCordiName}</span>
           <span style={{fontWeight:'600',fontSize:'10px',padding:'2px',borderRadius:'10px',color:'blue'}}>{props.val.CCoordi}</span>
   
                    
          
           
          </div>
        </div>
      </div>
      <div
        id="first"
        style={{
          transform: active
            ? `rotate3d(1, 0, 0, -180deg)`
            : `rotate3d(1, 0, 0, 0deg)`,
          transitionDelay: active ? "0s" : "0.3s",
        }}
      >
        <div
          id="firstTop"
          onClick={() => {
            handleActive(!active);
          }}
        >
          <div id="timecontainer">
            {console.log(props.val)}
            <div id="detailDate">
              {props.val.CDate}
              <div id="detailTime">{props.val.CDate.substring(0, 2)}</div>
              {props.val.CTime}
            </div>
          </div>
          <div id="titleContainer">
            <h1 id="title1">{props.val.CName}</h1>
            <div id="feeprizeContainer">
              <MaterialIconsReact icon="currency_rupee" />
              {props.val.CFee === undefined ||
              props.val.CFee === null ||
              props.val.CFee === 0 ? (
                <h5
                  style={{
                    flex: "1",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  Free
                </h5>
              ) : (
                <h5
                  style={{
                    flex: "1",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  {props.val.CFee}
                </h5>
              )}

              <MaterialIconsReact icon="emoji_events" />
              <h5 style={{ flex: "1" }}>{props.val.CPrize1}</h5>
            </div>
            <p
              style={{
                fontSize: "8px",
                fontFamily: "serif",
                textAlign: "center",
              }}
            >
              Click Here For Details &amp; Booking
            </p>
          </div>
        </div>
        <div id="firstBehind">
          <div id="firstBehindDisplay">
            <div id="firstBehindRow">
              <div id="detail">
                {props.val.CDate}
                <div id="detailLabel">Event Date</div>
              </div>
              <div id="detail">
                Rs. {props.val.CPrize1}
                <div id="detailLabel">Prize 1</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                {props.val.CTime}
                <div id="detailLabel">Time</div>
              </div>
              <div id="detail">
                Rs. {props.val.CPrize2}
                <div id="detailLabel">Prize 2</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                {props.val.CMaxNo}
                <div id="detailLabel">Max Members</div>
              </div>
              <div id="detail">
                {props.val.CPrize3 !== "" ? props.val.CPrize2 : "NA"}
                <div id="detailLabel">Prize 3</div>
              </div>
            </div>
          </div>
          <div
            id="second"
            style={{
              transform: active
                ? `rotate3d(1, 0, 0, -180deg)`
                : `rotate3d(1, 0, 0, 0deg)`,
              transitionDelay: active ? "0.2s" : "0.2s",
            }}
          >
            <div id="secondTop" />
            <div id="secondBehind">
              <div id="secondBehindDisplay">
                <div id="price">
                  Rs. {props.val.CFee}
                  <div id="priceLabel">Fees</div>
                </div>
                <div id="price">
                  NA
                  <div id="priceLabel">Extra Charge</div>
                </div>
                <img
                  id="barCode"
                  src="https://github.com/pizza3/asset/blob/master/barcode.png?raw=true"
                />
              </div>

              <div
                id="third"
                style={{
                  transform: active
                    ? `rotate3d(1, 0, 0, -180deg)`
                    : `rotate3d(1, 0, 0, 0deg)`,
                  transitionDelay: active ? "0.4s" : "0s",
                }}
              >
                <div id="thirdTop" />
                
                <div id="secondBehindBottom">
                  <button
                    className="button"
                    style={{
                      // color: ""+Flight[index].label,
                      border: `1px solid ${Flight[index].label}`,
                    }}
                    onClick={() => navigate("/booking",{state:{name:""+props.val.CName,pname:""+props.val.CParentEvent,dates:""+props.val.CDate,college:""+props.val.College}})}
                  >
                   Book Sit
                  </button>
                </div>
              </div>
           
           
   </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataArr = Array(8).fill(0).map(Number.call, Number);
const App = () => {
  return (
    <div className="App">
      {DataArr.map((val, i) => i < 1 && <Cell key={i} index={i} />)}
    </div>
  );
};

const EventCards = (props) => {
  
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "space-around",
      }}
    >
      {props.comp.map((val, i) => (
        <div>
          <Cell key={i} val={val} index={i} />
          {console.log(val)}
        </div>
      ))}
    </div>

    // </div>
  );
};

const Coordinators = (props) => {
  return (
    <div className="coordinator-body">
      <div class="card">
        <div class="banner">
          {/* <div class="avatar"></div> */}
          <h1>{props.cn.substring(0, 1)}</h1>
        </div>
        <h3>{props.cn}</h3>
        <h6>Student Incharge</h6>
        <a href="">{props.cno}</a>
      </div>
    </div>
  );
};

const Data = [
  {
    no: "1",
    name:
      "he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more",
  },
  {
    no: "2",
    name:
      "he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more",
  },
];

const Rules = () => {
  return (
    <div>
      <div className="rule_div">
        <ul style={{ listStyleType: "circle", textAlign: "start" }}>
          {Data.map(({ name, no }) => (
            <li>
              <span>Rule {no} </span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AlertComp = () => {
  return (
    <Alert style={{marginLeft:'0'}} variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, wellcome to our event, Hope you will participate and enjoy our
        event
      </p>
      <hr />
      <p className="mb-0">Whenever you need hel, contact us !</p>
    </Alert>
  );
};

const Event = () => {
  const navigate = useNavigate();
  const [Ename, setEname] = useState("");
  const [compList, setcompList] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    try {
      checkEvent();
    } catch (err) {
      navigate("/no-internet");
    }

    return () => {};
  }, [setEname]);

  const [Ecollege, setEcollege] = useState("");
  const [EstartDate, setEstartDate] = useState("");
  const [EendDate, setEendDate] = useState("");
  const [Etime, setEtime] = useState("");
  const [EcordName1, setEcordName1] = useState("");
  const [EcordName2, setEcordName2] = useState("");
  const [EcordPhone1, setEcordPhone1] = useState("");
  const [EcordPhone2, setEcordPhone2] = useState("");
  const [Erule, setErule] = useState([]);
  const [Ebanner, setEbanner] = useState("");

  const checkEvent = () => {
    db.collection("Events")
      .doc(id)
      .get()
      .then((snapshot) => {
        if (snapshot.data() === undefined || snapshot.data() === null) {
          return navigate("/no-internet");
        }
        fatchEventInfo();
      });
  };

  const fatchEventInfo = () => {
      console.log("iddd" + id);

      db.collection("Events")
        .doc(id)

        .get()
        .then((snapshot) => {
          if (snapshot !== null || snapshot !== undefined) {
            setEname(snapshot.data().EName);
            setEcollege(snapshot.data().ECollege);
            setEstartDate(snapshot.data().EStart);
            setEendDate(snapshot.data().EEndDate);
            setEtime(snapshot.data().ETime);
            setEcordName1(snapshot.data().ECordName1);
            setEcordPhone1(snapshot.data().ECordPhone1);
            setEcordName2(snapshot.data().ECordName2);
            setEcordPhone2(snapshot.data().ECordPhone2);
            setEbanner(snapshot.data().Url);
          } else {
            navigate("/no-internet");
          }
        });
      try {
        fatchComp();
      } catch (err) {
        console.log("" + err.message);
      }
    },
    fatchComp = (props) => {
      const docRef = db
        .collection("Events")
        .doc("" + id)
        .collection("SubComp");

      console.log("hello");

      docRef.get().then((doc) => {
        doc.forEach((ele) => {
          db.collection("Comp")
            .doc(ele.data().CName)
            .get()
            .then((snapshot) => {
              const data = snapshot.data();
              setcompList((arr) => [...arr, data]);
            });
        });
        setisLoaded(true);
      });
    };

  if (isLoaded) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          width: "100vw",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.932)",
        }}
      >
        

        <div className="body1">
          <h2 style={{ width: "100vw" }} className="header-title">
            <span>{Ename.substring(0, 2)}</span>
            {Ename.substring(2, Ename.length - 6)}
            <span>{Ename.substring(Ename.length - 6, Ename.length - 3)}</span>
            {Ename.substring(Ename.length - 3, Ename.length)}
          </h2>
        </div>

        <div style={{ marginLeft: "16px", marginRight: "15px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "1rem",
              columnGap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: "1" }}>
              <EventTitleComp
                style={{}}
                name={Ename}
                college={Ecollege}
              ></EventTitleComp>
            </div>
            <div style={{ flex: "1" }}>
              <DateandTime
                start={EstartDate}
                end={EendDate}
                time={Etime}
              ></DateandTime>
            </div>
          </div>
          <br></br>
          <AlertComp></AlertComp>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "1rem",
              columnGap: "1rem",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div style={{ minWidth: "200px", flex: "1" }}>
              <Banner
                style={{ flex: "1", width: "100%" }}
                url={Ebanner}
              ></Banner>
            </div>
            <div style={{ flex: "1" }}>
              <DetailsComponent style={{}}></DetailsComponent>
            </div>
          </div>
        </div>
        <h3 style={{ margin: "10px" }}>All Compititions</h3>
        <div
          style={{
            display: "flex",
            maxWidth: "80%",
            width: "",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EventCards comp={compList}></EventCards>
        </div>
        <br></br>
        <h3 style={{ margin: "10px" }}>Coordinators</h3>
        <div
          style={{
            margin: "10px",
            display: "flex",
            maxWidth: "80vw",
            width: "750px",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Coordinators cn={EcordName1} cno={EcordPhone1}></Coordinators>
          <Coordinators cn={EcordName2} cno={EcordPhone2}></Coordinators>
        </div>
        <div
          style={{
            margin: "10px",
            display: "flex",
            maxWidth: "80vw",
            width: "750px",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Rules></Rules>
        </div>
        <br></br>
        <br></br>

        <br></br>

        <div
          style={{
            width: "100%",
            background: "#2A265F",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h3 style={{ color: "#fff" }}>Thanks </h3>
          <h5 style={{ color: "#fff" }}>for visiting our event</h5>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "250px",
          height: "100vh",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <LoaderComp></LoaderComp>
      </div>
    );
  }
};
export default Event;
