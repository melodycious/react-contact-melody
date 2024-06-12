import React, {useContext, useEffect} from "react";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {

  const { store, actions } = useContext(Context);
  const handleDelete = () =>{
      actions.deleteContact(props.id);
  }

	return (
		
              <div className="container-fluid col-10">
              <div className="card mb-3" >
            <div className="row contactCard">
              <div className="col-3">
                <img src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg" className="rounded-circle mx-auto d-block img-fluid" />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h5 className="card-title">{props.fullName}</h5>
                  <p className="card-text"><i className="fas fa-map-marker-alt text-muted mr-3" /> {props.postalAddress}</p>
                  <p className="card-text"><i className="fa fa-phone fa-fw text-muted mr-3" /> {props.phoneNumber}</p>
                  <p className="card-text"><i className="fa fa-envelope fa-fw text-muted mr-3" /> {props.emailAddress}</p>
                </div>
              </div>
              <div className="col-md-1">
                <Link to={`/editForm/${props.id}`}>
                  <p className="card-text"><button className="btn"><i className="fas fa-pencil-alt" /></button></p>
                  </Link>
              </div>
              <div className="col-md-1">
                  <p className="card-text"><button className="btn" onClick={() => {handleDelete()}}><i className="fas fa-trash-alt" /></button></p>
              </div>
            </div>
          </div>
          </div>
            );

            
          };


/* import { Link } from "react-router-dom";
import profile-picture from "../../img/profile-picture.webp";

export const Cards = () => (
	<p>hola</p>
);
 */

/* Card.propTypes = {
  name: PropTypes.string
  address: PropTypes.string
  phone: PropTypes.string
  mail: PropTypes.string

}; */