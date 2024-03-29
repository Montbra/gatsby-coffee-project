import React from 'react'
import { Link } from 'gatsby'
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia dolor sapiente praesentium, natus adipisci, vero rerum libero illum est unde? Dignissimos aliquam tempora rerum incidunt dolorem facilis amet, deserunt voluptatibus vero voluptatem dolor odit quae obcaecati alias inventore odio sint esse natus, voluptates maxime. Commodi blanditiis sunt explicabo nam.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  )
}
