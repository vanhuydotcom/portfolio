
const myProjects: {
  name: string,
  des: string,
  image: string
}[] = [
    {
      name: "Space T",
      des: "Space T is a Platform connecting Homeowners with prestigious Furniture Companies, with thousands of offers for more than 8000+ Furniture, Decoration, Household products.",
      image: "/images/cover/demo.jpeg"
    },
    {
      name: "CFD Shop",
      des: "Online shopping for millions of men's and women's fashion products, electronics, home appliances... Good prices & many offers.",
      image: "/images/cover/demo.jpeg"
    },
    {
      name: "CFD Circle",
      des: "CFD Circle is a place to practice Front-end Dev and UX/UI Design courses, connect and share experiences with a team of dedicated and experienced instructors.",
      image: "/images/cover/demo.jpeg"
    },
    {
      name: "GBOX Studio",
      des: "GBOX STUDIOS aim is to create a full service offering clients the highest quality of work with a comprehensive understanding of modern production",
      image: "/images/cover/demo.jpeg"
    },
    {
      name: "WOODER",
      des: "Have a look at the best quality and luxurious furniture at an affordable price only at Wooder Furniture.",
      image: "/images/cover/demo.jpeg"
    }

  ]

const myExps: {
  startDay: string;
  endDay: string;
  thumnailImg: string;
  description: {
    companyName: string;
    position: string;
    works: string;
  }
}[] = [
    {
      startDay: "03.08.2021",
      endDay: "Current",
      thumnailImg: "",
      description: {
        companyName: "Spcae T",
        position: "Front End Developer",
        works: "Build E Commerce, Console, Real time Chat",
      }
    },
    {
      startDay: "01.02.2021",
      endDay: "1.07.2021",
      thumnailImg: "",
      description: {
        companyName: "Legia Express",
        position: "Front End Developer",
        works: "Build website with wordpress CMS, Create Landing Page",
      }
    },

    {
      startDay: "01.09.2018",
      endDay: "01.02.2019",
      thumnailImg: "",
      description: {
        companyName: "GangWhoo Clinic",
        position: "Front End Developer - Intern",
        works: "Create Landing Page",
      }
    },

  ]

export default function Home() {

  return (
    <div className="container">
      <section className="top sh">
        <div className="top__intro">
          <div className="top__intro-left">
            <h1>Hi, I'm Huy Van <br /> I'm Front-End Developer</h1>
          </div>
          <div className="top__intro-right">
            <h2>Someone who combines<br /> HTML, CSS, and JavaScript skills <br /> might be called a "front-end developer"</h2>
          </div>
        </div>
        <div className="top__scroll">
          <div className="line" />
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="projects pd">

        <h3 className="projects__title">My Projects</h3>
        {
          myProjects.map((elm, i) => {
            return (
              <div className="projects__item" key={i}>
                <div className="projects__item-line">.0{i + 1}</div>
                <div className="project">
                  <div className="project__title">
                    <h2>{elm?.name}</h2>
                  </div>
                  <div className="project__des">
                    <p>{elm?.des}</p>
                  </div>
                  <div className="project__img">
                    <div className="project__img-bg" style={{ backgroundImage: `url(${elm.image})` }} />
                  </div>
                </div>
              </div>
            )
          })
        }
      </section>
      <section className="exp pd">
        <h3 className="exp__title">My Experience</h3>
        <div className="exp__wrap">
          {
            myExps.map((elm, i) => {
              return (
                <div className={`exp__wrap-item ${i === 1 ? "anti__border" : ""}`} key={i}>
                  <div className="timeline">
                    <div className="timeline__wrap">
                      <div className="timline__wrap-from"><span className="txt">{elm.startDay}</span></div>
                      {/* <div className="timline__wrap-to"><span className="txt">{elm.endDay}</span></div> */}
                    </div>
                  </div>
                  <div className="marquee">
                    <div className="description">
                      {
                        Array(4).fill(elm.description).map((des, j) => {
                          return (
                            <div key={j}><p><strong>{des?.companyName}</strong> {des?.position} <strong> {des?.works} </strong>...</p></div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>

  )
}
