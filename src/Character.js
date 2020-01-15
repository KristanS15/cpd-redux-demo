import React, { useEffect } from 'react';
import './styles/app.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCharacterAction } from './redux/actions/character.actions';
import { getCharacter, getCharacterPending, getCharacterError } from './redux/reducers/character';

function Character(props) {
    useEffect(() => {
        props.fetchCharacter(4);
    }, []);

	return (
        props.pending ? <p>Loading...</p> : <p>{ props.character.name }</p>
	);
}

const mapStateToProps = state => ({
    character: getCharacter(state.character),
    pending: getCharacterPending(state.character),
    error: getCharacterError(state.character)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCharacter: fetchCharacterAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Character)
