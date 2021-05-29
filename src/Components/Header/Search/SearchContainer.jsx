import Search from "./Search";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);