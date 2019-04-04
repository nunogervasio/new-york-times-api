import React from "react";
import { timeDifference } from "../utils/dateAndTime";
import { Header, Divider, Icon } from "semantic-ui-react";

const TopStoriesCard = ({ headline, summary, pub_date, divider_icon }) => {
  return (
    <React.Fragment>
      <Header as="h4">
        {headline}
        <Header.Subheader>{timeDifference(pub_date)}</Header.Subheader>
      </Header>
      <p>{summary}</p>
      <Divider horizontal={true}>
        <Icon name={divider_icon} />
      </Divider>
    </React.Fragment>
  );
};

export default TopStoriesCard;
