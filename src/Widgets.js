import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle('REACT is back', 'Top news - 580 readers')}
      {newsArticle('Queen Elizabeth II corgis to live with the Duke and Duchess of York', 'Top CNN news - 798 readers')}
      {newsArticle('Mudslide traps drivers in Southern California', 'Top news - 526 readers')}
      {newsArticle('Glacier larger than Florida is rapidly losing ice', 'Top news - 472 readers')}
      {newsArticle('How sunlight could turn seawater into freshwater for coastal communities', 'Top news - 325 readers')}
            {newsArticle('Why major carriers are giving out free iPhones', 'Top news - 1127 readers')}
            {newsArticle('The worst of inflation finally might be over', 'Top news - 198 readers')}
    </div>
  );
}

export default Widgets;
