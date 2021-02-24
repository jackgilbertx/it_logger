import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logsActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { id, date, tech } = log;

  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: 'Log Deleted' });
  };

  return (
    <li className="collection-item">
      <a
        onClick={() => setCurrent(log)}
        className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
        href="#edit-log-modal"
      >
        {log.message}
      </a>
      <br />

      <span className="grey-text">
        <span className="black-text">ID #{id} </span>
        Last Updated by
        <span className="black-text"> {tech} </span>
        on <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
      </span>
      <a href="#!" onClick={onDelete} className="secondary-content">
        <i className="material-icons delete grey-text">delete</i>
      </a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
    attention: PropTypes.bool,
    date: PropTypes.string,
    tech: PropTypes.string,
  }),
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
