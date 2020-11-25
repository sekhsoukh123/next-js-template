import React from 'react';
import Layout from 'Layouts';
import { Card, CardBody, CardHeader } from '@paljs/ui/Card';
import { Col, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function View() {
  return (
    <Layout title="View">
      <Card accent="Info">
        <CardHeader>View User</CardHeader>
        <CardBody>
          {/* <dl className="row">
            <dt className="col-sm-3">Name</dt>
            <dd className="col-sm-9">Sekshoukh chaymae</dd>

            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">sekhsoukh95@gmail.com</dd>

            <dt className="col-sm-3">Adresse</dt>
            <dd className="col-sm-9">Agadir</dd>
          </dl> */}

          <Row className="col-sm-12">
            <Col className="col-sm-12 table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th style={{ width: '50%' }}>Nom:</th>
                    <td>user nom</td>
                  </tr>
                  <tr>
                    <th style={{ width: '50%' }}>Prénom:</th>
                    <td>user prenom</td>
                  </tr>
                  <tr>
                    <th>Email:</th>
                    <td>user email</td>
                  </tr>
                  <tr>
                    <th>Téléphone:</th>
                    <td>user telephone</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Layout>
  );
}
