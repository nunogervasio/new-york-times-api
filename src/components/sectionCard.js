import React from "react";
import PropTypes from "prop-types";
import { theDate } from "../utils/dateAndTime";
import { Header, Divider, Icon } from "semantic-ui-react";

const SectionCard = ({
  headline,
  summary,
  pub_date,
  sub_section,
  divider_icon,
  byline
}) => {
  return (
    <React.Fragment>
      <Header as="h4">
        <Header.Subheader>{sub_section}</Header.Subheader>
        {headline}
        <Header.Subheader>
          <br />
          {byline}
        </Header.Subheader>
        <Header.Subheader>{theDate(pub_date)}</Header.Subheader>
      </Header>
      <p>{summary}</p>
      <Divider horizontal={true}>
        <Icon name={divider_icon} />
      </Divider>
    </React.Fragment>
  );
};

export default SectionCard;

SectionCard.propTypes = {
  headline: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  pub_date: PropTypes.string.isRequired,
  sub_section: PropTypes.string.isRequired,
  divider_icon: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired
};
