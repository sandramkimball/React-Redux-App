import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import LaunchData from './LaunchData';
import {fetchData} from '../actions';

const Launches = props => {
        
    useEffect(()=>{
        props.fetchData();
    }, []);

    if(props.isFetching){
        return <p>Loading...</p>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.Launches.map(data=>(
                <LaunchData key={data.id} data={data}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        launches: state.launches,
        isFetching: state.isFetching,
        error: state.error

    }
}

export default connect(
    mapStateToProps{fetchData}
)(Launches);