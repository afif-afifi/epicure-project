import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Layout/Header/Header";


export function Restaurants() {
    return (
        <>
            <Header />
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="all" title="All">
                </Tab>
                <Tab eventKey="new" title="New">
                </Tab>
                <Tab eventKey="most popular" title="Most Popular">
                </Tab>
                <Tab eventKey="open now" title="Open Now">
                </Tab>
                <Tab eventKey="map view" title="Map View">
                </Tab>
            </Tabs>
        </>
    );
}
export default Restaurants;