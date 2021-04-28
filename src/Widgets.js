import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArtcle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
            </div>
            {newsArtcle("Deepfake satellite images pose serious military and political challenges","Top news - 9049 readers")}
            {newsArtcle("Nvidia GPU owners warned about serious driver bugs — update now","Top news - 4033 readers")}
            {newsArtcle("It Turns Out Covid-19 Contact Tracing on Android Is Not So Private After All","Top news - 600 readers")}
            {newsArtcle("Why Titanfall 2 Player Counts Are Suddenly Hitting New Highs on Steam","Top news - 430 readers")}
            {newsArtcle("Nvidia GPU owners warned about serious driver bugs — update now","Top news - 4033 readers")}
            {newsArtcle("In Ukraine’s East, Fears Grow of New Russian Power Play","Top news - 356 readers")}

        </div>
        
    );
}

export default Widgets;
