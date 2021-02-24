import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  const onClick = () => {
    deleteTech(id);
    M.toast({ html: 'Tech Deleted' });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content">
          <i onClick={onClick} className="material-icons grey-text">
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
