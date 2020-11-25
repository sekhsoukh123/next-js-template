import React from 'react';
import { Table, Button } from 'react-bootstrap';
import Layout from 'Layouts';
import { Card, CardBody } from '@paljs/ui/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Index() {
  const fruits = [
    'Lemons',
    'Raspberries',
    'Strawberries',
    'Blackberries',
    'Kiwis',
    'Grapefruit',
    'Avocado',
    'Watermelon',
    'Cantaloupe',
    'Oranges',
    'Peaches',
  ];

  return (
    <Layout title="Index">
      <Card accent="Info">
        <header>
          <h4>Users List</h4>
        </header>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fruits.map((d, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{d}</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>

                  <td>
                    <Button variant="primary" size="sm" href="user/view/">
                      <FontAwesomeIcon icon={faEye} />{' '}
                    </Button>
                    <Button variant="success" size="sm" href="user/edit">
                      <FontAwesomeIcon icon={faPencilAlt} />{' '}
                    </Button>
                    <Button variant="danger" size="sm" href="#">
                      <FontAwesomeIcon icon={faTrash} />{' '}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Layout>
  );
}
