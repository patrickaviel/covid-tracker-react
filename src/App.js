import React from 'react';

import { Cards,Chart,CountryPicker } from './components/';
import styles from './App.module.css';
import {fetchData} from './api';

import {Typography} from '@material-ui/core';

import covidImage from './images/covid.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData,country:country});
    }

    render() {
        const {data,country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covidImage} alt="covid-19" />
                <Typography variant="h2">Covid-19 Global Cases Tracker</Typography>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;