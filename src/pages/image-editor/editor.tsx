import Layout from 'Layouts';
import { Card, CardBody } from '@paljs/ui/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Draw from './draw';
import Canvas from './Canvas';

export default function Index() {
  const wall = 'http://lorempixel.com/400/400/sports/2';

  return (
    <Layout title="Index">
      <Card>
        <CardBody>
          <Draw />
          <br /> <br />
          <Canvas ImageToShow={wall} textToShow="chaymae sekhsoukh" width="800" height="500" />
        </CardBody>
      </Card>
    </Layout>
  );
}
