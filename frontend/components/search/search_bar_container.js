import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { search, clearSearch } from '../../actions/search_action';
import SearchBar from './search_bar'

const mapStateToProps = (state, ownProps) => {
    // debugger
    let pictures = Object.values(state.entities.searches)

    return {
        pictures,
    }

}

const mapDispatchToProps = (dispatch) => ({
    search: (searchInput) => dispatch(search(searchInput)),
    clearSearch: () => dispatch(clearSearch())
})

export default withRouter ( connect(mapStateToProps,mapDispatchToProps)(SearchBar))