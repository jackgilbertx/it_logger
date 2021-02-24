import React, { useEffect } from 'react';
import TechItem from './TechItem';
// import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Close
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});

TechListModal.propTypes = {
  techs: PropTypes.array,
  loading: PropTypes.bool,
  getTechs: PropTypes.func,
};

export default connect(mapStateToProps, { getTechs })(
  TechListModal
);
