import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import LaunchData from './LaunchData';
import {fetchData} from '../actions';

const Launches = (props) => {
        
    useEffect(()=>{
        props.fetchData();
        console.log('Tamale Rocket', props)
    }, []);

    if(props.isFetching){
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2>Here is Data. Behold.</h2>
            {props.error && <p>{props.error}</p>}
            {props.capsules.map(item=>(
                <LaunchData key={item.id} item={item}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        capsules: state.capsules,
        isFetching: state.isFetching,
        error: state.error

    }
}

export default connect(
    mapStateToProps,
    {fetchData}
)(Launches);