import React from "react";
import { Segment, Header, Container } from "semantic-ui-react";

const Info = (): JSX.Element => {
  return (
    <Segment className="FlexColumnCenter">
      <Container text={true}>
        <Header 
          as="h1"
          content="Infoa sovelluksesta"
          textAlign="center"
        />
        <p>
          Sovelluksen on kehittänyt Mikko Luhtasaari vapaaehtoistyönä. Sovellus ei sisällä mainoksia, eikä käyttäjistä kerätä tai tallenneta mitään tietoja sovelluksen puolesta.
        </p>
        <p>
          Palautetta, kehitysehdotuksia, toivomuksia uusista lajeista, haukkuja, risuja ja ruusuja voi lähettää sähköpostilla osoitteeseen
          <br />
          <a href="mailto:&#109;&#105;&#107;&#107;&#111;&#046;&#108;&#117;&#104;&#116;&#097;&#115;&#097;&#097;&#114;&#105;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            &#109;&#105;&#107;&#107;&#111;&#046;&#108;&#117;&#104;&#116;&#097;&#115;&#097;&#097;&#114;&#105;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
          </a>
        </p>
        <Header
          as="h2"
          content="Teknistä tietoa"
          textAlign="center"
        />
        <p>
          Sovellus on avoimen lähdekoodin ja julkaistu MIT-lisenssillä.
          Lähdekoodit löytyvät <a target="_blank" rel="noopener noreferrer" href="https://github.com/MikkoLuhtasaari/score-counter">GitHubista.</a>
          <br />
          Käyttöliittymä on tehty <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">Reactilla </a>
          ja sovellusta hostataan <a target="_blank" rel="noopener noreferrer" href="https://aws.amazon.com/s3/">AWS:n S3 </a>
          bucketista Tukholmasta staattisena webbisivuna.
          Buckettiin on vapaa lukuoikeus, mutta sovelluksen päivittämiseen tarvitaan lisäoikeuksia.
        </p>
      </Container>
    </Segment>
  );
}

export default Info;