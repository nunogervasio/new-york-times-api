import React from "react";
import { Grid, Header, Image, Divider } from "semantic-ui-react";

const MostViewedCard = ({ headline, summary, pub_date, img_url, section }) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row reversed="mobile">
          <Grid.Column mobile={15} largeScreen={8} computer={8} tablet={8}>
            <Header as={"h3"}>
              <Header.Subheader>
                {section} - {pub_date}
              </Header.Subheader>
              {headline}
            </Header>
            <div className="margin-img">{summary}</div>
          </Grid.Column>
          <Grid.Column mobile={15} largeScreen={8} computer={8} tablet={8}>
            <Image src={img_url} centered={true} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </React.Fragment>
  );
};

export default MostViewedCard;
