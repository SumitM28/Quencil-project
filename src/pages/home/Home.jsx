import './home.css'
import Navbar from '../../components/navbar/Navbar'
import mainImg from '../../img/1.png'
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.png';
const Home = () => {
  return (
    <>
      <Navbar />

      {/* main section */}
      <main className='main' id='main'>
        <div className="mainContainer">
          <img src={mainImg} alt="" className="mainImg" />
          <div className="mainInfo">
            <p className="mainDes">
              Learn all IT Courses
              <br />
              from IT Experts
            </p>

            <button className="mainBtn">Enroll Now</button>
          </div>
        </div>
      </main>

      {/* section 1 */}
      <section className="section Founders">
        <div className="fContainer">
          <div className="fInfo">
            <h1 className="fTitle">Meet Our Founder</h1>
            <p className="fDes">Our Founder Mr. Kunal Sharma has designed and delivered the Quencil Java Full Stack Developer (JFSD) course, which is a 1000+ hour comprehensive, intensive, immersive, Edutainment based 360° Skills program and is a full one-stop solution to pursue your IT professional goals.
              <br />
              <br />
              Program is structured as a hands-on case study and real-time project-based learning approach that will enable every trained aspirant to improve their analytical and problem-solving skills by structuring, designing, coding, testing, and deploying end-to-end Full Stack software solutions to real- time scenarios using Modeling and DevOps concepts. The Quencil JFSD</p>

            <button className="fBtn">Learn More</button>
          </div>
          <div className="fbox"></div>
        </div>
      </section>

      {/* section 2 */}
      <section className="section products">
        <h1 className="pTitle">Case Studies & Projects</h1>
        <h3 className="pSubtitle">SOLUTION TO REAL-TIME SCENARIOS ON BOTH CLIENT SIDE & SERVER SIDE</h3>

        <div className="pContainer">

          <div className="pCard">
            <img src={img2} alt="" className="pCartImg" />
            <div className="pCardInfo">
              <h3 className="cardTitle">Planning </h3>
              <p className="cardDesc">
                Understanding The Problem Statement
                <br />

                Ask WHO,WHAT,WHEN,WHERE,WHY?
                <br />

                Create Clear Business Objective Statement
              </p>
            </div>
          </div>
          <div className="pCard">
            <img src={img3} alt="" className="pCartImg" />
            <div className="pCardInfo">
              <h3 className="cardTitle">Requirement <br /> Analysis</h3>
              <p className="cardDesc">
                Identity User-Story Elaborations
                <br />
                Identify Scope & Scope-Creep
                <br />
                Identify Functional & Non-Fucional Requirements
              </p>
            </div>
          </div>
          <div className="pCard">
            <img src={img4} alt="" className="pCartImg" />
            <div className="pCardInfo">
              <h3 className="cardTitle">Design & <br /> Modelling</h3>
              <p className="cardDesc">
                User-Case Diagrams
                <br />
                Activity Diagrams
                <br />
                Class Diagram
                <br />
                Sequence Diagrams
              </p>
            </div>
          </div>
          <div className="pCard">
            <img src={img5} alt="" className="pCartImg" />
            <div className="pCardInfo">
              <h3 className="cardTitle">Coding & Unit <br /> Testing</h3>
              <p className="cardDesc">
                Develop UI/UX Using Frontend
                <br />
                Technologies
                <br />
                Code Business Logic Using
                <br />
                Backend Technologies
                <br />
                Store & Retire Data Using
                <br />
                Database Technologies
              </p>
            </div>
          </div>
          <div className="pCard">
            <img src={img6} alt="" className="pCartImg" />
            <div className="pCardInfo">
              <h3 className="cardTitle">Integration & <br /> Deployment</h3>
              <p className="cardDesc">
                Build
                <br />
                Test
                <br />
                Package
                <br />
                Deploy
                <br />
                Release Java Full-Stack
                <br />
                Product
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="section Founders">
        <div className="fContainer s3Container">
          <div className="fInfo s3Info">
            <h1 className="fTitle">Why Should You Join Quencil</h1>
            <p className="s3Desc">
              No Matters What it Takes! We Will Empower You If You Have The Confidence And Willingness To Study Coding
              <br />
              <br />
              IIT And Stanford Alumni Created The Content Instant 1:1 Resolution Of Doubts
              <br />
              <br />
              Each Course Includes 100+ Problems And 10+ Projects For Hands-On-Learning.</p>
          </div>
          <img src={img7} alt="" className="s3Img" />
        </div>
      </section>
      {/* section 4 */}
      <section className="alumini section" id='alumini'>
        <h1 className="aTitle">Our Alumni Works In Top Companies</h1>
        <div className="aContainer">
          <div className="aCard"></div>
          <div className="aCard"></div>
          <div className="aCard"></div>
          <div className="aCard"></div>
          <div className="aCard"></div>
          <div className="aCard"></div>
          <div className="aCard"></div>
          <div className="aCard"></div>
          <div className="aCard"></div>
          <div className="aCard"></div>
          <div className="aCard"></div>
        </div>
      </section>

      <section className="section placement">
        <div className="placementContainer">
          <div className="placementInfo">
            <h1 className="placementTitle">Detailed Placements Drive Analysis</h1>
            <p className="placementDes">Quencil has created a strong network of prestigious Corporate Clients. A commitment to filling colours into our Trainees' ambitions and aspirations by persistently preparing them for fast- changing future skills and future workplaces is at the heart of our Placements team's DNA. Our corporate clientele includes top MNCs, mid-sized organisations, and IT start-up initiatives, and spans both service and product-based businesses. Our prestigious clients hire throughout the year to meet their project-specific skilled fresher requirements. We exclusively work with technical job roles and do not work with Tech-Support/KPO/BPO sorts of jobs</p>

            <button className="placementBtn">Learn More</button>
          </div>
          <div className="placementbox"></div>
        </div>
      </section>

    </>
  )
}

export default Home